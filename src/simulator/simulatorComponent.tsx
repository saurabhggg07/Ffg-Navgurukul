import React, {useEffect, useRef, useState} from "react";
import './simulatorComponent.css'
import * as En from 'blockly/msg/en';
import Blockly from "blockly";
import {onErrorMessage} from "../help/alert";
import { SVG } from '@svgdotjs/svg.js';
import frameStore from "../stores/frame.store";
import paint from "../core/virtual-circuit/paint";
import {centerCircuit} from "../core/virtual-circuit/centerCircuit";
import {arduinoComponentStateToId} from "../core/frames/arduino-component-id";
import update from "../core/virtual-circuit/update";
import '@svgdotjs/svg.panzoom.js'
import currentFrameStore from "../stores/currentFrame.store";
import {wait} from "@testing-library/user-event/dist/utils";

Blockly.setLocale(En);
function SimulatorComponent(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let container = useRef<HTMLDivElement>(null)
    let draw;
    let unsubscribes = [];
    let currentFrame = undefined;
    let frames = [];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        async function fetchData(){
            try{
                await import('@svgdotjs/svg.draggable.js');
                await import('@svgdotjs/svg.panzoom.js');
            }catch (e) {
                onErrorMessage('Please refresh your browser and try again.', e);
            }
        }
        fetchData().then(r => console.log("fetch done"))

        let width = container.current.clientWidth || container.current.getBoundingClientRect().width - 10;
        let height = container.current.clientHeight || container.current.getBoundingClientRect().height - 10;
        let count = 0;

        while (width < 0 || height < 0) {
            console.log('waiting to load');
            width = container.current.clientWidth - 10;
            height = container.current.clientHeight - 10;
            count += 1;
            if (count > 1000) {
                onErrorMessage('There is not enough room to render the Arduino', {});
                return;
            }
        }

        draw = SVG()
            .addTo(document.getElementById("container"))
            .size(container.current.clientWidth - 10, container.current.clientHeight - 10)
            .viewbox(0, 0, container.current.clientWidth - 10, container.current.clientWidth - 10)
            .panZoom();

        unsubscribes.push(
            frameStore.subscribe((frameContainer) => {
                let oldLastFrame =
                    frames.length > 0 ? frames[frames.length - 1] : undefined;
                frames = frameContainer.frames;
                const firstFrame = frames ? frames[0] : undefined;
                const lastFrame = frames ? frames[frames.length - 1] : undefined;
                currentFrame = firstFrame;
                paint(draw, frameContainer);
                update(draw, firstFrame);

                const oldListOfComponentIds = oldLastFrame
                    ? oldLastFrame.components
                        .map((f) => {
                            try {
                                return arduinoComponentStateToId(f);
                            } catch {
                                return '';
                            }
                        })
                        .join('')
                    : '';

                const newListOfComponentIds = lastFrame
                    ? lastFrame.components
                        .map((f) => {
                            try {
                                return arduinoComponentStateToId(f);
                            } catch {
                                return '';
                            }
                        })
                        .join('')
                    : '';

                if (newListOfComponentIds !== oldListOfComponentIds) {
                    centerCircuit(draw, lastFrame);
                }
            })
        );


        unsubscribes.push(
            currentFrameStore.subscribe((frame) => {
                currentFrame = frame;
                update(draw, currentFrame);
                // document.getElementById("container").innerHTML = draw.svg()
                container.current.innerHTML = draw.svg()


            })
        );

    },[])


    return(
        <div className="simulatorComponent" >
            <div ref={container}  id="container"/>
        </div>)

}

export default SimulatorComponent;