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
import { useHistory } from "react-router-dom";
import { play , stop }from "../player/playerComponent";
import startBlockly from "../core/blockly/startBlockly";
import {BsFillPlayCircleFill, BsPlusCircle, BsDashCircle, BsFillStopCircleFill} from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";

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
                if(container && container.current) container.current.innerHTML = draw.svg()


            })
        );

    },[])

    function zoomIn() {
        draw = draw.zoom(draw.zoom() + 0.05);
        if (container && container.current) container.current.innerHTML = draw.svg()
    }

    function zoomOut() {
        draw.zoom(draw.zoom() - 0.05);
        if (container && container.current) container.current.innerHTML = draw.svg()
    }

    function reCenter() {
        if (draw) {
            centerCircuit(
                draw,
                frames.length > 0 ? frames[frames.length - 1] : undefined
            );
        }
        if (container && container.current) container.current.innerHTML = draw.svg()
    }

    return(
        <React.Fragment>
            <div ref={container} id="container" className="simulator" />
            <div className="simulatorIcons">
                <BsFillPlayCircleFill onClick={play} className="simulatorIcon" color="green" />
                <BsFillStopCircleFill onClick={stop} className="simulatorIcon" color="red" />
                <BsPlusCircle onClick={zoomIn} className="simulatorIcon" color="grey" />
                <BsDashCircle onClick={zoomOut} className="simulatorIcon" color="grey" />
                <BiTargetLock onClick={reCenter} className="simulatorIcon" color="grey" />
            </div>
        </React.Fragment>
    )

}

export default SimulatorComponent;
