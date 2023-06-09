import {useEffect, useRef, useState} from "react";
import Blockly, {BlockSvg, WorkspaceSvg} from 'blockly';
import React from 'react';

import * as En from 'blockly/msg/en';
import {connect, useDispatch} from "react-redux";
import '../blocklyComponent/blocklyComponent.css'
import startBlockly from "../core/blockly/startBlockly";
import currentFrameStore from "../stores/currentFrame.store";
import {createBlock, getAllBlocks, getBlockById} from "../core/blockly/helpers/block.helper";
import updateLoopblockStore from "../stores/update-loopblock.store";
import {
    arduinoLoopBlockShowLoopForeverText,
    arduinoLoopBlockShowNumberOfTimesThroughLoop
} from "../core/blockly/helpers/arduino_loop_block.helper";
import {addListener, createFrames} from "../core/blockly/registerEvents";
import update from "../core/virtual-circuit/update";
import {draw} from "svelte/transition";
import { useHistory } from "react-router-dom";
import {googleLogout} from "@react-oauth/google";
import userAction from "../redux/actions/user";
Blockly.setLocale(En);
function resizeBlockly() {
    Blockly.svgResize(Blockly.getMainWorkspace() as WorkspaceSvg);
}
const BlocklyComponents = () => {
    const dispatch = useDispatch();
    let showLoopExecutionTimesArduinoStartBlock = true;
    const blocklyElement = useRef<HTMLDivElement>(null)
    const unsubscribes = [];
    let workspaceInitialize = false;
    const [loadEl,setLoadEl] = useState(0);

    useEffect(()=>{
        window.Blockly = Blockly;
        startBlockly(blocklyElement)
        unsubscribes.push(
            currentFrameStore.subscribe((frame) => {
                if (!frame) return;
                getAllBlocks().forEach((b) => b.unselect());
                const selectedBlock = getBlockById(frame.blockId);
                if (selectedBlock) {
                    selectedBlock.select();
                }
            })
        );
        unsubscribes.push(
            updateLoopblockStore.subscribe(() => {
                if (showLoopExecutionTimesArduinoStartBlock && workspaceInitialize) {
                    arduinoLoopBlockShowNumberOfTimesThroughLoop();
                } else if (workspaceInitialize) {
                    arduinoLoopBlockShowLoopForeverText();
                }
            })
        );
    },[loadEl])

    const history = useHistory();
    const navigateToVirtualCircuit = () => {
        history.push("/virtual-circuit")
    }

    const logoutUser = () =>{
        googleLogout();
        dispatch(userAction.loginFromGoogle(null));
        dispatch(userAction.setCurrentUser(null));
        history.push("/")
    }

    return(
        <React.Fragment>
            <div ref={blocklyElement}  id="blocklyElement" className="blocklyContainer"></div>
            <div className="injectionDiv geras-renderer classic-theme virtualCircuitButton" style={{ right: "1vw", top: "1vh", position: "absolute"}}>
                <button onClick={navigateToVirtualCircuit} className="virtualCircuitButton">Hit Me!</button>
            </div>
            <button onClick={logoutUser} className="logoutButton">Logout</button>
        </React.Fragment>)
}

const mapStateToProps = (state: { posts: any; }) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(BlocklyComponents);
