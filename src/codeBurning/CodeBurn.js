import React, { useState, useEffect } from "react";
import AvrgirlArduino from "avrgirl-arduino";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useToggle } from "@uidotdev/usehooks";

const CodeBurn = () => {
    const [browserSupported, updateBrowserSupported] = useState(true);
    const [fileArrayBuffer, setFileArrayBuffer] = useState(null);
    const [showDialog, toggleDialog] = useToggle(false);
    const [dialogText, setDialogText] = useState("");


    useEffect(() => {
        updateBrowserSupported('serial' in navigator);
        fetch('http://localhost:8080/get-code')
            .then(res => {
                console.log('res = ', res.data)
                console.log('res1 = ', res)
            })
    }, [])

    const handleDownload = async() => {
        let data
        try{
            const resp = await fetch('http://localhost:8080/get-code')
            data = await resp.arrayBuffer();

        }catch(e){
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
        avrgirl.flash(data, error=> {
            if(error) console.log("error = ", error)
            else {
                setDialogText("Flash done")
                console.log("flash done")
            }
        })
    }

    return(<div>
        {!browserSupported && <div className="w-screen h-screen bg-opacity-90 fixed bg-gray-900 z-20 flex flex-col gap-2 justify-center items-center text-white text-lg text-center">
            <h2 className="text-white text-4xl mb-6 font-bold">Browser is not supported😥</h2>
            <p>Sorry, <b>Web Serial</b> is not supported on this browser.</p>
            <p>If you are on computer, please use Chrome or Opera</p>
            <p >If you are using Chrome, please make sure you're running Chrome 78 or later <br /> and have enabled the
                <code>#enable-experimental-web-platform-features</code> flag in
                <code>chrome://flags</code>.</p>
            <p> Mobile browsers are also not supported, check <a className="underline text-blue-400" href="https://caniuse.com/web-serial">Can I Use WebSerial</a> for compatibility.</p>
            <br />
            <p> Check out the <a className="underline text-blue-400" href="https://github.com/andreasNordstrand/arduino-web-flasher"> GitHub repo</a> for more information.</p>

        </div>}
        <button onClick={handleDownload}>Burn Code</button>
        <Dialog>
            <DialogTitle>
                Burning to uno board
            </DialogTitle>
            {dialogText}
        </Dialog>
    </div>)
}

export default CodeBurn;
