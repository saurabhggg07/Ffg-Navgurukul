import React from 'react';
import axios from "axios";
import Daemon from 'arduino-create-agent-js-client';

const daemon = new Daemon('https://builder.arduino.cc/v3/boards');

let port;

async function connect(){
    try {
        port = await (navigator as any).serial.requestPort();
        let ports = await (navigator as any).serial.getPorts();
        ports.forEach((port) => {
            console.log('Serial port:', port);
            // You can inspect the port object properties to get information about each port
        });
        await port.open({ baudRate: 9600 }).then(console.log(port));
        (document.getElementById('connectButton') as any).disabled = true;
        (document.getElementById('disconnectButton') as any).disabled = false;
        const {data} = await axios.post('http://localhost:3000/', {
            port: '/dev/ttyUSB0',
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        console.log(data)
    }catch (error) {
        console.error('Serial port error:', error);
    }
}

async function disconnect() {
    try {
        await port.close();
        (document.getElementById('connectButton') as any).disabled = false;
        (document.getElementById('disconnectButton') as any).disabled = true;
    } catch (error) {
        console.error('Serial port error:', error);
    }
}
const BurningArduino = () => {
    console.log('daemon = ', daemon)
    return(<div>
        <button id="connectButton" onClick={connect}>Activate</button>
        <button id="disconnectButton" onClick={disconnect}>Deactivate</button>
    </div>)
}

export default BurningArduino
