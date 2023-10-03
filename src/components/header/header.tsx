import React, { useEffect, useState } from 'react'
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { BiArrowBack, BiMicrochip } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import userAction from "../../redux/actions/user";
import { useToggle } from "@uidotdev/usehooks";
import codeStore from "../../stores/code.store";
import AvrgirlArduino from "avrgirl-arduino";

declare global {
  interface Window {
    AndroidBridge: {
      hexDataUploadToAndroidDevice: (data: string) => void;
    };
  }
}

function Header(props) {
  const dispatch = useDispatch();
  const [browserSupported, updateBrowserSupported] = useState(true);
  const [fileArrayBuffer, setFileArrayBuffer] = useState(null);
  const [showDialog, toggleDialog] = useToggle(false);
  const [dialogText, setDialogText] = useState("");
  const [arduinoCode, setArduinoCode] = useState("")


  function handleCode() {
    props.func(!props.code);
  }

  function handleSimulator() {
    props.simulatorfunc(true);
    props.playfunc(true);
  }

  useEffect(() => {
    codeStore.subscribe(code => {
      setArduinoCode(code.code)
    })
    updateBrowserSupported('serial' in navigator);
    // fetch('http://localhost:8080/get-code',{
    //   method: "POST",
    //   body: arduinoCode
    // })
    //     .then(res => {
    //       console.log('res = ', res)
    //     })
  }, [])

  const history = useHistory();

  const hexCodeGeneration = async () => {
    let data
    try {
      const resp = await fetch('http://dev-api.arduino.merakilearn.org/get-code', {
        method: "POST",
        body: JSON.stringify({
          code: arduinoCode
        }),
        headers: {
          'content-type': 'application/json;charset=utf-8'
        }
      })
      data = await resp.arrayBuffer();
      var jsonData = JSON.stringify(Array.from(new Uint8Array(data)));

      window.AndroidBridge.hexDataUploadToAndroidDevice(jsonData)
      console.log('HexFile Data from API', data)
      console.log('HexFile Data after covert json string', jsonData)
    }
    catch (e) {
      setDialogText("Fetch failed")
      console.log('Fetch failed ', e)
      return
    }
    setDialogText("Fetch of hex file completed from server")
    setFileArrayBuffer(data);
  }

  const handleDownload = async () => {
    let data
    console.log('code = ', arduinoCode)
    try {
      const resp = await fetch('http://dev-api.arduino.merakilearn.org/get-code', {
        method: "POST",
        body: JSON.stringify({
          code: arduinoCode
        }),
        headers: {
          'content-type': 'application/json;charset=utf-8'
        }
      })
      data = await resp.arrayBuffer();

    } catch (e) {
      setDialogText("Fetch failed")
      console.log('Fetch failed ', e)
      return
    }

    setDialogText("Fetch of hex file completed from server")
    setFileArrayBuffer(data);
    const avrgirl = new AvrgirlArduino({
      board: "uno",
      debug: true,
    });
    avrgirl.flash(data, error => {
      if (error) console.log("error = ", error)
      else {
        setDialogText("Flash done")
        console.log("flash done")
      }
    })
  }

  const logoutUser = () => {
    googleLogout();
    dispatch(userAction.loginFromGoogle(null));
    dispatch(userAction.setCurrentUser(null));
    history.push("/")
  }

  return (
    <header className="w3-bar w3-top w3-light-green w3-text-black" style={{ height: "40px" }}>
      <div className="w3-bar-item w3-padding">
        <BiArrowBack onClick={logoutUser} />
      </div>
      <div className="w3-bar-item w3-right w3-medium" style={{ alignItems: "center", display: "flex" }} onClick={hexCodeGeneration}>
        <div style={{ whiteSpace: 'pre-wrap', cursor: "default" }}> HEX file generator </div>
      </div>
      <div className="w3-bar-item w3-right w3-medium" style={{ alignItems: "center", display: "flex" }} onClick={handleSimulator}>
        <div style={{ whiteSpace: 'pre-wrap', cursor: "default" }}> Play Simulator </div>
      </div>
      <div className="w3-bar-item w3-right w3-medium" style={{ alignItems: "center", display: "flex" }} onClick={handleDownload}>
        <BiMicrochip />
        <div style={{ whiteSpace: 'pre-wrap', cursor: "default" }}> Code Burn </div>
      </div>
      <div className="w3-bar-item w3-right w3-medium" style={{ alignItems: "center", display: "flex" }} onClick={handleCode}>
        {props.code ? <BsToggleOn /> : <BsToggleOff />}
        <div style={{ whiteSpace: 'pre-wrap', cursor: "default" }}> Enable Code View </div>
      </div>
    </header>
  )
}
export default Header
