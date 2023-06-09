import { MicroControllerType } from "../microcontroller/microcontroller";
import arduinoUnoSvg from "../../microcontrollers/arduino_uno/board.svg";
import arduinoMegaSvg from "../../microcontrollers/arduino_mega/board.svg";

export const getBoardSvg = (board: MicroControllerType) => {
    // if (boardSvg[board]) {
    //     return boardSvg[board];
    // }

    const boardString = `<svg id="MicroController" xmlns="http://www.w3.org/2000/svg" width="594.68" height="380.92" viewBox="0 0 594.68 380.92">
  <g>
    <g id="breadboard">
      <g id="breadboardbreadboard">
        <g id="background">
          <rect x="109.2" width="468.24" height="151.2" style="fill: #d9d9d9"/>
        </g>
        <g id="stripes">
          <rect x="109.2" y="20.93" width="468.24" height="0.4" style="fill: #b3b0b0"/>
          <rect x="109.2" y="129.48" width="468.24" height="0.4" style="fill: #b3b0b0"/>
        </g>
        <g>
          <rect x="109.2" y="19.2" width="468.24" height="0.4" style="fill: red"/>
          <rect x="109.2" y="148.8" width="468.24" height="0.4" style="fill: red"/>
          <rect x="109.2" y="2.4" width="468.24" height="0.4" style="fill: blue"/>
          <rect x="109.2" y="132" width="468.24" height="0.4" style="fill: blue"/>
        </g>
        <rect x="109.2" y="71.2" width="468.24" height="7.2" style="fill: #ccc9c9"/>
        <g id="sockets">
          <g id="pin1A">
            <path d="M135.75,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,219a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1B">
            <path d="M135.75,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1C">
            <path d="M135.75,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1D">
            <path d="M135.75,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1E">
            <path d="M135.75,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1F">
            <path d="M135.75,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1G">
            <path d="M135.75,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1H">
            <path d="M135.75,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1I">
            <path d="M135.75,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,147a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin1J">
            <path d="M135.75,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M140.53,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="120.12" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2A">
            <path d="M142.93,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2B">
            <path d="M142.93,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2C">
            <path d="M142.93,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2D">
            <path d="M142.93,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2E">
            <path d="M142.93,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2F">
            <path d="M142.93,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,168.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2G">
            <path d="M142.93,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,161.39a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2H">
            <path d="M142.93,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2I">
            <path d="M142.93,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin2J">
            <path d="M142.93,139.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M147.73,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="127.32" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3A">
            <path d="M150.15,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3B">
            <path d="M150.15,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3C">
            <path d="M150.15,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3D">
            <path d="M150.15,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3E">
            <path d="M150.15,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3F">
            <path d="M150.15,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3G">
            <path d="M150.15,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3H">
            <path d="M150.15,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3I">
            <path d="M150.15,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3J">
            <path d="M150.15,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.52" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4A">
            <path d="M157.35,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4B">
            <path d="M157.35,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4C">
            <path d="M157.35,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4D">
            <path d="M157.35,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4E">
            <path d="M157.35,190.2a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,190.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4F">
            <path d="M157.35,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4G">
            <path d="M157.35,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4H">
            <path d="M157.35,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,154.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4I">
            <path d="M157.35,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4J">
            <path d="M157.35,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.13,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.72" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5A">
            <path d="M164.55,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5B">
            <path d="M164.55,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5C">
            <path d="M164.55,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5D">
            <path d="M164.55,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5E">
            <path d="M164.55,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5F">
            <path d="M164.55,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5G">
            <path d="M164.55,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5H">
            <path d="M164.55,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5I">
            <path d="M164.55,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5J">
            <path d="M164.55,139.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.92" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6A">
            <path d="M171.75,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6B">
            <path d="M171.75,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6C">
            <path d="M171.75,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6D">
            <path d="M171.75,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6E">
            <path d="M171.75,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6F">
            <path d="M171.75,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6G">
            <path d="M171.75,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6H">
            <path d="M171.75,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6I">
            <path d="M171.75,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6J">
            <path d="M171.75,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.12" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7A">
            <path d="M178.93,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7B">
            <path d="M178.93,211.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7C">
            <path d="M178.93,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7D">
            <path d="M178.93,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7E">
            <path d="M178.93,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7F">
            <path d="M178.93,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7G">
            <path d="M178.93,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7H">
            <path d="M178.93,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7I">
            <path d="M178.93,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7J">
            <path d="M178.93,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.32" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8A">
            <path d="M186.15,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8B">
            <path d="M186.15,211.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8C">
            <path d="M186.15,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8D">
            <path d="M186.15,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8E">
            <path d="M186.15,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8F">
            <path d="M186.15,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8G">
            <path d="M186.15,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8H">
            <path d="M186.15,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8I">
            <path d="M186.15,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin8J">
            <path d="M186.15,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M190.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="170.52" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9A">
            <path d="M193.35,219a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9B">
            <path d="M193.35,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9C">
            <path d="M193.35,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9D">
            <path d="M193.35,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9E">
            <path d="M193.35,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9F">
            <path d="M193.35,168.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9G">
            <path d="M193.35,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9H">
            <path d="M193.35,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9I">
            <path d="M193.35,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9J">
            <path d="M193.35,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.72" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10A">
            <path d="M200.55,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10B">
            <path d="M200.55,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10C">
            <path d="M200.55,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10D">
            <path d="M200.55,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10E">
            <path d="M200.55,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10F">
            <path d="M200.55,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10G">
            <path d="M200.55,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10H">
            <path d="M200.55,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10I">
            <path d="M200.55,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10J">
            <path d="M200.55,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.92" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11A">
            <path d="M207.75,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11B">
            <path d="M207.75,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11C">
            <path d="M207.75,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11D">
            <path d="M207.75,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11E">
            <path d="M207.75,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11F">
            <path d="M207.75,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11G">
            <path d="M207.75,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11H">
            <path d="M207.75,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11I">
            <path d="M207.75,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11J">
            <path d="M207.75,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12A">
            <path d="M214.93,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12B">
            <path d="M214.93,211.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12C">
            <path d="M214.93,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12D">
            <path d="M214.93,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12E">
            <path d="M214.93,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12F">
            <path d="M214.93,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12G">
            <path d="M214.93,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12H">
            <path d="M214.93,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12I">
            <path d="M214.93,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12J">
            <path d="M214.93,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.73,139.8a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.32" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13A">
            <path d="M222.15,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13B">
            <path d="M222.15,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13C">
            <path d="M222.15,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13D">
            <path d="M222.15,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13E">
            <path d="M222.15,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13F">
            <path d="M222.15,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13G">
            <path d="M222.15,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13H">
            <path d="M222.15,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13I">
            <path d="M222.15,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13J">
            <path d="M222.15,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14A">
            <path d="M229.35,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14B">
            <path d="M229.35,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14C">
            <path d="M229.35,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14D">
            <path d="M229.35,197.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14E">
            <path d="M229.35,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,190.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14F">
            <path d="M229.35,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14G">
            <path d="M229.35,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14H">
            <path d="M229.35,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14I">
            <path d="M229.35,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,147a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin14J">
            <path d="M229.35,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M234.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="213.72" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15A">
            <path d="M236.55,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,219a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15B">
            <path d="M236.55,211.8a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,211.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15C">
            <path d="M236.55,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15D">
            <path d="M236.55,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15E">
            <path d="M236.55,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15F">
            <path d="M236.55,168.6a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15G">
            <path d="M236.55,161.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15H">
            <path d="M236.55,154.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15I">
            <path d="M236.55,147a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15J">
            <path d="M236.55,139.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.33,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16A">
            <path d="M243.75,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,219a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16B">
            <path d="M243.75,211.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16C">
            <path d="M243.75,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16D">
            <path d="M243.75,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16E">
            <path d="M243.75,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16F">
            <path d="M243.75,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16G">
            <path d="M243.75,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16H">
            <path d="M243.75,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16I">
            <path d="M243.75,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16J">
            <path d="M243.75,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.53,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17A">
            <path d="M250.93,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17B">
            <path d="M250.93,211.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17C">
            <path d="M250.93,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17D">
            <path d="M250.93,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17E">
            <path d="M250.93,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17F">
            <path d="M250.93,168.6a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17G">
            <path d="M250.93,161.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17H">
            <path d="M250.93,154.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17I">
            <path d="M250.93,147a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17J">
            <path d="M250.93,139.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.73,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18A">
            <path d="M258.15,219a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18B">
            <path d="M258.15,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18C">
            <path d="M258.15,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,204.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18D">
            <path d="M258.15,197.39a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,197.39a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18E">
            <path d="M258.15,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,190.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18F">
            <path d="M258.15,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,168.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18G">
            <path d="M258.15,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,161.39a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18H">
            <path d="M258.15,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,154.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18I">
            <path d="M258.15,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18J">
            <path d="M258.15,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19A">
            <path d="M265.34,219a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,219a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19B">
            <path d="M265.34,211.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,211.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19C">
            <path d="M265.34,204.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19D">
            <path d="M265.34,197.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19E">
            <path d="M265.34,190.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19F">
            <path d="M265.34,168.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19G">
            <path d="M265.34,161.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19H">
            <path d="M265.34,154.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19I">
            <path d="M265.34,147a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,147a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19J">
            <path d="M265.34,139.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.13,139.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.72" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20A">
            <path d="M272.55,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,219a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20B">
            <path d="M272.55,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,211.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20C">
            <path d="M272.55,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20D">
            <path d="M272.55,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20E">
            <path d="M272.55,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20F">
            <path d="M272.55,168.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20G">
            <path d="M272.55,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20H">
            <path d="M272.55,154.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20I">
            <path d="M272.55,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,147a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin20J">
            <path d="M272.55,139.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M277.33,139.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="256.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21A">
            <path d="M279.74,219a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,219a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21B">
            <path d="M279.74,211.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,211.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21C">
            <path d="M279.74,204.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21D">
            <path d="M279.74,197.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21E">
            <path d="M279.74,190.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21F">
            <path d="M279.74,168.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21G">
            <path d="M279.74,161.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21H">
            <path d="M279.74,154.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21I">
            <path d="M279.74,147a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,147a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21J">
            <path d="M279.74,139.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.53,139.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.12" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22A">
            <path d="M286.93,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22B">
            <path d="M286.93,211.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22C">
            <path d="M286.93,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22D">
            <path d="M286.93,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22E">
            <path d="M286.93,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22F">
            <path d="M286.93,168.6a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22G">
            <path d="M286.93,161.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22H">
            <path d="M286.93,154.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22I">
            <path d="M286.93,147a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22J">
            <path d="M286.93,139.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.73,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23A">
            <path d="M294.15,219a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23B">
            <path d="M294.15,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23C">
            <path d="M294.15,204.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,204.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23D">
            <path d="M294.15,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,197.39a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23E">
            <path d="M294.15,190.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,190.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23F">
            <path d="M294.15,168.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,168.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23G">
            <path d="M294.15,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,161.39a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23H">
            <path d="M294.15,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,154.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23I">
            <path d="M294.15,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23J">
            <path d="M294.15,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24A">
            <path d="M301.34,219a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,219a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24B">
            <path d="M301.34,211.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,211.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24C">
            <path d="M301.34,204.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24D">
            <path d="M301.34,197.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24E">
            <path d="M301.34,190.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24F">
            <path d="M301.34,168.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,168.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24G">
            <path d="M301.34,161.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,161.39a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24H">
            <path d="M301.34,154.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,154.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24I">
            <path d="M301.34,147a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,147a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24J">
            <path d="M301.34,139.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.13,139.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.71" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25A">
            <path d="M308.55,219a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25B">
            <path d="M308.55,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,211.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25C">
            <path d="M308.55,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25D">
            <path d="M308.55,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25E">
            <path d="M308.55,190.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25F">
            <path d="M308.55,168.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,168.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25G">
            <path d="M308.55,161.39a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25H">
            <path d="M308.55,154.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25I">
            <path d="M308.55,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,147a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25J">
            <path d="M308.55,139.8a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.33,139.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26A">
            <path d="M315.74,219a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26B">
            <path d="M315.74,211.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,211.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26C">
            <path d="M315.74,204.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26D">
            <path d="M315.74,197.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26E">
            <path d="M315.74,190.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26F">
            <path d="M315.74,168.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,168.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26G">
            <path d="M315.74,161.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26H">
            <path d="M315.74,154.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26I">
            <path d="M315.74,147a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin26J">
            <path d="M315.74,139.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M320.53,139.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="300.12" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27A">
            <path d="M322.93,219a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,219a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27B">
            <path d="M322.93,211.8a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,211.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27C">
            <path d="M322.93,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,204.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27D">
            <path d="M322.93,197.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,197.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27E">
            <path d="M322.93,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,190.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27F">
            <path d="M322.93,168.6a2.39,2.39,0,1,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,168.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27G">
            <path d="M322.93,161.39a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,161.39a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27H">
            <path d="M322.93,154.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,154.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27I">
            <path d="M322.93,147a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,147a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27J">
            <path d="M322.93,139.8a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.73,139.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28A">
            <path d="M330.14,219a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28B">
            <path d="M330.14,211.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,211.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28C">
            <path d="M330.14,204.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,204.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28D">
            <path d="M330.14,197.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,197.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28E">
            <path d="M330.14,190.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28F">
            <path d="M330.14,168.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,168.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28G">
            <path d="M330.14,161.39a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28H">
            <path d="M330.14,154.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,154.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28I">
            <path d="M330.14,147a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28J">
            <path d="M330.14,139.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,139.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29A">
            <path d="M337.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29B">
            <path d="M337.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29C">
            <path d="M337.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29D">
            <path d="M337.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29E">
            <path d="M337.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29F">
            <path d="M337.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29G">
            <path d="M337.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29H">
            <path d="M337.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29I">
            <path d="M337.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29J">
            <path d="M337.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.71" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30A">
            <path d="M344.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30B">
            <path d="M344.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30C">
            <path d="M344.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30D">
            <path d="M344.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30E">
            <path d="M344.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30F">
            <path d="M344.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30G">
            <path d="M344.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30H">
            <path d="M344.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30I">
            <path d="M344.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30J">
            <path d="M344.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31A">
            <path d="M351.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31B">
            <path d="M351.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31C">
            <path d="M351.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31D">
            <path d="M351.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31E">
            <path d="M351.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31F">
            <path d="M351.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31G">
            <path d="M351.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31H">
            <path d="M351.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31I">
            <path d="M351.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31J">
            <path d="M351.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.12" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32A">
            <path d="M358.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32B">
            <path d="M358.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32C">
            <path d="M358.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32D">
            <path d="M358.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32E">
            <path d="M358.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32F">
            <path d="M358.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32G">
            <path d="M358.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32H">
            <path d="M358.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32I">
            <path d="M358.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin32J">
            <path d="M358.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M363.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="343.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33A">
            <path d="M366.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33B">
            <path d="M366.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33C">
            <path d="M366.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33D">
            <path d="M366.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33E">
            <path d="M366.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33F">
            <path d="M366.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33G">
            <path d="M366.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33H">
            <path d="M366.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33I">
            <path d="M366.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33J">
            <path d="M366.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34A">
            <path d="M373.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34B">
            <path d="M373.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34C">
            <path d="M373.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34D">
            <path d="M373.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34E">
            <path d="M373.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34F">
            <path d="M373.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34G">
            <path d="M373.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34H">
            <path d="M373.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34I">
            <path d="M373.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34J">
            <path d="M373.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.71" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35A">
            <path d="M380.55,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35B">
            <path d="M380.55,211.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35C">
            <path d="M380.55,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35D">
            <path d="M380.55,197.39a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35E">
            <path d="M380.55,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35F">
            <path d="M380.55,168.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35G">
            <path d="M380.55,161.39a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35H">
            <path d="M380.55,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35I">
            <path d="M380.55,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35J">
            <path d="M380.55,139.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36A">
            <path d="M387.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36B">
            <path d="M387.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36C">
            <path d="M387.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36D">
            <path d="M387.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36E">
            <path d="M387.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36F">
            <path d="M387.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36G">
            <path d="M387.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36H">
            <path d="M387.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36I">
            <path d="M387.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36J">
            <path d="M387.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37A">
            <path d="M394.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37B">
            <path d="M394.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37C">
            <path d="M394.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37D">
            <path d="M394.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37E">
            <path d="M394.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37F">
            <path d="M394.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37G">
            <path d="M394.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37H">
            <path d="M394.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37I">
            <path d="M394.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37J">
            <path d="M394.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38A">
            <path d="M402.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38B">
            <path d="M402.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38C">
            <path d="M402.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38D">
            <path d="M402.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38E">
            <path d="M402.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38F">
            <path d="M402.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38G">
            <path d="M402.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38H">
            <path d="M402.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38I">
            <path d="M402.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin38J">
            <path d="M402.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M406.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="386.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39A">
            <path d="M409.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39B">
            <path d="M409.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39C">
            <path d="M409.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39D">
            <path d="M409.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39E">
            <path d="M409.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39F">
            <path d="M409.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39G">
            <path d="M409.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39H">
            <path d="M409.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39I">
            <path d="M409.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39J">
            <path d="M409.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.72" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40A">
            <path d="M416.55,219a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40B">
            <path d="M416.55,211.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40C">
            <path d="M416.55,204.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40D">
            <path d="M416.55,197.39a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40E">
            <path d="M416.55,190.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40F">
            <path d="M416.55,168.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40G">
            <path d="M416.55,161.39a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40H">
            <path d="M416.55,154.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40I">
            <path d="M416.55,147a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40J">
            <path d="M416.55,139.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41A">
            <path d="M423.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41B">
            <path d="M423.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41C">
            <path d="M423.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41D">
            <path d="M423.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41E">
            <path d="M423.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41F">
            <path d="M423.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41G">
            <path d="M423.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41H">
            <path d="M423.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41I">
            <path d="M423.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41J">
            <path d="M423.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42A">
            <path d="M430.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42B">
            <path d="M430.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42C">
            <path d="M430.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42D">
            <path d="M430.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42E">
            <path d="M430.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42F">
            <path d="M430.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42G">
            <path d="M430.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42H">
            <path d="M430.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42I">
            <path d="M430.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42J">
            <path d="M430.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43A">
            <path d="M438.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43B">
            <path d="M438.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43C">
            <path d="M438.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43D">
            <path d="M438.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43E">
            <path d="M438.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43F">
            <path d="M438.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43G">
            <path d="M438.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43H">
            <path d="M438.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43I">
            <path d="M438.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43J">
            <path d="M438.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44A">
            <path d="M445.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44B">
            <path d="M445.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44C">
            <path d="M445.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44D">
            <path d="M445.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44E">
            <path d="M445.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44F">
            <path d="M445.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44G">
            <path d="M445.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44H">
            <path d="M445.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44I">
            <path d="M445.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin44J">
            <path d="M445.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M450.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="429.72" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45A">
            <path d="M452.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45B">
            <path d="M452.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45C">
            <path d="M452.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45D">
            <path d="M452.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45E">
            <path d="M452.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45F">
            <path d="M452.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45G">
            <path d="M452.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45H">
            <path d="M452.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45I">
            <path d="M452.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45J">
            <path d="M452.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46A">
            <path d="M459.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46B">
            <path d="M459.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46C">
            <path d="M459.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46D">
            <path d="M459.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46E">
            <path d="M459.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46F">
            <path d="M459.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46G">
            <path d="M459.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46H">
            <path d="M459.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46I">
            <path d="M459.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46J">
            <path d="M459.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47A">
            <path d="M466.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47B">
            <path d="M466.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47C">
            <path d="M466.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47D">
            <path d="M466.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47E">
            <path d="M466.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47F">
            <path d="M466.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47G">
            <path d="M466.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47H">
            <path d="M466.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47I">
            <path d="M466.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47J">
            <path d="M466.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48A">
            <path d="M474.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48B">
            <path d="M474.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48C">
            <path d="M474.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48D">
            <path d="M474.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48E">
            <path d="M474.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48F">
            <path d="M474.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48G">
            <path d="M474.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48H">
            <path d="M474.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48I">
            <path d="M474.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48J">
            <path d="M474.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49A">
            <path d="M481.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49B">
            <path d="M481.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49C">
            <path d="M481.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49D">
            <path d="M481.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49E">
            <path d="M481.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49F">
            <path d="M481.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49G">
            <path d="M481.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49H">
            <path d="M481.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49I">
            <path d="M481.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49J">
            <path d="M481.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.72" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50A">
            <path d="M488.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50B">
            <path d="M488.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50C">
            <path d="M488.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50D">
            <path d="M488.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50E">
            <path d="M488.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50F">
            <path d="M488.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50G">
            <path d="M488.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50H">
            <path d="M488.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50I">
            <path d="M488.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin50J">
            <path d="M488.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M493.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="472.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51A">
            <path d="M495.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51B">
            <path d="M495.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51C">
            <path d="M495.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51D">
            <path d="M495.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51E">
            <path d="M495.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51F">
            <path d="M495.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51G">
            <path d="M495.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51H">
            <path d="M495.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51I">
            <path d="M495.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51J">
            <path d="M495.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52A">
            <path d="M502.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52B">
            <path d="M502.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52C">
            <path d="M502.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52D">
            <path d="M502.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52E">
            <path d="M502.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52F">
            <path d="M502.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52G">
            <path d="M502.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52H">
            <path d="M502.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52I">
            <path d="M502.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52J">
            <path d="M502.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53A">
            <path d="M510.14,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53B">
            <path d="M510.14,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53C">
            <path d="M510.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53D">
            <path d="M510.14,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53E">
            <path d="M510.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53F">
            <path d="M510.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53G">
            <path d="M510.14,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53H">
            <path d="M510.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53I">
            <path d="M510.14,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53J">
            <path d="M510.14,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54A">
            <path d="M517.34,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54B">
            <path d="M517.34,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54C">
            <path d="M517.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54D">
            <path d="M517.34,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54E">
            <path d="M517.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54F">
            <path d="M517.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54G">
            <path d="M517.34,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54H">
            <path d="M517.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54I">
            <path d="M517.34,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54J">
            <path d="M517.34,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.71" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55A">
            <path d="M524.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55B">
            <path d="M524.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55C">
            <path d="M524.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55D">
            <path d="M524.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55E">
            <path d="M524.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55F">
            <path d="M524.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55G">
            <path d="M524.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55H">
            <path d="M524.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55I">
            <path d="M524.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55J">
            <path d="M524.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56A">
            <path d="M531.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56B">
            <path d="M531.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56C">
            <path d="M531.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56D">
            <path d="M531.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56E">
            <path d="M531.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56F">
            <path d="M531.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56G">
            <path d="M531.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56H">
            <path d="M531.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56I">
            <path d="M531.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin56J">
            <path d="M531.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M536.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="516.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57A">
            <path d="M538.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57B">
            <path d="M538.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57C">
            <path d="M538.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57D">
            <path d="M538.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57E">
            <path d="M538.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57F">
            <path d="M538.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57G">
            <path d="M538.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57H">
            <path d="M538.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57I">
            <path d="M538.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57J">
            <path d="M538.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58A">
            <path d="M546.14,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58B">
            <path d="M546.14,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58C">
            <path d="M546.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58D">
            <path d="M546.14,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58E">
            <path d="M546.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58F">
            <path d="M546.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58G">
            <path d="M546.14,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58H">
            <path d="M546.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58I">
            <path d="M546.14,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58J">
            <path d="M546.14,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59A">
            <path d="M553.34,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59B">
            <path d="M553.34,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59C">
            <path d="M553.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59D">
            <path d="M553.34,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59E">
            <path d="M553.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59F">
            <path d="M553.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59G">
            <path d="M553.34,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59H">
            <path d="M553.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59I">
            <path d="M553.34,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59J">
            <path d="M553.34,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.13,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.71" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60A">
            <path d="M560.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60B">
            <path d="M560.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60C">
            <path d="M560.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60D">
            <path d="M560.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60E">
            <path d="M560.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60F">
            <path d="M560.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60G">
            <path d="M560.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60H">
            <path d="M560.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60I">
            <path d="M560.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60J">
            <path d="M560.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.33,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.91" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61A">
            <path d="M567.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61B">
            <path d="M567.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61C">
            <path d="M567.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61D">
            <path d="M567.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61E">
            <path d="M567.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61F">
            <path d="M567.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61G">
            <path d="M567.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61H">
            <path d="M567.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61I">
            <path d="M567.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61J">
            <path d="M567.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.53,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.11" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62A">
            <path d="M574.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62B">
            <path d="M574.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62C">
            <path d="M574.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62D">
            <path d="M574.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62E">
            <path d="M574.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62F">
            <path d="M574.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62G">
            <path d="M574.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62H">
            <path d="M574.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62I">
            <path d="M574.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin62J">
            <path d="M574.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M579.73,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="559.31" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63A">
            <path d="M582.14,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,219a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="115.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63B">
            <path d="M582.14,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,211.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="108" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63C">
            <path d="M582.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,204.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="100.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63D">
            <path d="M582.14,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,197.39a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="93.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63E">
            <path d="M582.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,190.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="86.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63F">
            <path d="M582.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,168.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="64.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63G">
            <path d="M582.14,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,161.39a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="57.6" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63H">
            <path d="M582.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,154.2a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="50.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63I">
            <path d="M582.14,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,147a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="43.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin63J">
            <path d="M582.14,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M586.93,139.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="566.51" cy="36" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3W">
            <path d="M150.16,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3X">
            <path d="M150.16,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3Y">
            <path d="M150.16,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin3Z">
            <path d="M150.16,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M154.93,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="134.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4W">
            <path d="M157.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.15,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4X">
            <path d="M157.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.15,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4Y">
            <path d="M157.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.15,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin4Z">
            <path d="M157.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M162.15,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="141.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5W">
            <path d="M164.56,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.35,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5X">
            <path d="M164.56,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.35,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5Y">
            <path d="M164.56,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.35,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin5Z">
            <path d="M164.56,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M169.35,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="148.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6W">
            <path d="M171.76,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.55,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6X">
            <path d="M171.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.55,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6Y">
            <path d="M171.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin6Z">
            <path d="M171.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M176.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="156.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7W">
            <path d="M178.93,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.75,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7X">
            <path d="M178.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.75,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7Y">
            <path d="M178.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.75,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin7Z">
            <path d="M178.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M183.75,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="163.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9W">
            <path d="M193.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.15,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9X">
            <path d="M193.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.15,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9Y">
            <path d="M193.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.15,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin9Z">
            <path d="M193.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M198.15,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="177.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10W">
            <path d="M200.56,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.35,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10X">
            <path d="M200.56,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.35,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10Y">
            <path d="M200.56,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.35,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin10Z">
            <path d="M200.56,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M205.35,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="184.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11W">
            <path d="M207.76,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.55,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11X">
            <path d="M207.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.55,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11Y">
            <path d="M207.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin11Z">
            <path d="M207.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M212.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="192.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12W">
            <path d="M214.93,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.75,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12X">
            <path d="M214.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.75,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12Y">
            <path d="M214.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.75,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin12Z">
            <path d="M214.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M219.75,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="199.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13W">
            <path d="M222.16,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13X">
            <path d="M222.16,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13Y">
            <path d="M222.16,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin13Z">
            <path d="M222.16,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M226.93,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="206.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15W">
            <path d="M236.56,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.35,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15X">
            <path d="M236.56,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.35,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15Y">
            <path d="M236.56,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.35,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin15Z">
            <path d="M236.56,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M241.35,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="220.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16W">
            <path d="M243.76,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.55,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16X">
            <path d="M243.76,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.55,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16Y">
            <path d="M243.76,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin16Z">
            <path d="M243.76,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M248.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="228.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17W">
            <path d="M250.93,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.75,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17X">
            <path d="M250.93,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.75,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17Y">
            <path d="M250.93,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.75,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin17Z">
            <path d="M250.93,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M255.75,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="235.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18W">
            <path d="M258.16,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18X">
            <path d="M258.16,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18Y">
            <path d="M258.16,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin18Z">
            <path d="M258.16,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M262.93,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="242.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19W">
            <path d="M265.36,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.15,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19X">
            <path d="M265.36,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.15,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19Y">
            <path d="M265.36,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.15,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin19Z">
            <path d="M265.36,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M270.15,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="249.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21W">
            <path d="M279.76,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.55,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21X">
            <path d="M279.76,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.55,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21Y">
            <path d="M279.76,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin21Z">
            <path d="M279.76,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M284.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="264.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22W">
            <path d="M286.93,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.75,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22X">
            <path d="M286.93,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.75,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22Y">
            <path d="M286.93,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.75,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin22Z">
            <path d="M286.93,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M291.75,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="271.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23W">
            <path d="M294.16,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23X">
            <path d="M294.16,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23Y">
            <path d="M294.16,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin23Z">
            <path d="M294.16,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M298.93,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="278.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24W">
            <path d="M301.36,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.15,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24X">
            <path d="M301.36,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.15,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24Y">
            <path d="M301.36,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.15,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin24Z">
            <path d="M301.36,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M306.15,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="285.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25W">
            <path d="M308.56,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.35,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25X">
            <path d="M308.56,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.35,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25Y">
            <path d="M308.56,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.35,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin25Z">
            <path d="M308.56,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M313.35,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="292.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27W">
            <path d="M322.93,247.8a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.75,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27X">
            <path d="M322.93,240.6a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.75,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27Y">
            <path d="M322.93,118.2a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.75,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin27Z">
            <path d="M322.93,111a2.4,2.4,0,0,1,4.79,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M327.75,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="307.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28W">
            <path d="M330.16,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,247.8a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28X">
            <path d="M330.16,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,240.6a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28Y">
            <path d="M330.16,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin28Z">
            <path d="M330.16,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M334.93,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="314.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29W">
            <path d="M337.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.15,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29X">
            <path d="M337.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.15,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29Y">
            <path d="M337.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.15,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin29Z">
            <path d="M337.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M342.15,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="321.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30W">
            <path d="M344.56,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.34,247.8a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30X">
            <path d="M344.56,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.34,240.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30Y">
            <path d="M344.56,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.34,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin30Z">
            <path d="M344.56,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M349.34,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="328.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31W">
            <path d="M351.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.55,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31X">
            <path d="M351.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.55,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31Y">
            <path d="M351.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin31Z">
            <path d="M351.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M356.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="336.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33W">
            <path d="M366.16,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33X">
            <path d="M366.16,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33Y">
            <path d="M366.16,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin33Z">
            <path d="M366.16,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M370.93,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="350.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34W">
            <path d="M373.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.14,247.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34X">
            <path d="M373.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.14,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34Y">
            <path d="M373.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.14,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin34Z">
            <path d="M373.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M378.14,111a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="357.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35W">
            <path d="M380.56,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.34,247.8a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="382.97" cy="247.81" r="1.2" transform="translate(58.98 482.33) rotate(-80.78)" style="fill: #383838"/>
          </g>
          <g id="pin35X">
            <path d="M380.56,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.34,240.6a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="382.96" cy="240.62" r="1.2" transform="translate(66.07 476.28) rotate(-80.78)" style="fill: #383838"/>
          </g>
          <g id="pin35Y">
            <path d="M380.56,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.34,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin35Z">
            <path d="M380.56,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M385.34,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="364.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36W">
            <path d="M387.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.55,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36X">
            <path d="M387.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.55,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36Y">
            <path d="M387.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin36Z">
            <path d="M387.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M392.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="372.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37W">
            <path d="M394.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.74,247.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37X">
            <path d="M394.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.74,240.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37Y">
            <path d="M394.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.74,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin37Z">
            <path d="M394.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M399.74,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="379.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39W">
            <path d="M409.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.14,247.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39X">
            <path d="M409.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.14,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39Y">
            <path d="M409.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.14,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin39Z">
            <path d="M409.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M414.14,111a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="393.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40W">
            <path d="M416.56,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.34,247.8a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40X">
            <path d="M416.56,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.34,240.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40Y">
            <path d="M416.56,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.34,118.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin40Z">
            <path d="M416.56,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M421.34,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="400.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41W">
            <path d="M423.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.55,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41X">
            <path d="M423.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.55,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41Y">
            <path d="M423.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin41Z">
            <path d="M423.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M428.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="408.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42W">
            <path d="M430.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.74,247.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42X">
            <path d="M430.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.74,240.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42Y">
            <path d="M430.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.74,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin42Z">
            <path d="M430.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M435.74,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="415.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43W">
            <path d="M438.16,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43X">
            <path d="M438.16,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43Y">
            <path d="M438.16,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin43Z">
            <path d="M438.16,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M442.93,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="422.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45W">
            <path d="M452.56,247.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.34,247.8a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45X">
            <path d="M452.56,240.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.34,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45Y">
            <path d="M452.56,118.2a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.34,118.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin45Z">
            <path d="M452.56,111a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M457.34,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="436.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46W">
            <path d="M459.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.55,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46X">
            <path d="M459.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.55,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46Y">
            <path d="M459.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin46Z">
            <path d="M459.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M464.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="444.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47W">
            <path d="M466.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.74,247.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47X">
            <path d="M466.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.74,240.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47Y">
            <path d="M466.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.74,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin47Z">
            <path d="M466.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M471.74,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="451.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48W">
            <path d="M474.16,247.8a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,247.8a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48X">
            <path d="M474.16,240.6a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,240.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48Y">
            <path d="M474.16,118.2a2.39,2.39,0,1,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin48Z">
            <path d="M474.16,111a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M478.93,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="458.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49W">
            <path d="M481.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.14,247.8a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49X">
            <path d="M481.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.14,240.6a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49Y">
            <path d="M481.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.14,118.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin49Z">
            <path d="M481.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M486.14,111a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="465.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51W">
            <path d="M495.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.55,247.8a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51X">
            <path d="M495.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.55,240.6a2.4,2.4,0,0,1-4.79,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51Y">
            <path d="M495.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.55,118.2a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin51Z">
            <path d="M495.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M500.55,111a2.4,2.4,0,0,1-4.79,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="480.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52W">
            <path d="M502.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.74,247.8a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52X">
            <path d="M502.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.74,240.6a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52Y">
            <path d="M502.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.74,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin52Z">
            <path d="M502.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M507.74,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="487.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53W">
            <path d="M510.16,247.8a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,247.8a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53X">
            <path d="M510.16,240.6a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53Y">
            <path d="M510.16,118.2a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin53Z">
            <path d="M510.16,111a2.39,2.39,0,0,1,4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M514.93,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="494.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54W">
            <path d="M517.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.14,247.8a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54X">
            <path d="M517.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.14,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54Y">
            <path d="M517.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.14,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin54Z">
            <path d="M517.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M522.14,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="501.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55W">
            <path d="M524.56,247.8a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.34,247.8a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55X">
            <path d="M524.56,240.6a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.34,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55Y">
            <path d="M524.56,118.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.34,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin55Z">
            <path d="M524.56,111a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M529.34,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="508.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57W">
            <path d="M538.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.74,247.8a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.33" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57X">
            <path d="M538.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.74,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.33" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57Y">
            <path d="M538.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.74,118.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.33" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin57Z">
            <path d="M538.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M543.74,111a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="523.33" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58W">
            <path d="M546.16,247.8a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,247.8a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.53" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58X">
            <path d="M546.16,240.6a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.53" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58Y">
            <path d="M546.16,118.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.53" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin58Z">
            <path d="M546.16,111a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M550.93,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="530.53" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59W">
            <path d="M553.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.14,247.8a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.73" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59X">
            <path d="M553.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.14,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.73" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59Y">
            <path d="M553.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.14,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.73" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin59Z">
            <path d="M553.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M558.14,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="537.73" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60W">
            <path d="M560.56,247.8a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.34,247.8a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.93" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60X">
            <path d="M560.56,240.6a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.34,240.6a2.39,2.39,0,1,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.93" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60Y">
            <path d="M560.56,118.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.34,118.2a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.93" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin60Z">
            <path d="M560.56,111a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M565.34,111a2.39,2.39,0,1,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="544.93" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61W">
            <path d="M567.76,247.8a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.54,247.8a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.13" cy="144" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61X">
            <path d="M567.76,240.6a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.54,240.6a2.39,2.39,0,0,1-4.78,0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.13" cy="136.8" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61Y">
            <path d="M567.76,118.2a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.54,118.2a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.13" cy="14.4" r="1.2" style="fill: #383838"/>
          </g>
          <g id="pin61Z">
            <path d="M567.76,111a2.39,2.39,0,0,1,4.78,0" transform="translate(-18.02 -103.8)" style="fill: #bfbfbf"/>
            <path d="M572.54,111a2.39,2.39,0,0,1-4.78,0h0" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
            <circle cx="552.13" cy="7.2" r="1.2" style="fill: #383838"/>
          </g>
        </g>
        <g id="text">
          <text transform="translate(122 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">1</text>
          <text transform="translate(122 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">1</text>
          <text transform="translate(150.8 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">5</text>
          <text transform="translate(150.8 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">5</text>
          <text transform="translate(186.8 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">10</text>
          <text transform="translate(186.8 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">10</text>
          <text transform="translate(222.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">15</text>
          <text transform="translate(222.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">15</text>
          <text transform="translate(258.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">20</text>
          <text transform="translate(258.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">20</text>
          <text transform="translate(294.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">25</text>
          <text transform="translate(294.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">25</text>
          <text transform="translate(330.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">30</text>
          <text transform="translate(330.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">30</text>
          <text transform="translate(366.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">35</text>
          <text transform="translate(366.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">35</text>
          <text transform="translate(402.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">40</text>
          <text transform="translate(402.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">40</text>
          <text transform="translate(438.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">45</text>
          <text transform="translate(438.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">45</text>
          <text transform="translate(474.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">50</text>
          <text transform="translate(474.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">50</text>
          <text transform="translate(510.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">55</text>
          <text transform="translate(510.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">55</text>
          <text transform="translate(546.79 30.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">60</text>
          <text transform="translate(546.79 126.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">60</text>
          <text transform="translate(114.8 116.8) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica;letter-spacing: -0.1047681747264069em">A</text>
          <text transform="translate(574.79 116.8) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica;letter-spacing: -0.1047681747264069em">A</text>
          <text transform="translate(114.8 109.6) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">B</text>
          <text transform="translate(574.79 109.6) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">B</text>
          <text transform="translate(114.8 102.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">C</text>
          <text transform="translate(574.79 102.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;fill: #020202;font-family: Helvetica">C</text>
          <text transform="translate(114.8 95.2) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">D</text>
          <text transform="translate(574.79 95.2) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">D</text>
          <text transform="translate(114.8 88) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">E</text>
          <text transform="translate(574.79 88) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">E</text>
          <text transform="translate(114.8 66.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">F</text>
          <text transform="translate(574.79 66.4) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">F</text>
          <text transform="translate(114.8 59.2) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">G</text>
          <text transform="translate(574.79 59.2) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">G</text>
          <text transform="translate(114.8 52) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">H</text>
          <text transform="translate(574.79 52) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">H</text>
          <text transform="translate(114.8 44) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">I</text>
          <text transform="translate(574.79 44) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">I</text>
          <text transform="translate(114.8 36.8) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">J</text>
          <text transform="translate(574.79 36.8) rotate(-90)" style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica">J</text>
        </g>
      </g>
    </g>
    <g id="arduino">
      <g>
        <g id="icon">
          <path id="_0.1.0.0" data-name=" 0.1.0.0" d="M436.22,282.39l4.32,4.32v32.4l7.2,7.2v92.88l-7.2,7.2v4.36a2.85,2.85,0,0,1-2.84,2.83H256.17a2.83,2.83,0,0,1-2.83-2.83h0V285.23a2.83,2.83,0,0,1,2.83-2.83H436.22M436,332.8a4.54,4.54,0,0,0,9.07.43,3.08,3.08,0,0,0,0-.43h0a4.54,4.54,0,1,0-9.07-.43A3.08,3.08,0,0,0,436,332.8Zm0,79.2a4.54,4.54,0,0,0,9.07.43,3.08,3.08,0,0,0,0-.43h0a4.54,4.54,0,1,0-9.07-.43A3.08,3.08,0,0,0,436,412ZM292,289.6a4.54,4.54,0,1,0,9.07.43,3.08,3.08,0,0,0,0-.43h0a4.54,4.54,0,1,0-9.07-.43,3.08,3.08,0,0,0,0,.43Zm-3.6,136.79a4.54,4.54,0,0,0,9.07,0h0a4.54,4.54,0,0,0-9.07-.43A3.08,3.08,0,0,0,288.4,426.39Zm107.73,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41-.22A.81.81,0,0,0,424.93,426.39Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm.22-79.2a1.35,1.35,0,0,0,2.7,0h0a1.35,1.35,0,1,0-2.7,0Zm7.2,0a1.35,1.35,0,0,0,2.69.23.89.89,0,0,0,0-.23h0a1.35,1.35,0,0,0-2.69-.23A.89.89,0,0,0,439.55,347.19Zm-7.2,7.2a1.35,1.35,0,0,0,2.7,0h0a1.35,1.35,0,0,0-2.7,0Zm7.2,0a1.35,1.35,0,1,0,2.69.23.89.89,0,0,0,0-.23h0a1.35,1.35,0,0,0-2.69,0Zm-7.2,7.2a1.35,1.35,0,0,0,2.7,0h0a1.35,1.35,0,0,0-2.7,0Zm7.2,0a1.35,1.35,0,1,0,2.69.23.89.89,0,0,0,0-.23h0a1.35,1.35,0,0,0-2.69,0ZM311,299a1.35,1.35,0,0,0,2.69.23.89.89,0,0,0,0-.23h0a1.35,1.35,0,0,0-2.69,0Zm0,7.2a1.35,1.35,0,0,0,2.69,0h0a1.35,1.35,0,0,0-2.69,0Zm-7.2-7.2a1.35,1.35,0,0,0,2.69.23.89.89,0,0,0,0-.23h0a1.35,1.35,0,0,0-2.69,0Zm0,7.2a1.35,1.35,0,0,0,2.69,0h0a1.35,1.35,0,0,0-2.69,0Zm-7.2-7.2a1.35,1.35,0,1,0,1.35-1.35,1.34,1.34,0,0,0-1.35,1.35v0Zm0,7.2a1.35,1.35,0,1,0,1.35-1.35,1.34,1.34,0,0,0-1.35,1.35v0Zm73.58-16.56a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41-.22A.81.81,0,0,0,355.81,289.6Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.22,1.22,0,0,0-1.2-1.21,1.19,1.19,0,0,0-1.21,1.17v0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41-.22A.81.81,0,0,0,319.81,289.6Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm126.72,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41-.22A.81.81,0,0,0,424.93,289.6Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41-.22A.81.81,0,0,0,388.93,289.6Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-43.2,136.79a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm-7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm14.4,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41-.22A.81.81,0,0,0,352.93,426.39Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Zm7.2,0a1.21,1.21,0,0,0,2.41,0h0a1.21,1.21,0,0,0-2.41,0Z" transform="translate(-18.02 -103.8)" style="fill: #0f7391"/>
          <g id="_0.1.0.1" data-name=" 0.1.0.1">
            <circle id="_0.1.0.1.1" data-name=" 0.1.0.1.1" cx="297.95" cy="191.56" r="0.72" style="fill: none;stroke: #fff;stroke-width: 0.72000002861023px"/>
            <g id="_0.1.0.1.7" data-name=" 0.1.0.1.7">
              <g id="_0.1.0.1.7.0" data-name=" 0.1.0.1.7.0">
                <g id="_0.1.0.1.7.0.0" data-name=" 0.1.0.1.7.0.0">
                  <g id="_0.1.0.1.7.0.0.0" data-name=" 0.1.0.1.7.0.0.0">
                    <g id="_0.1.0.1.7.0.0.0.0" data-name=" 0.1.0.1.7.0.0.0.0">
                      <g id="_0.1.0.1.7.0.0.0.0.0" data-name=" 0.1.0.1.7.0.0.0.0.0">
                        <g id="_0.1.0.1.7.0.0.0.0.0.0" data-name=" 0.1.0.1.7.0.0.0.0.0.0">
                          <text id="_0.1.0.1.7.0.0.0.0.0.0.0" data-name=" 0.1.0.1.7.0.0.0.0.0.0.0" transform="translate(318.97 195.99) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">13</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.8" data-name=" 0.1.0.1.8">
              <g id="_0.1.0.1.8.0" data-name=" 0.1.0.1.8.0">
                <g id="_0.1.0.1.8.0.0" data-name=" 0.1.0.1.8.0.0">
                  <g id="_0.1.0.1.8.0.0.0" data-name=" 0.1.0.1.8.0.0.0">
                    <g id="_0.1.0.1.8.0.0.0.0" data-name=" 0.1.0.1.8.0.0.0.0">
                      <g id="_0.1.0.1.8.0.0.0.0.0" data-name=" 0.1.0.1.8.0.0.0.0.0">
                        <g id="_0.1.0.1.8.0.0.0.0.0.0" data-name=" 0.1.0.1.8.0.0.0.0.0.0">
                          <text id="_0.1.0.1.8.0.0.0.0.0.0.0" data-name=" 0.1.0.1.8.0.0.0.0.0.0.0" transform="translate(326.17 195.99) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">12</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.9" data-name=" 0.1.0.1.9">
              <g id="_0.1.0.1.9.0" data-name=" 0.1.0.1.9.0">
                <g id="_0.1.0.1.9.0.0" data-name=" 0.1.0.1.9.0.0">
                  <g id="_0.1.0.1.9.0.0.0" data-name=" 0.1.0.1.9.0.0.0">
                    <g id="_0.1.0.1.9.0.0.0.0" data-name=" 0.1.0.1.9.0.0.0.0">
                      <g id="_0.1.0.1.9.0.0.0.0.0" data-name=" 0.1.0.1.9.0.0.0.0.0">
                        <g id="_0.1.0.1.9.0.0.0.0.0.0" data-name=" 0.1.0.1.9.0.0.0.0.0.0">
                          <g id="_0.1.0.1.9.0.0.0.0.0.0.0" data-name=" 0.1.0.1.9.0.0.0.0.0.0.0" style="isolation: isolate">
                            <text transform="translate(333.37 195.99) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.069921875em">1</text>
                            <text transform="translate(333.37 194.18) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">1</text>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.10" data-name=" 0.1.0.1.10">
              <g id="_0.1.0.1.10.0" data-name=" 0.1.0.1.10.0">
                <g id="_0.1.0.1.10.0.0" data-name=" 0.1.0.1.10.0.0">
                  <g id="_0.1.0.1.10.0.0.0" data-name=" 0.1.0.1.10.0.0.0">
                    <g id="_0.1.0.1.10.0.0.0.0" data-name=" 0.1.0.1.10.0.0.0.0">
                      <g id="_0.1.0.1.10.0.0.0.0.0" data-name=" 0.1.0.1.10.0.0.0.0.0">
                        <g id="_0.1.0.1.10.0.0.0.0.0.0" data-name=" 0.1.0.1.10.0.0.0.0.0.0">
                          <text id="_0.1.0.1.10.0.0.0.0.0.0.0" data-name=" 0.1.0.1.10.0.0.0.0.0.0.0" transform="translate(340.57 195.99) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">10</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.11" data-name=" 0.1.0.1.11">
              <g id="_0.1.0.1.11.0" data-name=" 0.1.0.1.11.0">
                <g id="_0.1.0.1.11.0.0" data-name=" 0.1.0.1.11.0.0">
                  <g id="_0.1.0.1.11.0.0.0" data-name=" 0.1.0.1.11.0.0.0">
                    <g id="_0.1.0.1.11.0.0.0.0" data-name=" 0.1.0.1.11.0.0.0.0">
                      <g id="_0.1.0.1.11.0.0.0.0.0" data-name=" 0.1.0.1.11.0.0.0.0.0">
                        <g id="_0.1.0.1.11.0.0.0.0.0.0" data-name=" 0.1.0.1.11.0.0.0.0.0.0">
                          <text id="_0.1.0.1.11.0.0.0.0.0.0.0" data-name=" 0.1.0.1.11.0.0.0.0.0.0.0" transform="translate(347.77 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">9</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.12" data-name=" 0.1.0.1.12">
              <g id="_0.1.0.1.12.0" data-name=" 0.1.0.1.12.0">
                <g id="_0.1.0.1.12.0.0" data-name=" 0.1.0.1.12.0.0">
                  <g id="_0.1.0.1.12.0.0.0" data-name=" 0.1.0.1.12.0.0.0">
                    <g id="_0.1.0.1.12.0.0.0.0" data-name=" 0.1.0.1.12.0.0.0.0">
                      <g id="_0.1.0.1.12.0.0.0.0.0" data-name=" 0.1.0.1.12.0.0.0.0.0">
                        <g id="_0.1.0.1.12.0.0.0.0.0.0" data-name=" 0.1.0.1.12.0.0.0.0.0.0">
                          <text id="_0.1.0.1.12.0.0.0.0.0.0.0" data-name=" 0.1.0.1.12.0.0.0.0.0.0.0" transform="translate(354.97 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">8</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.13" data-name=" 0.1.0.1.13">
              <g id="_0.1.0.1.13.0" data-name=" 0.1.0.1.13.0">
                <g id="_0.1.0.1.13.0.0" data-name=" 0.1.0.1.13.0.0">
                  <g id="_0.1.0.1.13.0.0.0" data-name=" 0.1.0.1.13.0.0.0">
                    <g id="_0.1.0.1.13.0.0.0.0" data-name=" 0.1.0.1.13.0.0.0.0">
                      <g id="_0.1.0.1.13.0.0.0.0.0" data-name=" 0.1.0.1.13.0.0.0.0.0">
                        <g id="_0.1.0.1.13.0.0.0.0.0.0" data-name=" 0.1.0.1.13.0.0.0.0.0.0">
                          <text id="_0.1.0.1.13.0.0.0.0.0.0.0" data-name=" 0.1.0.1.13.0.0.0.0.0.0.0" transform="translate(366.49 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">7</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.14" data-name=" 0.1.0.1.14">
              <g id="_0.1.0.1.14.0" data-name=" 0.1.0.1.14.0">
                <g id="_0.1.0.1.14.0.0" data-name=" 0.1.0.1.14.0.0">
                  <g id="_0.1.0.1.14.0.0.0" data-name=" 0.1.0.1.14.0.0.0">
                    <g id="_0.1.0.1.14.0.0.0.0" data-name=" 0.1.0.1.14.0.0.0.0">
                      <g id="_0.1.0.1.14.0.0.0.0.0" data-name=" 0.1.0.1.14.0.0.0.0.0">
                        <g id="_0.1.0.1.14.0.0.0.0.0.0" data-name=" 0.1.0.1.14.0.0.0.0.0.0">
                          <text id="_0.1.0.1.14.0.0.0.0.0.0.0" data-name=" 0.1.0.1.14.0.0.0.0.0.0.0" transform="translate(373.69 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">6</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.15" data-name=" 0.1.0.1.15">
              <g id="_0.1.0.1.15.0" data-name=" 0.1.0.1.15.0">
                <g id="_0.1.0.1.15.0.0" data-name=" 0.1.0.1.15.0.0">
                  <g id="_0.1.0.1.15.0.0.0" data-name=" 0.1.0.1.15.0.0.0">
                    <g id="_0.1.0.1.15.0.0.0.0" data-name=" 0.1.0.1.15.0.0.0.0">
                      <g id="_0.1.0.1.15.0.0.0.0.0" data-name=" 0.1.0.1.15.0.0.0.0.0">
                        <g id="_0.1.0.1.15.0.0.0.0.0.0" data-name=" 0.1.0.1.15.0.0.0.0.0.0">
                          <text id="_0.1.0.1.15.0.0.0.0.0.0.0" data-name=" 0.1.0.1.15.0.0.0.0.0.0.0" transform="translate(380.89 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">5</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.16" data-name=" 0.1.0.1.16">
              <g id="_0.1.0.1.16.0" data-name=" 0.1.0.1.16.0">
                <g id="_0.1.0.1.16.0.0" data-name=" 0.1.0.1.16.0.0">
                  <g id="_0.1.0.1.16.0.0.0" data-name=" 0.1.0.1.16.0.0.0">
                    <g id="_0.1.0.1.16.0.0.0.0" data-name=" 0.1.0.1.16.0.0.0.0">
                      <g id="_0.1.0.1.16.0.0.0.0.0" data-name=" 0.1.0.1.16.0.0.0.0.0">
                        <g id="_0.1.0.1.16.0.0.0.0.0.0" data-name=" 0.1.0.1.16.0.0.0.0.0.0">
                          <text id="_0.1.0.1.16.0.0.0.0.0.0.0" data-name=" 0.1.0.1.16.0.0.0.0.0.0.0" transform="translate(388.09 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">4</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.17" data-name=" 0.1.0.1.17">
              <g id="_0.1.0.1.17.0" data-name=" 0.1.0.1.17.0">
                <g id="_0.1.0.1.17.0.0" data-name=" 0.1.0.1.17.0.0">
                  <g id="_0.1.0.1.17.0.0.0" data-name=" 0.1.0.1.17.0.0.0">
                    <g id="_0.1.0.1.17.0.0.0.0" data-name=" 0.1.0.1.17.0.0.0.0">
                      <g id="_0.1.0.1.17.0.0.0.0.0" data-name=" 0.1.0.1.17.0.0.0.0.0">
                        <g id="_0.1.0.1.17.0.0.0.0.0.0" data-name=" 0.1.0.1.17.0.0.0.0.0.0">
                          <text id="_0.1.0.1.17.0.0.0.0.0.0.0" data-name=" 0.1.0.1.17.0.0.0.0.0.0.0" transform="translate(395.29 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">3</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.18" data-name=" 0.1.0.1.18">
              <g id="_0.1.0.1.18.0" data-name=" 0.1.0.1.18.0">
                <g id="_0.1.0.1.18.0.0" data-name=" 0.1.0.1.18.0.0">
                  <g id="_0.1.0.1.18.0.0.0" data-name=" 0.1.0.1.18.0.0.0">
                    <g id="_0.1.0.1.18.0.0.0.0" data-name=" 0.1.0.1.18.0.0.0.0">
                      <g id="_0.1.0.1.18.0.0.0.0.0" data-name=" 0.1.0.1.18.0.0.0.0.0">
                        <g id="_0.1.0.1.18.0.0.0.0.0.0" data-name=" 0.1.0.1.18.0.0.0.0.0.0">
                          <text id="_0.1.0.1.18.0.0.0.0.0.0.0" data-name=" 0.1.0.1.18.0.0.0.0.0.0.0" transform="translate(402.49 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">2</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.1.40" data-name=" 0.1.0.1.40">
              <g id="_0.1.0.1.40.1" data-name=" 0.1.0.1.40.1">
                <g id="_0.1.0.1.40.1.1" data-name=" 0.1.0.1.40.1.1">
                  <text id="_0.1.0.1.40.1.1.0" data-name=" 0.1.0.1.40.1.1.0" transform="translate(305.69 214.8)" style="isolation: isolate;font-size: 4.679999828338623px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.07710253354391604em">L</text>
                </g>
              </g>
            </g>
          </g>
          <g id="_0.1.0.2" data-name=" 0.1.0.2">
            <g id="_0.1.0.2.1" data-name=" 0.1.0.2.1">
              <g id="_0.1.0.2.1.0" data-name=" 0.1.0.2.1.0">
                <g id="_0.1.0.2.1.0.0" data-name=" 0.1.0.2.1.0.0">
                  <text id="_0.1.0.2.1.0.0.0" data-name=" 0.1.0.2.1.0.0.0" transform="translate(344.7 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">5V</text>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.2" data-name=" 0.1.0.2.2">
              <g id="_0.1.0.2.2.1" data-name=" 0.1.0.2.2.1">
                <text id="_0.1.0.2.2.1.0" data-name=" 0.1.0.2.2.1.0" transform="translate(380.56 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">A0</text>
              </g>
            </g>
            <g id="_0.1.0.2.3" data-name=" 0.1.0.2.3">
              <g id="_0.1.0.2.3.0" data-name=" 0.1.0.2.3.0">
                <g id="_0.1.0.2.3.0.0" data-name=" 0.1.0.2.3.0.0">
                  <text id="_0.1.0.2.3.0.0.0" data-name=" 0.1.0.2.3.0.0.0" transform="translate(393.01 309.41)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial">ANALOG IN</text>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.4" data-name=" 0.1.0.2.4">
              <g id="_0.1.0.2.4.0" data-name=" 0.1.0.2.4.0">
                <g id="_0.1.0.2.4.0.0" data-name=" 0.1.0.2.4.0.0">
                  <g id="_0.1.0.2.4.0.0.0" data-name=" 0.1.0.2.4.0.0.0">
                    <g id="_0.1.0.2.4.0.0.0.0" data-name=" 0.1.0.2.4.0.0.0.0">
                      <g id="_0.1.0.2.4.0.0.0.0.0" data-name=" 0.1.0.2.4.0.0.0.0.0">
                        <g id="_0.1.0.2.4.0.0.0.0.0.0" data-name=" 0.1.0.2.4.0.0.0.0.0.0">
                          <text id="_0.1.0.2.4.0.0.0.0.0.0.0" data-name=" 0.1.0.2.4.0.0.0.0.0.0.0" transform="translate(304.3 201.45) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">AREF</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.5" data-name=" 0.1.0.2.5">
              <g id="_0.1.0.2.5.1" data-name=" 0.1.0.2.5.1">
                <text id="_0.1.0.2.5.1.0" data-name=" 0.1.0.2.5.1.0" transform="translate(408.47 243.2)" style="isolation: isolate;font-size: 4.179999828338623px;fill: #fff;font-family: ArialMT, Arial">1</text>
              </g>
            </g>
            <g id="_0.1.0.2.6" data-name=" 0.1.0.2.6">
              <g id="_0.1.0.2.6.0" data-name=" 0.1.0.2.6.0">
                <g id="_0.1.0.2.6.0.0" data-name=" 0.1.0.2.6.0.0">
                  <g id="_0.1.0.2.6.0.0.0" data-name=" 0.1.0.2.6.0.0.0">
                    <g id="_0.1.0.2.6.0.0.0.0" data-name=" 0.1.0.2.6.0.0.0.0">
                      <g id="_0.1.0.2.6.0.0.0.0.0" data-name=" 0.1.0.2.6.0.0.0.0.0">
                        <g id="_0.1.0.2.6.0.0.0.0.0.0" data-name=" 0.1.0.2.6.0.0.0.0.0.0">
                          <text id="_0.1.0.2.6.0.0.0.0.0.0.0" data-name=" 0.1.0.2.6.0.0.0.0.0.0.0" transform="translate(311.82 198.76) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">GND</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.10" data-name=" 0.1.0.2.10">
              <g id="_0.1.0.2.10.1" data-name=" 0.1.0.2.10.1">
                <text id="_0.1.0.2.10.1.0" data-name=" 0.1.0.2.10.1.0" transform="translate(301.91 227.92)" style="isolation: isolate;font-size: 4.679999828338623px;fill: #fff;font-family: ArialMT, Arial">TX</text>
              </g>
            </g>
            <g id="_0.1.0.2.11" data-name=" 0.1.0.2.11">
              <g id="_0.1.0.2.11.1" data-name=" 0.1.0.2.11.1">
                <text id="_0.1.0.2.11.1.0" data-name=" 0.1.0.2.11.1.0" transform="translate(301.99 234.76)" style="isolation: isolate;font-size: 4.679999828338623px;fill: #fff;font-family: ArialMT, Arial">RX</text>
              </g>
            </g>
            <g id="_0.1.0.2.14" data-name=" 0.1.0.2.14">
              <g id="_0.1.0.2.14.0" data-name=" 0.1.0.2.14.0">
                <g id="_0.1.0.2.14.0.0" data-name=" 0.1.0.2.14.0.0">
                  <g id="_0.1.0.2.14.0.0.0" data-name=" 0.1.0.2.14.0.0.0">
                    <g id="_0.1.0.2.14.0.0.0.0" data-name=" 0.1.0.2.14.0.0.0.0">
                      <g id="_0.1.0.2.14.0.0.0.0.0" data-name=" 0.1.0.2.14.0.0.0.0.0">
                        <g id="_0.1.0.2.14.0.0.0.0.0.0" data-name=" 0.1.0.2.14.0.0.0.0.0.0">
                          <g id="_0.1.0.2.14.0.0.0.0.0.0.0" data-name=" 0.1.0.2.14.0.0.0.0.0.0.0" style="isolation: isolate">
                            <text transform="translate(329.63 317.2) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">RESE</text>
                            <text transform="translate(329.63 308.1) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.03800991864144236em">T</text>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.15" data-name=" 0.1.0.2.15">
              <g id="_0.1.0.2.15.0" data-name=" 0.1.0.2.15.0">
                <g id="_0.1.0.2.15.0.0" data-name=" 0.1.0.2.15.0.0">
                  <g id="_0.1.0.2.15.0.0.0" data-name=" 0.1.0.2.15.0.0.0">
                    <g id="_0.1.0.2.15.0.0.0.0" data-name=" 0.1.0.2.15.0.0.0.0">
                      <g id="_0.1.0.2.15.0.0.0.0.0" data-name=" 0.1.0.2.15.0.0.0.0.0">
                        <g id="_0.1.0.2.15.0.0.0.0.0.0" data-name=" 0.1.0.2.15.0.0.0.0.0.0">
                          <text id="_0.1.0.2.15.0.0.0.0.0.0.0" data-name=" 0.1.0.2.15.0.0.0.0.0.0.0" transform="translate(337.55 317.56) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">3V3</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.16" data-name=" 0.1.0.2.16">
              <g id="_0.1.0.2.16.1" data-name=" 0.1.0.2.16.1">
                <text id="_0.1.0.2.16.1.0" data-name=" 0.1.0.2.16.1.0" transform="translate(387.76 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">A1</text>
              </g>
            </g>
            <g id="_0.1.0.2.17" data-name=" 0.1.0.2.17">
              <g id="_0.1.0.2.17.1" data-name=" 0.1.0.2.17.1">
                <text id="_0.1.0.2.17.1.0" data-name=" 0.1.0.2.17.1.0" transform="translate(394.96 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">A2</text>
              </g>
            </g>
            <g id="_0.1.0.2.18" data-name=" 0.1.0.2.18">
              <g id="_0.1.0.2.18.1" data-name=" 0.1.0.2.18.1">
                <text id="_0.1.0.2.18.1.0" data-name=" 0.1.0.2.18.1.0" transform="translate(402.16 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">A3</text>
              </g>
            </g>
            <g id="_0.1.0.2.19" data-name=" 0.1.0.2.19">
              <g id="_0.1.0.2.19.1" data-name=" 0.1.0.2.19.1">
                <text id="_0.1.0.2.19.1.0" data-name=" 0.1.0.2.19.1.0" transform="translate(409.36 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">A4</text>
              </g>
            </g>
            <g id="_0.1.0.2.20" data-name=" 0.1.0.2.20">
              <g id="_0.1.0.2.20.1" data-name=" 0.1.0.2.20.1">
                <text id="_0.1.0.2.20.1.0" data-name=" 0.1.0.2.20.1.0" transform="translate(416.56 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">A5</text>
              </g>
            </g>
            <g id="_0.1.0.2.21" data-name=" 0.1.0.2.21">
              <g id="_0.1.0.2.21.0" data-name=" 0.1.0.2.21.0">
                <g id="_0.1.0.2.21.0.0" data-name=" 0.1.0.2.21.0.0">
                  <text id="_0.1.0.2.21.0.0.0" data-name=" 0.1.0.2.21.0.0.0" transform="translate(366.31 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">VIN</text>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.22" data-name=" 0.1.0.2.22">
              <g id="_0.1.0.2.22.0" data-name=" 0.1.0.2.22.0">
                <g id="_0.1.0.2.22.0.0" data-name=" 0.1.0.2.22.0.0">
                  <text id="_0.1.0.2.22.0.0.0" data-name=" 0.1.0.2.22.0.0.0" transform="translate(351.9 317.6) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">GND</text>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.23" data-name=" 0.1.0.2.23">
              <g id="_0.1.0.2.23.0" data-name=" 0.1.0.2.23.0">
                <g id="_0.1.0.2.23.0.0" data-name=" 0.1.0.2.23.0.0">
                  <text id="_0.1.0.2.23.0.0.0" data-name=" 0.1.0.2.23.0.0.0" transform="translate(358.9 317.56) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">GND</text>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.24" data-name=" 0.1.0.2.24">
              <g id="_0.1.0.2.24.1" data-name=" 0.1.0.2.24.1">
                <g id="_0.1.0.2.24.1.0" data-name=" 0.1.0.2.24.1.0" style="isolation: isolate">
                  <text transform="translate(362.5 205.88)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial">DIGI</text>
                  <text transform="translate(370.05 205.88)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.08807688849598547em">T</text>
                  <text transform="translate(372.03 205.88)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.055214363634190286em">A</text>
                  <text transform="translate(374.48 205.88)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.07703401576914741em">L</text>
                  <text transform="translate(376.38 205.88)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial"><tspan xml:space="preserve"> (PWM=</tspan></text>
                </g>
              </g>
              <g id="_0.1.0.2.24.3" data-name=" 0.1.0.2.24.3">
                <text id="_0.1.0.2.24.3.0" data-name=" 0.1.0.2.24.3.0" transform="translate(399.37 205.88)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial">)</text>
              </g>
            </g>
            <g id="_0.1.0.2.25" data-name=" 0.1.0.2.25">
              <g id="_0.1.0.2.25.0" data-name=" 0.1.0.2.25.0">
                <g id="_0.1.0.2.25.0.0" data-name=" 0.1.0.2.25.0.0">
                  <g id="_0.1.0.2.25.0.0.0" data-name=" 0.1.0.2.25.0.0.0">
                    <g id="_0.1.0.2.25.0.0.0.0" data-name=" 0.1.0.2.25.0.0.0.0">
                      <g id="_0.1.0.2.25.0.0.0.0.0" data-name=" 0.1.0.2.25.0.0.0.0.0">
                        <g id="_0.1.0.2.25.0.0.0.0.0.0" data-name=" 0.1.0.2.25.0.0.0.0.0.0">
                          <path id="_0.1.0.2.25.0.0.0.0.0.0.0" data-name=" 0.1.0.2.25.0.0.0.0.0.0.0" d="M357.77,303.51c-.5,0-.76-.25-.76-.59a1.64,1.64,0,0,1,.22-.71,1.44,1.44,0,0,0,.22-.63c0-.18-.15-.26-.42-.27V301c.56,0,.75.27.75.58a1.68,1.68,0,0,1-.22.73,1.61,1.61,0,0,0-.22.6c0,.18.12.29.43.3Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.26" data-name=" 0.1.0.2.26">
              <g id="_0.1.0.2.26.0" data-name=" 0.1.0.2.26.0">
                <g id="_0.1.0.2.26.0.0" data-name=" 0.1.0.2.26.0.0">
                  <g id="_0.1.0.2.26.0.0.0" data-name=" 0.1.0.2.26.0.0.0">
                    <g id="_0.1.0.2.26.0.0.0.0" data-name=" 0.1.0.2.26.0.0.0.0">
                      <g id="_0.1.0.2.26.0.0.0.0.0" data-name=" 0.1.0.2.26.0.0.0.0.0">
                        <g id="_0.1.0.2.26.0.0.0.0.0.0" data-name=" 0.1.0.2.26.0.0.0.0.0.0">
                          <path id="_0.1.0.2.26.0.0.0.0.0.0.0" data-name=" 0.1.0.2.26.0.0.0.0.0.0.0" d="M350.34,303.51c-.5,0-.75-.25-.75-.59a1.64,1.64,0,0,1,.22-.71,1.74,1.74,0,0,0,.21-.63c0-.18-.14-.26-.42-.27V301c.56,0,.76.27.76.58a1.68,1.68,0,0,1-.22.73,1.45,1.45,0,0,0-.22.6c0,.18.12.29.42.3v.29Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.27" data-name=" 0.1.0.2.27">
              <g id="_0.1.0.2.27.0" data-name=" 0.1.0.2.27.0">
                <g id="_0.1.0.2.27.0.0" data-name=" 0.1.0.2.27.0.0">
                  <g id="_0.1.0.2.27.0.0.0" data-name=" 0.1.0.2.27.0.0.0">
                    <g id="_0.1.0.2.27.0.0.0.0" data-name=" 0.1.0.2.27.0.0.0.0">
                      <g id="_0.1.0.2.27.0.0.0.0.0" data-name=" 0.1.0.2.27.0.0.0.0.0">
                        <g id="_0.1.0.2.27.0.0.0.0.0.0" data-name=" 0.1.0.2.27.0.0.0.0.0.0">
                          <path id="_0.1.0.2.27.0.0.0.0.0.0.0" data-name=" 0.1.0.2.27.0.0.0.0.0.0.0" d="M397.73,300.48c-.51,0-.76-.25-.76-.59a1.49,1.49,0,0,1,.23-.71,1.69,1.69,0,0,0,.21-.62c0-.18-.15-.27-.43-.27V298c.57,0,.76.26.76.57a1.68,1.68,0,0,1-.22.73,1.61,1.61,0,0,0-.22.6c0,.18.13.29.43.3Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.28" data-name=" 0.1.0.2.28">
              <g id="_0.1.0.2.28.1" data-name=" 0.1.0.2.28.1">
                <g id="_0.1.0.2.28.1.0" data-name=" 0.1.0.2.28.1.0">
                  <g id="_0.1.0.2.28.1.0.0" data-name=" 0.1.0.2.28.1.0.0">
                    <g id="_0.1.0.2.28.1.0.0.0" data-name=" 0.1.0.2.28.1.0.0.0">
                      <g id="_0.1.0.2.28.1.0.0.0.0" data-name=" 0.1.0.2.28.1.0.0.0.0">
                        <path id="_0.1.0.2.28.1.0.0.0.0.0" data-name=" 0.1.0.2.28.1.0.0.0.0.0" d="M412.13,300.48c-.51,0-.76-.25-.76-.59a1.64,1.64,0,0,1,.22-.71,1.4,1.4,0,0,0,.22-.62c0-.18-.15-.27-.43-.27V298c.57,0,.76.26.76.57a1.68,1.68,0,0,1-.22.73,1.61,1.61,0,0,0-.22.6c0,.18.12.29.43.3Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.29" data-name=" 0.1.0.2.29">
              <g id="_0.1.0.2.29.0" data-name=" 0.1.0.2.29.0">
                <g id="_0.1.0.2.29.0.0" data-name=" 0.1.0.2.29.0.0">
                  <g id="_0.1.0.2.29.0.0.0" data-name=" 0.1.0.2.29.0.0.0">
                    <g id="_0.1.0.2.29.0.0.0.0" data-name=" 0.1.0.2.29.0.0.0.0">
                      <g id="_0.1.0.2.29.0.0.0.0.0" data-name=" 0.1.0.2.29.0.0.0.0.0">
                        <g id="_0.1.0.2.29.0.0.0.0.0.0" data-name=" 0.1.0.2.29.0.0.0.0.0.0">
                          <path id="_0.1.0.2.29.0.0.0.0.0.0.0" data-name=" 0.1.0.2.29.0.0.0.0.0.0.0" d="M390.93,300.48c-.51,0-.76-.25-.76-.59a1.49,1.49,0,0,1,.23-.71,1.69,1.69,0,0,0,.21-.62c0-.18-.15-.27-.43-.27V298c.57,0,.76.26.76.57a1.68,1.68,0,0,1-.22.73,1.61,1.61,0,0,0-.22.6c0,.18.13.29.43.3Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.30" data-name=" 0.1.0.2.30">
              <g id="_0.1.0.2.30.0" data-name=" 0.1.0.2.30.0">
                <g id="_0.1.0.2.30.0.0" data-name=" 0.1.0.2.30.0.0">
                  <g id="_0.1.0.2.30.0.0.0" data-name=" 0.1.0.2.30.0.0.0">
                    <g id="_0.1.0.2.30.0.0.0.0" data-name=" 0.1.0.2.30.0.0.0.0">
                      <g id="_0.1.0.2.30.0.0.0.0.0" data-name=" 0.1.0.2.30.0.0.0.0.0">
                        <g id="_0.1.0.2.30.0.0.0.0.0.0" data-name=" 0.1.0.2.30.0.0.0.0.0.0">
                          <path id="_0.1.0.2.30.0.0.0.0.0.0.0" data-name=" 0.1.0.2.30.0.0.0.0.0.0.0" d="M364.61,300.48c-.5,0-.76-.25-.76-.59a1.64,1.64,0,0,1,.22-.71,1.39,1.39,0,0,0,.21-.62q0-.27-.42-.27V298c.57,0,.76.26.76.57a1.68,1.68,0,0,1-.22.73,1.45,1.45,0,0,0-.22.6c0,.18.12.29.43.3v.29Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.31" data-name=" 0.1.0.2.31">
              <g id="_0.1.0.2.31.0" data-name=" 0.1.0.2.31.0">
                <g id="_0.1.0.2.31.0.1" data-name=" 0.1.0.2.31.0.1">
                  <text id="_0.1.0.2.31.0.1.0" data-name=" 0.1.0.2.31.0.1.0" transform="translate(326.36 233.78)" style="isolation: isolate;font-size: 6.119999885559082px;fill: #fff;font-family: ArialMT, Arial">Arduino</text>
                </g>
              </g>
              <g id="_0.1.0.2.31.1" data-name=" 0.1.0.2.31.1">
                <g id="_0.1.0.2.31.1.1" data-name=" 0.1.0.2.31.1.1">
                  <text id="_0.1.0.2.31.1.1.0" data-name=" 0.1.0.2.31.1.1.0" transform="translate(356.34 230.18)" style="isolation: isolate;font-size: 2.2300000190734863px;fill: #fff;font-family: ArialMT, Arial">TM</text>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.32" data-name=" 0.1.0.2.32">
              <g id="_0.1.0.2.32.0" data-name=" 0.1.0.2.32.0">
                <g id="_0.1.0.2.32.0.0" data-name=" 0.1.0.2.32.0.0">
                  <g id="_0.1.0.2.32.0.0.0" data-name=" 0.1.0.2.32.0.0.0">
                    <g id="_0.1.0.2.32.0.0.0.0" data-name=" 0.1.0.2.32.0.0.0.0">
                      <g id="_0.1.0.2.32.0.0.0.0.0" data-name=" 0.1.0.2.32.0.0.0.0.0">
                        <g id="_0.1.0.2.32.0.0.0.0.0.0" data-name=" 0.1.0.2.32.0.0.0.0.0.0">
                          <text id="_0.1.0.2.32.0.0.0.0.0.0.0" data-name=" 0.1.0.2.32.0.0.0.0.0.0.0" transform="translate(323.51 317.2) rotate(-90)" style="isolation: isolate;font-size: 3.3399999141693115px;fill: #fff;font-family: ArialMT, Arial">IOREF</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.54" data-name=" 0.1.0.2.54">
              <g id="_0.1.0.2.54.1" data-name=" 0.1.0.2.54.1">
                <g id="_0.1.0.2.54.1.1" data-name=" 0.1.0.2.54.1.1">
                  <g id="_0.1.0.2.54.1.1.0" data-name=" 0.1.0.2.54.1.1.0">
                    <g id="_0.1.0.2.54.1.1.0.0" data-name=" 0.1.0.2.54.1.1.0.0">
                      <g id="_0.1.0.2.54.1.1.0.0.0" data-name=" 0.1.0.2.54.1.1.0.0.0">
                        <g id="_0.1.0.2.54.1.1.0.0.0.0" data-name=" 0.1.0.2.54.1.1.0.0.0.0">
                          <g id="_0.1.0.2.54.1.1.0.0.0.0.0" data-name=" 0.1.0.2.54.1.1.0.0.0.0.0" style="isolation: isolate">
                            <text transform="translate(411.11 261.71) rotate(-90)" style="isolation: isolate;font-size: 4.179999828338623px;fill: #fff;font-family: ArialMT, Arial">ICS</text>
                            <text transform="translate(411.11 254.75) rotate(-90)" style="isolation: isolate;font-size: 4.179999828338623px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.03702994320732322em">P</text>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.55" data-name=" 0.1.0.2.55">
              <g id="_0.1.0.2.55.1" data-name=" 0.1.0.2.55.1">
                <g id="_0.1.0.2.55.1.1" data-name=" 0.1.0.2.55.1.1">
                  <g id="_0.1.0.2.55.1.1.0" data-name=" 0.1.0.2.55.1.1.0">
                    <g id="_0.1.0.2.55.1.1.0.0" data-name=" 0.1.0.2.55.1.1.0.0">
                      <g id="_0.1.0.2.55.1.1.0.0.0" data-name=" 0.1.0.2.55.1.1.0.0.0">
                        <g id="_0.1.0.2.55.1.1.0.0.0.0" data-name=" 0.1.0.2.55.1.1.0.0.0.0">
                          <text id="_0.1.0.2.55.1.1.0.0.0.0.0" data-name=" 0.1.0.2.55.1.1.0.0.0.0.0" transform="translate(276.71 210.66)" style="isolation: isolate;font-size: 4.179999828338623px;fill: #fff;font-family: ArialMT, Arial">ICSP2</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="_0.1.0.2.62" data-name=" 0.1.0.2.62">
              <g id="_0.1.0.2.62.1" data-name=" 0.1.0.2.62.1">
                <g id="_0.1.0.2.62.1.1" data-name=" 0.1.0.2.62.1.1">
                  <text id="_0.1.0.2.62.1.1.0" data-name=" 0.1.0.2.62.1.1.0" transform="translate(408.11 227.92)" style="isolation: isolate;font-size: 4.679999828338623px;fill: #fff;font-family: ArialMT, Arial">ON</text>
                </g>
              </g>
            </g>
          </g>
          <rect id="_0.1.0.6" data-name=" 0.1.0.6" x="284.75" y="224.43" width="14.17" height="14.17" style="fill: #333"/>
          <rect id="_0.1.0.8" data-name=" 0.1.0.8" x="314.15" y="275.44" width="105.12" height="15.84" style="fill: #333"/>
          <circle id="connector0pin" cx="379.31" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.10" data-name=" 0.1.0.10" d="M395.73,422.69h3.2v7.41h-3.2v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,1,0-3.21-.25A1,1,0,0,0,395.73,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector1pin" cx="386.51" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.12" data-name=" 0.1.0.12" d="M402.93,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,0,0-3.21-.25A1,1,0,0,0,402.93,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector2pin" cx="393.71" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.14" data-name=" 0.1.0.14" d="M410.12,422.69h3.23v7.41h-3.23v-7.41m0,3.71a1.61,1.61,0,0,0,3.22,0h0a1.6,1.6,0,0,0-1.59-1.61h0a1.62,1.62,0,0,0-1.62,1.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector3pin" cx="400.91" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.16" data-name=" 0.1.0.16" d="M417.33,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,1,0-3.21-.25A1,1,0,0,0,417.33,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector4pin" cx="408.11" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.18" data-name=" 0.1.0.18" d="M424.53,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.22,0h0a1.61,1.61,0,0,0-3.22,0Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector5pin" cx="415.31" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.20" data-name=" 0.1.0.20" d="M431.73,422.69h3.2v7.41h-3.2v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,1,0-3.21-.25A1,1,0,0,0,431.73,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector39pin" cx="415.67" cy="243.4" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector40pin" cx="422.87" cy="243.4" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector41pin" cx="415.67" cy="250.6" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector42pin" cx="422.87" cy="250.6" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector43pin" cx="415.67" cy="257.8" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector44pin" cx="422.87" cy="257.8" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector45pin" cx="294.35" cy="195.16" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector46pin" cx="294.35" cy="202.36" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector47pin" cx="287.15" cy="195.16" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector48pin" cx="287.15" cy="202.36" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector49pin" cx="279.95" cy="195.16" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector50pin" cx="279.95" cy="202.36" r="1.77" style="fill: none;stroke: #9a916c;stroke-width: 0.850000023841858px"/>
          <circle id="connector51pin" cx="353.39" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.34" data-name=" 0.1.0.34" d="M369.81,285.89H373v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,369.81,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector52pin" cx="346.19" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.36" data-name=" 0.1.0.36" d="M362.61,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,362.61,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector53pin" cx="338.99" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.38" data-name=" 0.1.0.38" d="M355.41,285.89h3.22v7.41h-3.22v-7.41m0,3.71A1.61,1.61,0,1,0,357,288h0A1.61,1.61,0,0,0,355.41,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector54pin" cx="331.79" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.40" data-name=" 0.1.0.40" d="M348.2,285.89h3.23v7.41H348.2v-7.41m0,3.71a1.61,1.61,0,1,0,1.62-1.61A1.61,1.61,0,0,0,348.2,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector55pin" cx="324.59" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.42" data-name=" 0.1.0.42" d="M341,285.89h3.22v7.41H341v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,341,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector56pin" cx="317.39" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.44" data-name=" 0.1.0.44" d="M333.81,285.89H337v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,333.81,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector57pin" cx="310.19" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.46" data-name=" 0.1.0.46" d="M326.61,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,326.61,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector58pin" cx="302.99" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.48" data-name=" 0.1.0.48" d="M319.41,285.89h3.22v7.41h-3.22v-7.41m0,3.71A1.61,1.61,0,1,0,321,288h0A1.61,1.61,0,0,0,319.41,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector59pin" cx="295.79" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.50" data-name=" 0.1.0.50" d="M312.21,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,312.21,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector60pin" cx="288.59" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.52" data-name=" 0.1.0.52" d="M305,285.89h3.22v7.41H305v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,305,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector61pin" cx="415.31" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.54" data-name=" 0.1.0.54" d="M431.73,285.89h3.2v7.41h-3.2v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,431.73,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector62pin" cx="408.11" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.56" data-name=" 0.1.0.56" d="M424.53,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,424.53,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector63pin" cx="400.91" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.58" data-name=" 0.1.0.58" d="M417.33,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,417.33,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector64pin" cx="393.71" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.60" data-name=" 0.1.0.60" d="M410.12,285.89h3.23v7.41h-3.23v-7.41m0,3.71a1.61,1.61,0,1,0,1.62-1.61A1.61,1.61,0,0,0,410.12,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector65pin" cx="386.51" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.62" data-name=" 0.1.0.62" d="M402.93,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,402.93,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector66pin" cx="379.31" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.64" data-name=" 0.1.0.64" d="M395.73,285.89h3.2v7.41h-3.2v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,395.73,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector67pin" cx="372.11" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.66" data-name=" 0.1.0.66" d="M388.53,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,388.53,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector68pin" cx="364.91" cy="185.8" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.68" data-name=" 0.1.0.68" d="M381.33,285.89h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,1.61-1.61h0A1.61,1.61,0,0,0,381.33,289.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector84pin" cx="321.71" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <circle id="connector91pin" cx="314.51" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.71" data-name=" 0.1.0.71" d="M338.13,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.22,0h0a1.61,1.61,0,0,0-3.22,0Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <path id="_0.1.0.72" data-name=" 0.1.0.72" d="M330.93,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,1,0,3.22,0h0a1.61,1.61,0,1,0-3.22,0Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector85pin" cx="328.91" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.74" data-name=" 0.1.0.74" d="M345.33,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,1,0-3.21-.25A1,1,0,0,0,345.33,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector86pin" cx="336.11" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.76" data-name=" 0.1.0.76" d="M352.53,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.22,0h0a1.61,1.61,0,0,0-3.22,0Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector87pin" cx="343.31" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.78" data-name=" 0.1.0.78" d="M359.73,422.69h3.2v7.41h-3.2v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,1,0-3.21-.25A1,1,0,0,0,359.73,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector88pin" cx="350.51" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.80" data-name=" 0.1.0.80" d="M366.93,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,0,0-3.21-.25A1,1,0,0,0,366.93,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector89pin" cx="357.71" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.82" data-name=" 0.1.0.82" d="M374.12,422.69h3.23v7.41h-3.23v-7.41m0,3.71a1.61,1.61,0,0,0,3.22,0h0a1.6,1.6,0,0,0-1.59-1.61h0a1.62,1.62,0,0,0-1.62,1.6Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <circle id="connector90pin" cx="364.91" cy="322.6" r="1.61" style="fill: none;stroke: #9a916c;stroke-width: 0.810000002384186px"/>
          <path id="_0.1.0.84" data-name=" 0.1.0.84" d="M381.33,422.69h3.22v7.41h-3.22v-7.41m0,3.71a1.61,1.61,0,0,0,3.21,0h0a1.61,1.61,0,1,0-3.21-.25A1,1,0,0,0,381.33,426.4Z" transform="translate(-18.02 -103.8)" style="fill: #9a916c"/>
          <line id="_0.1.0.85" data-name=" 0.1.0.85" x1="310.13" y1="207.76" x2="417.04" y2="207.76" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-width: 0.860000014305115px"/>
          <line id="_0.1.0.86" data-name=" 0.1.0.86" x1="377.41" y1="304.81" x2="417.04" y2="304.81" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-width: 0.860000014305115px"/>
          <g id="_0.1.0.87" data-name=" 0.1.0.87">
            <g id="_0.1.0.87.0" data-name=" 0.1.0.87.0">
              <g id="_0.1.0.87.0.0" data-name=" 0.1.0.87.0.0">
                <text id="_0.1.0.87.0.0.0" data-name=" 0.1.0.87.0.0.0" transform="translate(355.3 309.41)" style="isolation: isolate;font-size: 3.6700000762939453px;fill: #fff;font-family: ArialMT, Arial">POWER</text>
              </g>
            </g>
          </g>
          <line id="_0.1.0.88" data-name=" 0.1.0.88" x1="332.51" y1="304.81" x2="368.43" y2="304.81" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-width: 0.860000014305115px"/>
          <g id="_0.1.0.89" data-name=" 0.1.0.89">
            <g id="_0.1.0.89.0" data-name=" 0.1.0.89.0">
              <g id="_0.1.0.89.0.0" data-name=" 0.1.0.89.0.0">
                <g id="_0.1.0.89.0.0.0" data-name=" 0.1.0.89.0.0.0">
                  <g id="_0.1.0.89.0.0.0.0" data-name=" 0.1.0.89.0.0.0.0">
                    <g id="_0.1.0.89.0.0.0.0.0" data-name=" 0.1.0.89.0.0.0.0.0">
                      <g id="_0.1.0.89.0.0.0.0.0.0" data-name=" 0.1.0.89.0.0.0.0.0.0">
                        <text id="_0.1.0.89.0.0.0.0.0.0.0" data-name=" 0.1.0.89.0.0.0.0.0.0.0" transform="translate(417.07 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">0</text>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="_0.1.0.90" data-name=" 0.1.0.90">
            <g id="_0.1.0.90.0" data-name=" 0.1.0.90.0">
              <g id="_0.1.0.90.0.0" data-name=" 0.1.0.90.0.0">
                <g id="_0.1.0.90.0.0.0" data-name=" 0.1.0.90.0.0.0">
                  <g id="_0.1.0.90.0.0.0.0" data-name=" 0.1.0.90.0.0.0.0">
                    <g id="_0.1.0.90.0.0.0.0.0" data-name=" 0.1.0.90.0.0.0.0.0">
                      <g id="_0.1.0.90.0.0.0.0.0.0" data-name=" 0.1.0.90.0.0.0.0.0.0">
                        <text id="_0.1.0.90.0.0.0.0.0.0.0" data-name=" 0.1.0.90.0.0.0.0.0.0.0" transform="translate(409.87 193.28) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">1</text>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="_0.1.0.91" data-name=" 0.1.0.91">
            <g id="_0.1.0.91.0" data-name=" 0.1.0.91.0">
              <g id="_0.1.0.91.0.0" data-name=" 0.1.0.91.0.0">
                <g id="_0.1.0.91.0.0.0" data-name=" 0.1.0.91.0.0.0">
                  <g id="_0.1.0.91.0.0.0.0" data-name=" 0.1.0.91.0.0.0.0">
                    <g id="_0.1.0.91.0.0.0.0.0" data-name=" 0.1.0.91.0.0.0.0.0">
                      <g id="_0.1.0.91.0.0.0.0.0.0" data-name=" 0.1.0.91.0.0.0.0.0.0">
                        <text id="_0.1.0.91.0.0.0.0.0.0.0" data-name=" 0.1.0.91.0.0.0.0.0.0.0" transform="translate(409.87 206.04) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">TX0</text>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="_0.1.0.92" data-name=" 0.1.0.92">
            <g id="_0.1.0.92.0" data-name=" 0.1.0.92.0">
              <g id="_0.1.0.92.0.0" data-name=" 0.1.0.92.0.0">
                <g id="_0.1.0.92.0.0.0" data-name=" 0.1.0.92.0.0.0">
                  <g id="_0.1.0.92.0.0.0.0" data-name=" 0.1.0.92.0.0.0.0">
                    <g id="_0.1.0.92.0.0.0.0.0" data-name=" 0.1.0.92.0.0.0.0.0">
                      <g id="_0.1.0.92.0.0.0.0.0.0" data-name=" 0.1.0.92.0.0.0.0.0.0">
                        <text id="_0.1.0.92.0.0.0.0.0.0.0" data-name=" 0.1.0.92.0.0.0.0.0.0.0" transform="translate(417.07 206.04) rotate(-90)" style="isolation: isolate;font-size: 3.75px;fill: #fff;font-family: ArialMT, Arial">RX0</text>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="_0.1.0.93" data-name=" 0.1.0.93">
            <path id="_0.1.0.93.0" data-name=" 0.1.0.93.0" d="M427.47,300.39h-2a.33.33,0,0,1-.34-.32.36.36,0,0,1,.06-.2l1-1.46a.35.35,0,0,1,.5-.07l.07.07.93,1.39a.36.36,0,0,1,.11.26A.35.35,0,0,1,427.47,300.39Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
          </g>
          <g id="_0.1.0.94" data-name=" 0.1.0.94">
            <path id="_0.1.0.94.0" data-name=" 0.1.0.94.0" d="M432.77,298.28h2a.33.33,0,0,1,.34.32.36.36,0,0,1-.06.2l-1,1.46a.35.35,0,0,1-.5.07.46.46,0,0,1-.07-.07l-.93-1.39a.36.36,0,0,1-.11-.26A.35.35,0,0,1,432.77,298.28Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
          </g>
          <g id="_0.1.0.95" data-name=" 0.1.0.95">
            <path id="_0.1.0.95.0" data-name=" 0.1.0.95.0" d="M415.27,308.52c0-.55.27-.83.65-.83a1.75,1.75,0,0,1,.77.25,1.88,1.88,0,0,0,.69.23c.2,0,.29-.16.3-.47H418c0,.62-.3.83-.64.83a1.82,1.82,0,0,1-.79-.24,1.94,1.94,0,0,0-.66-.24c-.2,0-.32.14-.33.47Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
          </g>
          <g id="_0.1.0.96" data-name=" 0.1.0.96">
            <g id="_0.1.0.96.0" data-name=" 0.1.0.96.0">
              <g id="_0.1.0.96.0.0" data-name=" 0.1.0.96.0.0">
                <path id="_0.1.0.96.0.0.0" data-name=" 0.1.0.96.0.0.0" d="M361.23,319.46a33.34,33.34,0,0,1,2.28-2.47c3-2.66,6.3-3.64,10.13-2a8.06,8.06,0,0,1,4.79,9.14,8.38,8.38,0,0,1-7.87,6.38c-3.45.11-6-1.43-8.21-3.94-.33-.38-.64-.78-1.06-1.3l-.76.9c-2.31,2.92-5.19,4.57-9,4.32A8.42,8.42,0,0,1,344,323a8.25,8.25,0,0,1,7.69-8.76c.25,0,.5,0,.75,0a9.92,9.92,0,0,1,8,4.32A11.82,11.82,0,0,1,361.23,319.46Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                <path id="_0.1.0.96.0.0.1" data-name=" 0.1.0.96.0.0.1" d="M352.93,316.85c-3.49,0-6.05,2.24-6.33,5.14a5.66,5.66,0,0,0,4.6,5.74,6.51,6.51,0,0,0,6.64-2.55c2.56-3.08,2.47-2.55,0-5.6A7,7,0,0,0,352.93,316.85Z" transform="translate(-18.02 -103.8)" style="fill: #0f7391"/>
                <path id="_0.1.0.96.0.0.2" data-name=" 0.1.0.96.0.0.2" d="M370.25,316.83a8.42,8.42,0,0,0-1,.08c-3,.6-4.83,2.57-6.22,5.08a.92.92,0,0,0,0,.76c1.26,2.18,2.84,4.05,5.35,4.84a5.63,5.63,0,0,0,6.24-1.74,4.88,4.88,0,0,0,.85-5.72A5.79,5.79,0,0,0,370.25,316.83Z" transform="translate(-18.02 -103.8)" style="fill: #0f7391"/>
              </g>
              <g id="_0.1.0.96.0.1" data-name=" 0.1.0.96.0.1">
                <path id="_0.1.0.96.0.1.0" data-name=" 0.1.0.96.0.1.0" d="M355.43,323a.15.15,0,0,1-.15.14h-5.17A.14.14,0,0,1,350,323h0v-1.59a.14.14,0,0,1,.14-.14h5.17a.15.15,0,0,1,.15.14Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
              </g>
              <g id="_0.1.0.96.0.2" data-name=" 0.1.0.96.0.2">
                <path id="_0.1.0.96.0.2.0" data-name=" 0.1.0.96.0.2.0" d="M372.49,321.39a.14.14,0,0,0-.14-.14h-1.52a.15.15,0,0,1-.15-.14v-1.52a.15.15,0,0,0-.14-.15H369a.15.15,0,0,0-.14.15v1.52a.15.15,0,0,1-.15.14h-1.52a.14.14,0,0,0-.14.14h0V323a.14.14,0,0,0,.14.14h1.52a.15.15,0,0,1,.15.15v1.52a.14.14,0,0,0,.14.14h1.56a.14.14,0,0,0,.14-.14h0v-1.52a.15.15,0,0,1,.15-.15h1.52a.14.14,0,0,0,.14-.14h0Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
              </g>
              <g id="_0.1.0.96.0.3" data-name=" 0.1.0.96.0.3">
                <circle id="_0.1.0.96.0.3.0" data-name=" 0.1.0.96.0.3.0" cx="389.73" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.1" data-name=" 0.1.0.96.0.3.1" cx="388.31" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.2" data-name=" 0.1.0.96.0.3.2" cx="386.89" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.3" data-name=" 0.1.0.96.0.3.3" cx="385.48" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.4" data-name=" 0.1.0.96.0.3.4" cx="384.06" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.5" data-name=" 0.1.0.96.0.3.5" cx="382.64" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.6" data-name=" 0.1.0.96.0.3.6" cx="381.23" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.7" data-name=" 0.1.0.96.0.3.7" cx="379.81" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.8" data-name=" 0.1.0.96.0.3.8" cx="378.39" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.9" data-name=" 0.1.0.96.0.3.9" cx="376.98" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.10" data-name=" 0.1.0.96.0.3.10" cx="375.56" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.11" data-name=" 0.1.0.96.0.3.11" cx="374.14" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.12" data-name=" 0.1.0.96.0.3.12" cx="372.72" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.3.13" data-name=" 0.1.0.96.0.3.13" cx="371.31" cy="211.12" r="0.57" style="fill: #fff"/>
              </g>
              <g id="_0.1.0.96.0.4" data-name=" 0.1.0.96.0.4">
                <circle id="_0.1.0.96.0.4.0" data-name=" 0.1.0.96.0.4.0" cx="389.79" cy="226" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.1" data-name=" 0.1.0.96.0.4.1" cx="391.13" cy="225.74" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.2" data-name=" 0.1.0.96.0.4.2" cx="392.41" cy="225.23" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.3" data-name=" 0.1.0.96.0.4.3" cx="393.57" cy="224.49" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.4" data-name=" 0.1.0.96.0.4.4" cx="394.58" cy="223.56" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.5" data-name=" 0.1.0.96.0.4.5" cx="395.4" cy="222.46" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.6" data-name=" 0.1.0.96.0.4.6" cx="396.01" cy="221.22" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.7" data-name=" 0.1.0.96.0.4.7" cx="396.37" cy="219.9" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.8" data-name=" 0.1.0.96.0.4.8" cx="396.49" cy="218.53" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.9" data-name=" 0.1.0.96.0.4.9" cx="396.36" cy="217.16" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.10" data-name=" 0.1.0.96.0.4.10" cx="395.97" cy="215.84" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.11" data-name=" 0.1.0.96.0.4.11" cx="395.36" cy="214.61" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.12" data-name=" 0.1.0.96.0.4.12" cx="394.53" cy="213.51" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.13" data-name=" 0.1.0.96.0.4.13" cx="393.51" cy="212.59" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.14" data-name=" 0.1.0.96.0.4.14" cx="392.34" cy="211.87" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.15" data-name=" 0.1.0.96.0.4.15" cx="391.05" cy="211.37" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.16" data-name=" 0.1.0.96.0.4.16" cx="389.7" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.4.17" data-name=" 0.1.0.96.0.4.17" cx="388.33" cy="211.12" r="0.57" style="fill: #fff"/>
              </g>
              <g id="_0.1.0.96.0.5" data-name=" 0.1.0.96.0.5">
                <circle id="_0.1.0.96.0.5.0" data-name=" 0.1.0.96.0.5.0" cx="369.75" cy="225.91" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.1" data-name=" 0.1.0.96.0.5.1" cx="368.42" cy="225.63" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.2" data-name=" 0.1.0.96.0.5.2" cx="367.17" cy="225.11" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.3" data-name=" 0.1.0.96.0.5.3" cx="366.03" cy="224.37" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.4" data-name=" 0.1.0.96.0.5.4" cx="365.04" cy="223.43" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.5" data-name=" 0.1.0.96.0.5.5" cx="364.24" cy="222.33" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.6" data-name=" 0.1.0.96.0.5.6" cx="363.65" cy="221.1" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.7" data-name=" 0.1.0.96.0.5.7" cx="363.3" cy="219.79" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.8" data-name=" 0.1.0.96.0.5.8" cx="363.19" cy="218.43" r="0.57" style="fill: #fff"/>
                <path id="_0.1.0.96.0.5.9" data-name=" 0.1.0.96.0.5.9" d="M381.42,320.31a.56.56,0,0,1,.5.61h0a.57.57,0,0,1-.62.51.59.59,0,0,1-.51-.63A.57.57,0,0,1,381.42,320.31Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                <path id="_0.1.0.96.0.5.10" data-name=" 0.1.0.96.0.5.10" d="M381.93,319a.57.57,0,1,1-.71.38h0A.58.58,0,0,1,381.93,319Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.11" data-name=" 0.1.0.96.0.5.11" cx="364.34" cy="214.56" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.12" data-name=" 0.1.0.96.0.5.12" cx="365.17" cy="213.48" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.13" data-name=" 0.1.0.96.0.5.13" cx="366.18" cy="212.57" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.14" data-name=" 0.1.0.96.0.5.14" cx="367.34" cy="211.86" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.15" data-name=" 0.1.0.96.0.5.15" cx="368.61" cy="211.37" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.16" data-name=" 0.1.0.96.0.5.16" cx="369.95" cy="211.12" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.5.17" data-name=" 0.1.0.96.0.5.17" cx="371.31" cy="211.12" r="0.57" style="fill: #fff"/>
              </g>
              <g id="_0.1.0.96.0.6" data-name=" 0.1.0.96.0.6">
                <circle id="_0.1.0.96.0.6.0" data-name=" 0.1.0.96.0.6.0" cx="389.73" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.1" data-name=" 0.1.0.96.0.6.1" cx="388.31" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.2" data-name=" 0.1.0.96.0.6.2" cx="386.89" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.3" data-name=" 0.1.0.96.0.6.3" cx="385.48" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.4" data-name=" 0.1.0.96.0.6.4" cx="384.06" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.5" data-name=" 0.1.0.96.0.6.5" cx="382.64" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.6" data-name=" 0.1.0.96.0.6.6" cx="381.23" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.7" data-name=" 0.1.0.96.0.6.7" cx="379.81" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.8" data-name=" 0.1.0.96.0.6.8" cx="378.39" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.9" data-name=" 0.1.0.96.0.6.9" cx="376.98" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.10" data-name=" 0.1.0.96.0.6.10" cx="375.56" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.11" data-name=" 0.1.0.96.0.6.11" cx="374.14" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.12" data-name=" 0.1.0.96.0.6.12" cx="372.72" cy="226.05" r="0.57" style="fill: #fff"/>
                <circle id="_0.1.0.96.0.6.13" data-name=" 0.1.0.96.0.6.13" cx="371.31" cy="226.05" r="0.57" style="fill: #fff"/>
              </g>
            </g>
            <g id="_0.1.0.96.1" data-name=" 0.1.0.96.1">
              <path id="_0.1.0.96.1.0" data-name=" 0.1.0.96.1.0" d="M389.53,327a3.43,3.43,0,0,1-2.24-.62,2.68,2.68,0,0,1-.94-1.43,7,7,0,0,1-.15-.9v-6.23h.94V323a3.84,3.84,0,0,0,.58,2.49,2.24,2.24,0,0,0,1.66.57,2.79,2.79,0,0,0,1.87-.57,4,4,0,0,0,.57-2.49v-5.22h1V323a5.75,5.75,0,0,1-.38,2.43A2.72,2.72,0,0,1,389.53,327Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
              <path id="_0.1.0.96.1.1" data-name=" 0.1.0.96.1.1" d="M401.62,326.79h-.95l-4.74-7.4v7.45h-.8v-9H396l4.66,7.45v-7.45h.95Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
              <path id="_0.1.0.96.1.2" data-name=" 0.1.0.96.1.2" d="M407.28,317.53a3.64,3.64,0,0,1,1.59.34,3.73,3.73,0,0,1,1.26,1,4.44,4.44,0,0,1,.8,1.52,6.82,6.82,0,0,1,0,4,4.47,4.47,0,0,1-.81,1.52,3.61,3.61,0,0,1-2.85,1.32,3.7,3.7,0,0,1-1.61-.34,3.79,3.79,0,0,1-1.25-1,4.6,4.6,0,0,1-.83-1.52,7,7,0,0,1,0-4,4.42,4.42,0,0,1,.83-1.52,3.79,3.79,0,0,1,1.25-1A3.61,3.61,0,0,1,407.28,317.53Zm0,8.56a2.54,2.54,0,0,0,2-1,3.45,3.45,0,0,0,.59-1.18,6,6,0,0,0,0-3.16,3.45,3.45,0,0,0-.59-1.18,2.4,2.4,0,0,0-.88-.73,2.6,2.6,0,0,0-1.13-.26,2.68,2.68,0,0,0-1.14.26,2.55,2.55,0,0,0-.9.73,3.3,3.3,0,0,0-.6,1.18,5.63,5.63,0,0,0-.22,1.58,5,5,0,0,0,.22,1.58,3.45,3.45,0,0,0,.59,1.18,2.65,2.65,0,0,0,.89.74,2.6,2.6,0,0,0,1.13.26Z" transform="translate(-18.02 -103.8)" style="fill: #fff"/>
            </g>
          </g>
        </g>
        <g id="_0.1.1" data-name=" 0.1.1">
          <g id="_1x06" data-name=" 1x06">
            <rect id="_0.1.1.0.0" data-name=" 0.1.1.0.0" x="375.71" y="319" width="43.2" height="7.2" style="fill: #404040"/>
            <rect id="ARDUINO_PIN_A0_HOLE" x="377.92" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.1.0.2" data-name=" 0.1.1.0.2" points="376.9 320.18 377.92 321.21 380.71 321.21 381.73 320.18 376.9 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.1.0.3" data-name=" 0.1.1.0.3" points="381.73 320.18 380.71 321.21 380.71 323.99 381.73 325.02 381.73 320.18" style="fill: #474747"/>
            <polygon id="_0.1.1.0.4" data-name=" 0.1.1.0.4" points="381.73 325.02 380.71 323.99 377.92 323.99 376.9 325.02 381.73 325.02" style="fill: #595959"/>
            <polygon id="_0.1.1.0.5" data-name=" 0.1.1.0.5" points="376.9 325.02 377.92 323.99 377.92 321.21 376.9 320.18 376.9 325.02" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_A1_HOLE" x="385.12" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.1.0.7" data-name=" 0.1.1.0.7" points="384.1 320.18 385.12 321.21 387.9 321.21 388.93 320.18 384.1 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.1.0.8" data-name=" 0.1.1.0.8" points="388.93 320.18 387.9 321.21 387.9 323.99 388.93 325.02 388.93 320.18" style="fill: #474747"/>
            <polygon id="_0.1.1.0.9" data-name=" 0.1.1.0.9" points="388.93 325.02 387.9 323.99 385.12 323.99 384.1 325.02 388.93 325.02" style="fill: #595959"/>
            <polygon id="_0.1.1.0.10" data-name=" 0.1.1.0.10" points="384.1 325.02 385.12 323.99 385.12 321.21 384.1 320.18 384.1 325.02" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_A2_HOLE" x="392.32" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.1.0.12" data-name=" 0.1.1.0.12" points="391.3 320.18 392.32 321.21 395.11 321.21 396.13 320.18 391.3 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.1.0.13" data-name=" 0.1.1.0.13" points="396.13 320.18 395.11 321.21 395.11 323.99 396.13 325.02 396.13 320.18" style="fill: #474747"/>
            <polygon id="_0.1.1.0.14" data-name=" 0.1.1.0.14" points="396.13 325.02 395.11 323.99 392.32 323.99 391.3 325.02 396.13 325.02" style="fill: #595959"/>
            <polygon id="_0.1.1.0.15" data-name=" 0.1.1.0.15" points="391.3 325.02 392.32 323.99 392.32 321.21 391.3 320.18 391.3 325.02" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_A3_HOLE" x="399.52" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.1.0.17" data-name=" 0.1.1.0.17" points="398.5 320.18 399.52 321.21 402.31 321.21 403.33 320.18 398.5 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.1.0.18" data-name=" 0.1.1.0.18" points="403.33 320.18 402.31 321.21 402.31 323.99 403.33 325.02 403.33 320.18" style="fill: #474747"/>
            <polygon id="_0.1.1.0.19" data-name=" 0.1.1.0.19" points="403.33 325.02 402.3 323.99 399.52 323.99 398.5 325.02 403.33 325.02" style="fill: #595959"/>
            <polygon id="_0.1.1.0.20" data-name=" 0.1.1.0.20" points="398.5 325.02 399.52 323.99 399.52 321.21 398.5 320.18 398.5 325.02" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_A4_HOLE" x="406.72" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.1.0.22" data-name=" 0.1.1.0.22" points="405.7 320.18 406.72 321.21 409.51 321.21 410.53 320.18 405.7 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.1.0.23" data-name=" 0.1.1.0.23" points="410.53 320.18 409.51 321.21 409.51 323.99 410.53 325.02 410.53 320.18" style="fill: #474747"/>
            <polygon id="_0.1.1.0.24" data-name=" 0.1.1.0.24" points="410.53 325.02 409.51 323.99 406.72 323.99 405.7 325.02 410.53 325.02" style="fill: #595959"/>
            <polygon id="_0.1.1.0.25" data-name=" 0.1.1.0.25" points="405.7 325.02 406.72 323.99 406.72 321.21 405.7 320.18 405.7 325.02" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_A5_HOLE" x="413.92" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.1.0.27" data-name=" 0.1.1.0.27" points="412.9 320.18 413.92 321.21 416.71 321.21 417.73 320.18 412.9 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.1.0.28" data-name=" 0.1.1.0.28" points="417.73 320.18 416.71 321.21 416.71 323.99 417.73 325.02 417.73 320.18" style="fill: #474747"/>
            <polygon id="_0.1.1.0.29" data-name=" 0.1.1.0.29" points="417.73 325.02 416.71 323.99 413.92 323.99 412.9 325.02 417.73 325.02" style="fill: #595959"/>
            <polygon id="_0.1.1.0.30" data-name=" 0.1.1.0.30" points="412.9 325.02 413.92 323.99 413.92 321.21 412.9 320.18 412.9 325.02" style="fill: #373737"/>
          </g>
        </g>
        <g id="_0.1.2" data-name=" 0.1.2">
          <g id="_2x03" data-name=" 2x03">
            <g id="_0.1.2.0.0" data-name=" 0.1.2.0.0">
              <g id="_0.1.2.0.0.0" data-name=" 0.1.2.0.0.0">
                <g id="_0.1.2.0.0.0.0" data-name=" 0.1.2.0.0.0.0">
                  <polygon id="_0.1.2.0.0.0.0.0" data-name=" 0.1.2.0.0.0.0.0" points="424.88 239.9 420.94 239.9 417.6 239.9 413.67 239.9 412.16 241.41 412.16 245.34 413.67 246.85 417.6 246.85 420.94 246.85 424.88 246.85 426.39 245.34 426.39 241.41 424.88 239.9" style="fill: #404040"/>
                  <polygon id="_0.1.2.0.0.0.0.1" data-name=" 0.1.2.0.0.0.0.1" points="424.88 247.08 420.94 247.08 417.6 247.08 413.67 247.08 412.16 248.59 412.16 252.52 413.67 254.03 417.6 254.03 420.94 254.03 424.88 254.03 426.39 252.52 426.39 248.59 424.88 247.08" style="fill: #404040"/>
                  <polygon id="_0.1.2.0.0.0.0.2" data-name=" 0.1.2.0.0.0.0.2" points="424.88 254.26 420.94 254.26 417.6 254.26 413.67 254.26 412.16 255.77 412.16 259.7 413.67 261.21 417.6 261.21 420.94 261.21 424.88 261.21 426.39 259.7 426.39 255.77 424.88 254.26" style="fill: #404040"/>
                  <polygon id="_0.1.2.0.0.0.0.3" data-name=" 0.1.2.0.0.0.0.3" points="424.88 239.9 420.94 239.9 417.6 239.9 413.67 239.9 412.16 241.41 412.16 245.34 413.67 246.85 417.6 246.85 420.94 246.85 424.88 246.85 426.39 245.34 426.39 241.41 424.88 239.9" style="fill: #404040"/>
                  <polygon id="_0.1.2.0.0.0.0.4" data-name=" 0.1.2.0.0.0.0.4" points="424.88 247.08 420.94 247.08 417.6 247.08 413.67 247.08 412.16 248.59 412.16 252.52 413.67 254.03 417.6 254.03 420.94 254.03 424.88 254.03 426.39 252.52 426.39 248.59 424.88 247.08" style="fill: #404040"/>
                  <polygon id="_0.1.2.0.0.0.0.5" data-name=" 0.1.2.0.0.0.0.5" points="424.88 254.26 420.94 254.26 417.6 254.26 413.67 254.26 412.16 255.77 412.16 259.7 413.67 261.21 417.6 261.21 420.94 261.21 424.88 261.21 426.39 259.7 426.39 255.77 424.88 254.26" style="fill: #404040"/>
                  <g id="_0.1.2.0.0.0.0.6" data-name=" 0.1.2.0.0.0.0.6">
                    <rect id="_0.1.2.0.0.0.0.6.0" data-name=" 0.1.2.0.0.0.0.6.0" x="414.57" y="256.45" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  </g>
                  <g id="_0.1.2.0.0.0.0.7" data-name=" 0.1.2.0.0.0.0.7">
                    <rect id="_0.1.2.0.0.0.0.7.0" data-name=" 0.1.2.0.0.0.0.7.0" x="421.76" y="256.45" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  </g>
                  <g id="_0.1.2.0.0.0.0.8" data-name=" 0.1.2.0.0.0.0.8">
                    <rect id="_0.1.2.0.0.0.0.8.0" data-name=" 0.1.2.0.0.0.0.8.0" x="414.56" y="249.25" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  </g>
                  <g id="_0.1.2.0.0.0.0.9" data-name=" 0.1.2.0.0.0.0.9">
                    <rect id="_0.1.2.0.0.0.0.9.0" data-name=" 0.1.2.0.0.0.0.9.0" x="421.77" y="249.25" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  </g>
                  <g id="_0.1.2.0.0.0.0.10" data-name=" 0.1.2.0.0.0.0.10">
                    <rect id="_0.1.2.0.0.0.0.10.0" data-name=" 0.1.2.0.0.0.0.10.0" x="414.56" y="242.05" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  </g>
                  <g id="_0.1.2.0.0.0.0.11" data-name=" 0.1.2.0.0.0.0.11">
                    <rect id="_0.1.2.0.0.0.0.11.0" data-name=" 0.1.2.0.0.0.0.11.0" x="421.76" y="242.05" width="2.3" height="2.3" style="fill: #8d8455"/>
                  </g>
                  <g id="_0.1.2.0.0.0.0.12" data-name=" 0.1.2.0.0.0.0.12">
                    <rect id="_0.1.2.0.0.0.0.12.0" data-name=" 0.1.2.0.0.0.0.12.0" x="422.32" y="242.61" width="1.18" height="1.18" style="fill: #8c8663"/>
                  </g>
                  <polygon id="_0.1.2.0.0.0.0.13" data-name=" 0.1.2.0.0.0.0.13" points="421.76 242.05 422.32 242.61 423.5 242.61 424.06 242.05 421.76 242.05" style="fill: #b8af82"/>
                  <polygon id="_0.1.2.0.0.0.0.14" data-name=" 0.1.2.0.0.0.0.14" points="423.5 243.79 423.5 242.61 424.06 242.05 424.06 244.35 423.5 243.79" style="fill: #80795b"/>
                  <polygon id="_0.1.2.0.0.0.0.15" data-name=" 0.1.2.0.0.0.0.15" points="422.32 243.79 423.5 243.79 424.06 244.35 421.76 244.35 422.32 243.79" style="fill: #5e5b43"/>
                  <polygon id="_0.1.2.0.0.0.0.16" data-name=" 0.1.2.0.0.0.0.16" points="421.76 242.05 422.32 242.61 422.32 243.79 421.76 244.35 421.76 242.05" style="fill: #9a916c"/>
                  <g id="_0.1.2.0.0.0.0.17" data-name=" 0.1.2.0.0.0.0.17">
                    <rect id="_0.1.2.0.0.0.0.17.0" data-name=" 0.1.2.0.0.0.0.17.0" x="415.12" y="242.61" width="1.18" height="1.18" style="fill: #8c8663"/>
                  </g>
                  <polygon id="_0.1.2.0.0.0.0.18" data-name=" 0.1.2.0.0.0.0.18" points="414.57 242.05 415.12 242.61 416.3 242.61 416.86 242.05 414.57 242.05" style="fill: #b8af82"/>
                  <polygon id="_0.1.2.0.0.0.0.19" data-name=" 0.1.2.0.0.0.0.19" points="416.3 243.79 416.3 242.61 416.86 242.05 416.86 244.35 416.3 243.79" style="fill: #80795b"/>
                  <polygon id="_0.1.2.0.0.0.0.20" data-name=" 0.1.2.0.0.0.0.20" points="415.12 243.79 416.3 243.79 416.86 244.35 414.57 244.35 415.12 243.79" style="fill: #5e5b43"/>
                  <polygon id="_0.1.2.0.0.0.0.21" data-name=" 0.1.2.0.0.0.0.21" points="414.57 242.05 415.12 242.61 415.12 243.79 414.57 244.35 414.57 242.05" style="fill: #9a916c"/>
                  <g id="_0.1.2.0.0.0.0.22" data-name=" 0.1.2.0.0.0.0.22">
                    <rect id="_0.1.2.0.0.0.0.22.0" data-name=" 0.1.2.0.0.0.0.22.0" x="422.32" y="249.8" width="1.18" height="1.18" style="fill: #8c8663"/>
                  </g>
                  <polygon id="_0.1.2.0.0.0.0.23" data-name=" 0.1.2.0.0.0.0.23" points="421.76 249.25 422.32 249.81 423.5 249.81 424.06 249.25 421.76 249.25" style="fill: #b8af82"/>
                  <polygon id="_0.1.2.0.0.0.0.24" data-name=" 0.1.2.0.0.0.0.24" points="423.5 250.99 423.5 249.81 424.06 249.25 424.06 251.55 423.5 250.99" style="fill: #80795b"/>
                  <polygon id="_0.1.2.0.0.0.0.25" data-name=" 0.1.2.0.0.0.0.25" points="422.32 250.99 423.5 250.99 424.06 251.55 421.76 251.55 422.32 250.99" style="fill: #5e5b43"/>
                  <polygon id="_0.1.2.0.0.0.0.26" data-name=" 0.1.2.0.0.0.0.26" points="421.76 249.25 422.32 249.81 422.32 250.99 421.76 251.55 421.76 249.25" style="fill: #9a916c"/>
                  <g id="_0.1.2.0.0.0.0.27" data-name=" 0.1.2.0.0.0.0.27">
                    <rect id="_0.1.2.0.0.0.0.27.0" data-name=" 0.1.2.0.0.0.0.27.0" x="415.12" y="249.81" width="1.19" height="1.18" style="fill: #8c8663"/>
                  </g>
                  <polygon id="_0.1.2.0.0.0.0.28" data-name=" 0.1.2.0.0.0.0.28" points="414.57 249.25 415.12 249.81 416.3 249.81 416.86 249.25 414.57 249.25" style="fill: #b8af82"/>
                  <polygon id="_0.1.2.0.0.0.0.29" data-name=" 0.1.2.0.0.0.0.29" points="416.3 250.99 416.3 249.81 416.86 249.25 416.86 251.55 416.3 250.99" style="fill: #80795b"/>
                  <polygon id="_0.1.2.0.0.0.0.30" data-name=" 0.1.2.0.0.0.0.30" points="415.12 250.99 416.3 250.99 416.86 251.55 414.57 251.55 415.12 250.99" style="fill: #5e5b43"/>
                  <polygon id="_0.1.2.0.0.0.0.31" data-name=" 0.1.2.0.0.0.0.31" points="414.57 249.25 415.12 249.81 415.12 250.99 414.57 251.55 414.57 249.25" style="fill: #9a916c"/>
                  <g id="_0.1.2.0.0.0.0.32" data-name=" 0.1.2.0.0.0.0.32">
                    <rect id="_0.1.2.0.0.0.0.32.0" data-name=" 0.1.2.0.0.0.0.32.0" x="422.32" y="257.01" width="1.18" height="1.18" style="fill: #8c8663"/>
                  </g>
                  <polygon id="_0.1.2.0.0.0.0.33" data-name=" 0.1.2.0.0.0.0.33" points="421.76 256.45 422.32 257.01 423.5 257.01 424.06 256.45 421.76 256.45" style="fill: #b8af82"/>
                  <polygon id="_0.1.2.0.0.0.0.34" data-name=" 0.1.2.0.0.0.0.34" points="423.5 258.19 423.5 257.01 424.06 256.45 424.06 258.75 423.5 258.19" style="fill: #80795b"/>
                  <polygon id="_0.1.2.0.0.0.0.35" data-name=" 0.1.2.0.0.0.0.35" points="422.32 258.19 423.5 258.19 424.06 258.75 421.76 258.75 422.32 258.19" style="fill: #5e5b43"/>
                  <polygon id="_0.1.2.0.0.0.0.36" data-name=" 0.1.2.0.0.0.0.36" points="421.76 256.45 422.32 257.01 422.32 258.19 421.76 258.75 421.76 256.45" style="fill: #9a916c"/>
                  <g id="_0.1.2.0.0.0.0.37" data-name=" 0.1.2.0.0.0.0.37">
                    <rect id="_0.1.2.0.0.0.0.37.0" data-name=" 0.1.2.0.0.0.0.37.0" x="415.12" y="257" width="1.18" height="1.19" style="fill: #8c8663"/>
                  </g>
                  <polygon id="_0.1.2.0.0.0.0.38" data-name=" 0.1.2.0.0.0.0.38" points="414.57 256.45 415.12 257.01 416.3 257.01 416.86 256.45 414.57 256.45" style="fill: #b8af82"/>
                  <polygon id="_0.1.2.0.0.0.0.39" data-name=" 0.1.2.0.0.0.0.39" points="416.3 258.19 416.3 257.01 416.86 256.45 416.86 258.75 416.3 258.19" style="fill: #80795b"/>
                  <polygon id="_0.1.2.0.0.0.0.40" data-name=" 0.1.2.0.0.0.0.40" points="415.12 258.19 416.3 258.19 416.86 258.75 414.57 258.75 415.12 258.19" style="fill: #5e5b43"/>
                  <polygon id="_0.1.2.0.0.0.0.41" data-name=" 0.1.2.0.0.0.0.41" points="414.57 256.45 415.12 257.01 415.12 258.19 414.57 258.75 414.57 256.45" style="fill: #9a916c"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.3" data-name=" 0.1.3">
          <g id="_2x03-2" data-name=" 2x03-2">
            <g id="_0.1.3.0.0" data-name=" 0.1.3.0.0">
              <g id="_0.1.3.0.0.0" data-name=" 0.1.3.0.0.0">
                <g id="_0.1.3.0.0.0.0" data-name=" 0.1.3.0.0.0.0">
                  <polygon id="_0.1.3.0.0.0.0.0" data-name=" 0.1.3.0.0.0.0.0" points="276.5 193.16 276.5 197.09 276.5 200.43 276.5 204.36 278.01 205.88 281.94 205.88 283.45 204.36 283.45 200.43 283.45 197.09 283.45 193.16 281.94 191.65 278.01 191.65 276.5 193.16" style="fill: #404040"/>
                  <polygon id="_0.1.3.0.0.0.0.1" data-name=" 0.1.3.0.0.0.0.1" points="283.68 193.16 283.68 197.09 283.68 200.43 283.68 204.36 285.19 205.88 289.12 205.88 290.63 204.36 290.63 200.43 290.63 197.09 290.63 193.16 289.12 191.65 285.19 191.65 283.68 193.16" style="fill: #404040"/>
                  <polygon id="_0.1.3.0.0.0.0.2" data-name=" 0.1.3.0.0.0.0.2" points="290.86 193.16 290.86 197.09 290.86 200.43 290.86 204.36 292.37 205.88 296.3 205.88 297.81 204.36 297.81 200.43 297.81 197.09 297.81 193.16 296.3 191.65 292.37 191.65 290.86 193.16" style="fill: #404040"/>
                  <polygon id="_0.1.3.0.0.0.0.3" data-name=" 0.1.3.0.0.0.0.3" points="276.5 193.16 276.5 197.09 276.5 200.43 276.5 204.36 278.01 205.88 281.94 205.88 283.45 204.36 283.45 200.43 283.45 197.09 283.45 193.16 281.94 191.65 278.01 191.65 276.5 193.16" style="fill: #404040"/>
                  <polygon id="_0.1.3.0.0.0.0.4" data-name=" 0.1.3.0.0.0.0.4" points="283.68 193.16 283.68 197.09 283.68 200.43 283.68 204.36 285.19 205.88 289.12 205.88 290.63 204.36 290.63 200.43 290.63 197.09 290.63 193.16 289.12 191.65 285.19 191.65 283.68 193.16" style="fill: #404040"/>
                  <polygon id="_0.1.3.0.0.0.0.5" data-name=" 0.1.3.0.0.0.0.5" points="290.86 193.16 290.86 197.09 290.86 200.43 290.86 204.36 292.37 205.88 296.3 205.88 297.81 204.36 297.81 200.43 297.81 197.09 297.81 193.16 296.3 191.65 292.37 191.65 290.86 193.16" style="fill: #404040"/>
                  <rect id="_0.1.3.0.0.0.0.6" data-name=" 0.1.3.0.0.0.0.6" x="293.05" y="201.17" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  <rect id="_0.1.3.0.0.0.0.7" data-name=" 0.1.3.0.0.0.0.7" x="293.05" y="193.97" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  <rect id="_0.1.3.0.0.0.0.8" data-name=" 0.1.3.0.0.0.0.8" x="285.85" y="201.17" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  <rect id="_0.1.3.0.0.0.0.9" data-name=" 0.1.3.0.0.0.0.9" x="285.85" y="193.97" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  <rect id="_0.1.3.0.0.0.0.10" data-name=" 0.1.3.0.0.0.0.10" x="278.65" y="201.17" width="2.3" height="2.3" style="fill: #8d8c8c"/>
                  <rect id="_0.1.3.0.0.0.0.11" data-name=" 0.1.3.0.0.0.0.11" x="278.65" y="193.97" width="2.3" height="2.3" style="fill: #8d8455"/>
                  <rect id="_0.1.3.0.0.0.0.12" data-name=" 0.1.3.0.0.0.0.12" x="279.21" y="194.52" width="1.18" height="1.18" style="fill: #8c8663"/>
                  <polygon id="_0.1.3.0.0.0.0.13" data-name=" 0.1.3.0.0.0.0.13" points="278.65 196.27 279.21 195.71 279.21 194.53 278.65 193.97 278.65 196.27" style="fill: #b8af82"/>
                  <polygon id="_0.1.3.0.0.0.0.14" data-name=" 0.1.3.0.0.0.0.14" points="280.39 194.53 279.21 194.53 278.65 193.97 280.95 193.97 280.39 194.53" style="fill: #80795b"/>
                  <polygon id="_0.1.3.0.0.0.0.15" data-name=" 0.1.3.0.0.0.0.15" points="280.39 195.71 280.39 194.53 280.95 193.97 280.95 196.27 280.39 195.71" style="fill: #5e5b43"/>
                  <polygon id="_0.1.3.0.0.0.0.16" data-name=" 0.1.3.0.0.0.0.16" points="278.65 196.27 279.21 195.71 280.39 195.71 280.95 196.27 278.65 196.27" style="fill: #9a916c"/>
                  <rect id="_0.1.3.0.0.0.0.17" data-name=" 0.1.3.0.0.0.0.17" x="279.21" y="201.73" width="1.18" height="1.18" style="fill: #8c8663"/>
                  <polygon id="_0.1.3.0.0.0.0.18" data-name=" 0.1.3.0.0.0.0.18" points="278.65 203.47 279.21 202.91 279.21 201.73 278.65 201.17 278.65 203.47" style="fill: #b8af82"/>
                  <polygon id="_0.1.3.0.0.0.0.19" data-name=" 0.1.3.0.0.0.0.19" points="280.39 201.73 279.21 201.73 278.65 201.17 280.95 201.17 280.39 201.73" style="fill: #80795b"/>
                  <polygon id="_0.1.3.0.0.0.0.20" data-name=" 0.1.3.0.0.0.0.20" points="280.39 202.91 280.39 201.73 280.95 201.17 280.95 203.47 280.39 202.91" style="fill: #5e5b43"/>
                  <polygon id="_0.1.3.0.0.0.0.21" data-name=" 0.1.3.0.0.0.0.21" points="278.65 203.47 279.21 202.91 280.39 202.91 280.95 203.47 278.65 203.47" style="fill: #9a916c"/>
                  <rect id="_0.1.3.0.0.0.0.22" data-name=" 0.1.3.0.0.0.0.22" x="286.41" y="194.52" width="1.18" height="1.18" style="fill: #8c8663"/>
                  <polygon id="_0.1.3.0.0.0.0.23" data-name=" 0.1.3.0.0.0.0.23" points="285.85 196.27 286.41 195.71 286.41 194.53 285.85 193.97 285.85 196.27" style="fill: #b8af82"/>
                  <polygon id="_0.1.3.0.0.0.0.24" data-name=" 0.1.3.0.0.0.0.24" points="287.59 194.53 286.41 194.53 285.85 193.97 288.15 193.97 287.59 194.53" style="fill: #80795b"/>
                  <polygon id="_0.1.3.0.0.0.0.25" data-name=" 0.1.3.0.0.0.0.25" points="287.59 195.71 287.59 194.53 288.15 193.97 288.15 196.27 287.59 195.71" style="fill: #5e5b43"/>
                  <polygon id="_0.1.3.0.0.0.0.26" data-name=" 0.1.3.0.0.0.0.26" points="285.85 196.27 286.41 195.71 287.59 195.71 288.15 196.27 285.85 196.27" style="fill: #9a916c"/>
                  <rect id="_0.1.3.0.0.0.0.27" data-name=" 0.1.3.0.0.0.0.27" x="286.41" y="201.73" width="1.18" height="1.18" style="fill: #8c8663"/>
                  <polygon id="_0.1.3.0.0.0.0.28" data-name=" 0.1.3.0.0.0.0.28" points="285.85 203.47 286.41 202.91 286.41 201.73 285.85 201.17 285.85 203.47" style="fill: #b8af82"/>
                  <polygon id="_0.1.3.0.0.0.0.29" data-name=" 0.1.3.0.0.0.0.29" points="287.59 201.73 286.41 201.73 285.85 201.17 288.15 201.17 287.59 201.73" style="fill: #80795b"/>
                  <polygon id="_0.1.3.0.0.0.0.30" data-name=" 0.1.3.0.0.0.0.30" points="287.59 202.91 287.59 201.73 288.15 201.17 288.15 203.47 287.59 202.91" style="fill: #5e5b43"/>
                  <polygon id="_0.1.3.0.0.0.0.31" data-name=" 0.1.3.0.0.0.0.31" points="285.85 203.47 286.41 202.91 287.59 202.91 288.15 203.47 285.85 203.47" style="fill: #9a916c"/>
                  <rect id="_0.1.3.0.0.0.0.32" data-name=" 0.1.3.0.0.0.0.32" x="293.61" y="194.52" width="1.18" height="1.18" style="fill: #8c8663"/>
                  <polygon id="_0.1.3.0.0.0.0.33" data-name=" 0.1.3.0.0.0.0.33" points="293.05 196.27 293.61 195.71 293.61 194.53 293.05 193.97 293.05 196.27" style="fill: #b8af82"/>
                  <polygon id="_0.1.3.0.0.0.0.34" data-name=" 0.1.3.0.0.0.0.34" points="294.79 194.53 293.61 194.53 293.05 193.97 295.35 193.97 294.79 194.53" style="fill: #80795b"/>
                  <polygon id="_0.1.3.0.0.0.0.35" data-name=" 0.1.3.0.0.0.0.35" points="294.79 195.71 294.79 194.53 295.35 193.97 295.35 196.27 294.79 195.71" style="fill: #5e5b43"/>
                  <polygon id="_0.1.3.0.0.0.0.36" data-name=" 0.1.3.0.0.0.0.36" points="293.05 196.27 293.61 195.71 294.79 195.71 295.35 196.27 293.05 196.27" style="fill: #9a916c"/>
                  <rect id="_0.1.3.0.0.0.0.37" data-name=" 0.1.3.0.0.0.0.37" x="293.61" y="201.73" width="1.18" height="1.18" style="fill: #8c8663"/>
                  <polygon id="_0.1.3.0.0.0.0.38" data-name=" 0.1.3.0.0.0.0.38" points="293.05 203.47 293.61 202.91 293.61 201.73 293.05 201.17 293.05 203.47" style="fill: #b8af82"/>
                  <polygon id="_0.1.3.0.0.0.0.39" data-name=" 0.1.3.0.0.0.0.39" points="294.79 201.73 293.61 201.73 293.05 201.17 295.35 201.17 294.79 201.73" style="fill: #80795b"/>
                  <polygon id="_0.1.3.0.0.0.0.40" data-name=" 0.1.3.0.0.0.0.40" points="294.79 202.91 294.79 201.73 295.35 201.17 295.35 203.47 294.79 202.91" style="fill: #5e5b43"/>
                  <polygon id="_0.1.3.0.0.0.0.41" data-name=" 0.1.3.0.0.0.0.41" points="293.05 203.47 293.61 202.91 294.79 202.91 295.35 203.47 293.05 203.47" style="fill: #9a916c"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.4" data-name=" 0.1.4">
          <g id="_1x08" data-name=" 1x08">
            <g id="_0.1.4.0.0" data-name=" 0.1.4.0.0">
              <g id="_0.1.4.0.0.0" data-name=" 0.1.4.0.0.0">
                <rect id="_0.1.4.0.0.0.0" data-name=" 0.1.4.0.0.0.0" x="361.31" y="182.2" width="57.6" height="7.2" style="fill: #404040"/>
                <rect id="ARDUINO_PIN_7" x="363.52" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.2" data-name=" 0.1.4.0.0.0.2" points="362.5 183.39 363.52 184.41 366.3 184.41 367.33 183.39 362.5 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.3" data-name=" 0.1.4.0.0.0.3" points="367.33 183.39 366.3 184.41 366.3 187.19 367.33 188.22 367.33 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.4" data-name=" 0.1.4.0.0.0.4" points="367.33 188.22 366.3 187.19 363.52 187.19 362.5 188.22 367.33 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.5" data-name=" 0.1.4.0.0.0.5" points="362.5 188.22 363.52 187.19 363.52 184.41 362.5 183.39 362.5 188.22" style="fill: #373737"/>
                <rect id="ARDUINO_PIN_6" x="370.72" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.7" data-name=" 0.1.4.0.0.0.7" points="369.7 183.39 370.72 184.41 373.5 184.41 374.53 183.39 369.7 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.8" data-name=" 0.1.4.0.0.0.8" points="374.53 183.39 373.5 184.41 373.5 187.19 374.53 188.22 374.53 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.9" data-name=" 0.1.4.0.0.0.9" points="374.53 188.22 373.5 187.19 370.72 187.19 369.7 188.22 374.53 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.10" data-name=" 0.1.4.0.0.0.10" points="369.69 188.22 370.72 187.19 370.72 184.41 369.69 183.39 369.69 188.22" style="fill: #373737"/>
                <rect id="ARDUINO_PIN_5" x="377.92" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.12" data-name=" 0.1.4.0.0.0.12" points="376.9 183.39 377.92 184.41 380.71 184.41 381.73 183.39 376.9 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.13" data-name=" 0.1.4.0.0.0.13" points="381.73 183.39 380.71 184.41 380.71 187.19 381.73 188.22 381.73 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.14" data-name=" 0.1.4.0.0.0.14" points="381.73 188.22 380.7 187.19 377.92 187.19 376.9 188.22 381.73 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.15" data-name=" 0.1.4.0.0.0.15" points="376.9 188.22 377.92 187.19 377.92 184.41 376.9 183.39 376.9 188.22" style="fill: #373737"/>
                <rect id="ARDUINO_PIN_4" x="385.12" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.17" data-name=" 0.1.4.0.0.0.17" points="384.1 183.39 385.12 184.41 387.91 184.41 388.93 183.39 384.1 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.18" data-name=" 0.1.4.0.0.0.18" points="388.93 183.39 387.91 184.41 387.91 187.19 388.93 188.22 388.93 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.19" data-name=" 0.1.4.0.0.0.19" points="388.93 188.22 387.9 187.19 385.12 187.19 384.1 188.22 388.93 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.20" data-name=" 0.1.4.0.0.0.20" points="384.09 188.22 385.12 187.19 385.12 184.41 384.09 183.39 384.09 188.22" style="fill: #373737"/>
                <rect id="ARDUINO_PIN_3" x="392.32" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.22" data-name=" 0.1.4.0.0.0.22" points="391.3 183.39 392.32 184.41 395.1 184.41 396.13 183.39 391.3 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.23" data-name=" 0.1.4.0.0.0.23" points="396.13 183.39 395.1 184.41 395.1 187.19 396.13 188.22 396.13 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.24" data-name=" 0.1.4.0.0.0.24" points="396.13 188.22 395.1 187.19 392.32 187.19 391.3 188.22 396.13 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.25" data-name=" 0.1.4.0.0.0.25" points="391.3 188.22 392.32 187.19 392.32 184.41 391.3 183.39 391.3 188.22" style="fill: #373737"/>
                <rect id="ARDUINO_PIN_2" x="399.52" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.27" data-name=" 0.1.4.0.0.0.27" points="398.5 183.39 399.52 184.41 402.3 184.41 403.33 183.39 398.5 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.28" data-name=" 0.1.4.0.0.0.28" points="403.33 183.39 402.3 184.41 402.3 187.19 403.33 188.22 403.33 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.29" data-name=" 0.1.4.0.0.0.29" points="403.33 188.22 402.3 187.19 399.52 187.19 398.5 188.22 403.33 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.30" data-name=" 0.1.4.0.0.0.30" points="398.5 188.22 399.52 187.19 399.52 184.41 398.5 183.39 398.5 188.22" style="fill: #373737"/>
                <rect id="ARDUINO_PIN_1" x="406.72" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.32" data-name=" 0.1.4.0.0.0.32" points="405.7 183.39 406.72 184.41 409.5 184.41 410.53 183.39 405.7 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.33" data-name=" 0.1.4.0.0.0.33" points="410.53 183.39 409.5 184.41 409.5 187.19 410.53 188.22 410.53 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.34" data-name=" 0.1.4.0.0.0.34" points="410.53 188.22 409.5 187.19 406.72 187.19 405.7 188.22 410.53 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.35" data-name=" 0.1.4.0.0.0.35" points="405.69 188.22 406.72 187.19 406.72 184.41 405.69 183.39 405.69 188.22" style="fill: #373737"/>
                <rect id="ARDUINO_PIN_0" x="413.92" y="184.41" width="2.78" height="2.78"/>
                <polygon id="_0.1.4.0.0.0.37" data-name=" 0.1.4.0.0.0.37" points="412.9 183.39 413.92 184.41 416.71 184.41 417.73 183.39 412.9 183.39" style="fill: #2a2a29"/>
                <polygon id="_0.1.4.0.0.0.38" data-name=" 0.1.4.0.0.0.38" points="417.73 183.39 416.71 184.41 416.71 187.19 417.73 188.22 417.73 183.39" style="fill: #474747"/>
                <polygon id="_0.1.4.0.0.0.39" data-name=" 0.1.4.0.0.0.39" points="417.73 188.22 416.7 187.19 413.92 187.19 412.9 188.22 417.73 188.22" style="fill: #595959"/>
                <polygon id="_0.1.4.0.0.0.40" data-name=" 0.1.4.0.0.0.40" points="412.9 188.22 413.92 187.19 413.92 184.41 412.9 183.39 412.9 188.22" style="fill: #373737"/>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.5" data-name=" 0.1.5">
          <g id="chip-led0805">
            <g id="_0.1.5.0.0" data-name=" 0.1.5.0.0">
              <g id="_0.1.5.0.0.0" data-name=" 0.1.5.0.0.0">
                <g id="_0.1.5.0.0.0.0" data-name=" 0.1.5.0.0.0.0">
                  <g id="led-0603">
                    <line id="_0.1.5.0.0.0.0.0.0" data-name=" 0.1.5.0.0.0.0.0.0" x1="310.5" y1="214.67" x2="317.73" y2="214.67" style="fill: none"/>
                    <g id="_0.1.5.0.0.0.0.0.1" data-name=" 0.1.5.0.0.0.0.0.1">
                      <rect id="BUILT_IN_LED" data-name="BUILT IN LED" x="310.49" y="210.84" width="7.35" height="3.83" style="fill: #f2f2f2"/>
                    </g>
                    <path id="_0.1.5.0.0.0.0.0.2" data-name=" 0.1.5.0.0.0.0.0.2" d="M333.27,318.47s.64-.47.86-.43.54-.14.68,0v.43Z" transform="translate(-18.02 -103.8)" style="fill: #22b573;fill-opacity: 0.699999988079071"/>
                    <g id="_0.1.5.0.0.0.0.0.3" data-name=" 0.1.5.0.0.0.0.0.3">
                      <g id="_0.1.5.0.0.0.0.0.3.0" data-name=" 0.1.5.0.0.0.0.0.3.0">
                        <rect id="_0.1.5.0.0.0.0.0.3.0.0" data-name=" 0.1.5.0.0.0.0.0.3.0.0" x="313.67" y="212.25" width="0.85" height="0.96" style="fill: #fff"/>
                      </g>
                      <g id="_0.1.5.0.0.0.0.0.3.1" data-name=" 0.1.5.0.0.0.0.0.3.1">
                        <rect id="_0.1.5.0.0.0.0.0.3.1.0" data-name=" 0.1.5.0.0.0.0.0.3.1.0" x="313.67" y="213.18" width="0.85" height="0.05" style="fill: #b3b3b3"/>
                      </g>
                    </g>
                    <g id="_0.1.5.0.0.0.0.0.4" data-name=" 0.1.5.0.0.0.0.0.4">
                      <polygon id="_0.1.5.0.0.0.0.0.4.0" data-name=" 0.1.5.0.0.0.0.0.4.0" points="315.82 214.25 316.79 214.35 316.79 213.62 315.82 213.72 315.82 214.25" style="fill: #d1c690"/>
                      <g id="_0.1.5.0.0.0.0.0.4.1" data-name=" 0.1.5.0.0.0.0.0.4.1">
                        <path id="_0.1.5.0.0.0.0.0.4.1.0" data-name=" 0.1.5.0.0.0.0.0.4.1.0" d="M333.93,317.85h0a2.43,2.43,0,0,1-.6-.17c-.21-.08-.56-.78-.83-.69m-.06,0a.06.06,0,0,1,0-.08c.3-.1.67.61.89.7a1.85,1.85,0,0,0,.57.15s.06,0,0,.07l0,0Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <polygon id="_0.1.5.0.0.0.0.0.4.2" data-name=" 0.1.5.0.0.0.0.0.4.2" points="312.4 211.36 311.44 211.26 311.44 211.99 312.4 211.89 312.4 211.36" style="fill: #d1c690"/>
                      <g id="_0.1.5.0.0.0.0.0.4.3" data-name=" 0.1.5.0.0.0.0.0.4.3">
                        <path id="_0.1.5.0.0.0.0.0.4.3.0" data-name=" 0.1.5.0.0.0.0.0.4.3.0" d="M332.08,316.68a.06.06,0,0,1-.06-.05,2.63,2.63,0,0,0-1.88-1.15.06.06,0,0,1-.06-.06.07.07,0,0,1,.06-.07h0a2.56,2.56,0,0,1,2,1.25.06.06,0,0,1,0,.08Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <path id="_0.1.5.0.0.0.0.0.4.4" data-name=" 0.1.5.0.0.0.0.0.4.4" d="M332.55,316.69s-.36,0-.38.32h.38Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.5.0.0.0.0.0.4.5" data-name=" 0.1.5.0.0.0.0.0.4.5" d="M332.11,316.39s.16.31.06.35-.18.06-.24,0S332.11,316.39,332.11,316.39Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.5.0.0.0.0.0.4.6" data-name=" 0.1.5.0.0.0.0.0.4.6" d="M332.47,317c.27-.08.62.62.83.7a2,2,0,0,0,.6.16v-.06a2,2,0,0,1-.6-.16c-.21-.08-.56-.78-.83-.7Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <polygon id="_0.1.5.0.0.0.0.0.4.7" data-name=" 0.1.5.0.0.0.0.0.4.7" points="312.4 211.94 311.44 212.04 311.44 211.99 312.4 211.89 312.4 211.94" style="fill: #9d956c"/>
                      <path id="_0.1.5.0.0.0.0.0.4.8" data-name=" 0.1.5.0.0.0.0.0.4.8" d="M332,316.69a2.39,2.39,0,0,0-1.88-1.15v-.06a2.33,2.33,0,0,1,1.89,1.15Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.5.0.0.0.0.0.4.9" data-name=" 0.1.5.0.0.0.0.0.4.9" d="M332.17,317.06h.38V317h-.38Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.5.0.0.0.0.0.4.10" data-name=" 0.1.5.0.0.0.0.0.4.10" d="M331.93,316.75c.06.08.13.07.23,0v-.06c-.11.05-.18.05-.24,0v.06Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                    </g>
                    <g id="_0.1.5.0.0.0.0.0.5" data-name=" 0.1.5.0.0.0.0.0.5">
                      <rect id="_0.1.5.0.0.0.0.0.5.0" data-name=" 0.1.5.0.0.0.0.0.5.0" x="311.97" y="210.84" width="4.22" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.5.0.0.0.0.0.6" data-name=" 0.1.5.0.0.0.0.0.6" d="M329.48,314.64v3.83h5.32v-3.83Z" transform="translate(-18.02 -103.8)" style="fill: #f2f2f2;opacity: 0.5;isolation: isolate"/>
                    <path id="_0.1.5.0.0.0.0.0.7" data-name=" 0.1.5.0.0.0.0.0.7" d="M329.53,315.29V315c0-.16,0-.28.1-.28h4.85c.17,0,.18.07,0,.07h-4.35c-.45,0-.52.1-.52.2v.27C329.61,315.46,329.53,315.46,329.53,315.29Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.550000011920929;isolation: isolate"/>
                    <path id="_0.1.5.0.0.0.0.0.8" data-name=" 0.1.5.0.0.0.0.0.8" d="M334.65,318.25c0,.06,0,.13-.09.13h-4.82c-.17,0-.18-.06,0-.06h3.59C333.93,318.32,334.65,318.25,334.65,318.25Z" transform="translate(-18.02 -103.8)" style="opacity: 0.029999999329448;isolation: isolate"/>
                    <path id="_0.1.5.0.0.0.0.0.9" data-name=" 0.1.5.0.0.0.0.0.9" d="M328.52,318.47h.77V318a.29.29,0,0,1,.19-.27v-3.05h-1v3.84" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.5.0.0.0.0.0.10" data-name=" 0.1.5.0.0.0.0.0.10">
                      <rect id="_0.1.5.0.0.0.0.0.10.0" data-name=" 0.1.5.0.0.0.0.0.10.0" x="310.45" y="210.84" width="1.01" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.5.0.0.0.0.0.11" data-name=" 0.1.5.0.0.0.0.0.11" d="M335.87,318.47v-3.83h-1.08v3.46a.33.33,0,0,1,.2.27v.1h.82" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.5.0.0.0.0.0.12" data-name=" 0.1.5.0.0.0.0.0.12">
                      <rect id="_0.1.5.0.0.0.0.0.12.0" data-name=" 0.1.5.0.0.0.0.0.12.0" x="316.77" y="210.84" width="1.07" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.6" data-name=" 0.1.6">
          <g id="chip-led0805-2">
            <g id="_0.1.6.0.0" data-name=" 0.1.6.0.0">
              <g id="_0.1.6.0.0.0" data-name=" 0.1.6.0.0.0">
                <g id="_0.1.6.0.0.0.0" data-name=" 0.1.6.0.0.0.0">
                  <g id="led-0603-2">
                    <line id="_0.1.6.0.0.0.0.0.0" data-name=" 0.1.6.0.0.0.0.0.0" x1="399.81" y1="228.15" x2="407.04" y2="228.15" style="fill: none"/>
                    <g id="_0.1.6.0.0.0.0.0.1" data-name=" 0.1.6.0.0.0.0.0.1">
                      <rect id="POWER_LED" data-name="POWER LED" x="399.8" y="224.31" width="7.35" height="3.83" style="fill: #f2f2f2"/>
                    </g>
                    <path id="_0.1.6.0.0.0.0.0.2" data-name=" 0.1.6.0.0.0.0.0.2" d="M422.58,331.94s.64-.47.86-.43.54-.14.68,0v.43Z" transform="translate(-18.02 -103.8)" style="fill: #22b573;fill-opacity: 0.699999988079071"/>
                    <g id="_0.1.6.0.0.0.0.0.3" data-name=" 0.1.6.0.0.0.0.0.3">
                      <g id="_0.1.6.0.0.0.0.0.3.0" data-name=" 0.1.6.0.0.0.0.0.3.0">
                        <rect id="_0.1.6.0.0.0.0.0.3.0.0" data-name=" 0.1.6.0.0.0.0.0.3.0.0" x="402.98" y="225.72" width="0.85" height="0.96" style="fill: #fff"/>
                      </g>
                      <g id="_0.1.6.0.0.0.0.0.3.1" data-name=" 0.1.6.0.0.0.0.0.3.1">
                        <rect id="_0.1.6.0.0.0.0.0.3.1.0" data-name=" 0.1.6.0.0.0.0.0.3.1.0" x="402.98" y="226.66" width="0.85" height="0.05" style="fill: #b3b3b3"/>
                      </g>
                    </g>
                    <g id="_0.1.6.0.0.0.0.0.4" data-name=" 0.1.6.0.0.0.0.0.4">
                      <polygon id="_0.1.6.0.0.0.0.0.4.0" data-name=" 0.1.6.0.0.0.0.0.4.0" points="405.13 227.72 406.1 227.82 406.1 227.09 405.13 227.2 405.13 227.72" style="fill: #d1c690"/>
                      <g id="_0.1.6.0.0.0.0.0.4.1" data-name=" 0.1.6.0.0.0.0.0.4.1">
                        <path id="_0.1.6.0.0.0.0.0.4.1.0" data-name=" 0.1.6.0.0.0.0.0.4.1.0" d="M423.22,331.32h0a3.13,3.13,0,0,1-.6-.16c-.21-.08-.56-.79-.83-.7m-.06,0a.06.06,0,0,1,0-.08c.3-.1.67.62.89.7a1.85,1.85,0,0,0,.57.15s.06,0,0,.07l0,0Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <polygon id="_0.1.6.0.0.0.0.0.4.2" data-name=" 0.1.6.0.0.0.0.0.4.2" points="401.71 224.83 400.75 224.73 400.75 225.46 401.71 225.36 401.71 224.83" style="fill: #d1c690"/>
                      <g id="_0.1.6.0.0.0.0.0.4.3" data-name=" 0.1.6.0.0.0.0.0.4.3">
                        <path id="_0.1.6.0.0.0.0.0.4.3.0" data-name=" 0.1.6.0.0.0.0.0.4.3.0" d="M421.39,330.15a.06.06,0,0,1-.06,0,2.63,2.63,0,0,0-1.88-1.15.06.06,0,0,1-.06-.06s0-.07.06-.07h0a2.56,2.56,0,0,1,2,1.25.06.06,0,0,1,0,.08Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <path id="_0.1.6.0.0.0.0.0.4.4" data-name=" 0.1.6.0.0.0.0.0.4.4" d="M421.86,330.17s-.35,0-.38.31h.38Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.6.0.0.0.0.0.4.5" data-name=" 0.1.6.0.0.0.0.0.4.5" d="M421.43,329.85s.15.3.05.35a.21.21,0,0,1-.24,0C421.18,330.15,421.43,329.85,421.43,329.85Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.6.0.0.0.0.0.4.6" data-name=" 0.1.6.0.0.0.0.0.4.6" d="M421.78,330.51c.27-.08.62.62.83.7a2,2,0,0,0,.6.16v-.05a2.43,2.43,0,0,1-.6-.17c-.21-.08-.56-.78-.83-.69Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <polygon id="_0.1.6.0.0.0.0.0.4.7" data-name=" 0.1.6.0.0.0.0.0.4.7" points="401.71 225.41 400.75 225.51 400.75 225.46 401.71 225.36 401.71 225.41" style="fill: #9d956c"/>
                      <path id="_0.1.6.0.0.0.0.0.4.8" data-name=" 0.1.6.0.0.0.0.0.4.8" d="M421.33,330.16a2.45,2.45,0,0,0-1.88-1.15V329a2.38,2.38,0,0,1,1.89,1.15Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.6.0.0.0.0.0.4.9" data-name=" 0.1.6.0.0.0.0.0.4.9" d="M421.48,330.53h.38v0h-.38Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.6.0.0.0.0.0.4.10" data-name=" 0.1.6.0.0.0.0.0.4.10" d="M421.24,330.22c.06.08.13.08.23,0v-.06c-.11,0-.18,0-.24,0Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                    </g>
                    <g id="_0.1.6.0.0.0.0.0.5" data-name=" 0.1.6.0.0.0.0.0.5">
                      <rect id="_0.1.6.0.0.0.0.0.5.0" data-name=" 0.1.6.0.0.0.0.0.5.0" x="401.28" y="224.31" width="4.23" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.6.0.0.0.0.0.6" data-name=" 0.1.6.0.0.0.0.0.6" d="M418.79,328.11v3.83h5.31v-3.83Z" transform="translate(-18.02 -103.8)" style="fill: #f2f2f2;opacity: 0.5;isolation: isolate"/>
                    <path id="_0.1.6.0.0.0.0.0.7" data-name=" 0.1.6.0.0.0.0.0.7" d="M418.84,328.76v-.27c0-.15,0-.27.1-.27h4.85c.17,0,.18.06,0,.06h-4.36c-.46,0-.52.11-.52.2v.27C418.93,328.93,418.84,328.93,418.84,328.76Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.550000011920929;isolation: isolate"/>
                    <path id="_0.1.6.0.0.0.0.0.8" data-name=" 0.1.6.0.0.0.0.0.8" d="M423.93,331.72c0,.07,0,.14-.1.14H419c-.17,0-.18-.07,0-.07h3.59C423.24,331.79,423.93,331.72,423.93,331.72Z" transform="translate(-18.02 -103.8)" style="opacity: 0.029999999329448;isolation: isolate"/>
                    <path id="_0.1.6.0.0.0.0.0.9" data-name=" 0.1.6.0.0.0.0.0.9" d="M417.83,331.94h.77v-.55a.29.29,0,0,1,.19-.27v-3.05h-1v3.84" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.6.0.0.0.0.0.10" data-name=" 0.1.6.0.0.0.0.0.10">
                      <rect id="_0.1.6.0.0.0.0.0.10.0" data-name=" 0.1.6.0.0.0.0.0.10.0" x="399.76" y="224.31" width="1.01" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.6.0.0.0.0.0.11" data-name=" 0.1.6.0.0.0.0.0.11" d="M425.18,331.94v-3.83h-1.07v3.46a.32.32,0,0,1,.19.27v.1h.83" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.6.0.0.0.0.0.12" data-name=" 0.1.6.0.0.0.0.0.12">
                      <rect id="_0.1.6.0.0.0.0.0.12.0" data-name=" 0.1.6.0.0.0.0.0.12.0" x="406.08" y="224.31" width="1.07" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.7" data-name=" 0.1.7">
          <g id="panasonic_d" data-name="panasonic d">
            <g id="_0.1.7.0.0" data-name=" 0.1.7.0.0">
              <g id="_0.1.7.0.0.0" data-name=" 0.1.7.0.0.0">
                <g id="_0.1.7.0.0.0.0" data-name=" 0.1.7.0.0.0.0">
                  <g id="_0.1.7.0.0.0.0.0" data-name=" 0.1.7.0.0.0.0.0">
                    <rect id="_0.1.7.0.0.0.0.0.0" data-name=" 0.1.7.0.0.0.0.0.0" x="307.06" y="313.05" width="1.27" height="1.04" style="fill: #ccc"/>
                  </g>
                  <g id="_0.1.7.0.0.0.0.1" data-name=" 0.1.7.0.0.0.0.1">
                    <rect id="_0.1.7.0.0.0.0.1.0" data-name=" 0.1.7.0.0.0.0.1.0" x="307.06" y="293.66" width="1.27" height="1.04" style="fill: #ccc"/>
                  </g>
                  <g id="_0.1.7.0.0.0.0.2" data-name=" 0.1.7.0.0.0.0.2">
                    <rect id="_0.1.7.0.0.0.0.2.0" data-name=" 0.1.7.0.0.0.0.2.0" x="308.13" y="313.05" width="0.2" height="1.04" style="opacity: 0.100000001490116;isolation: isolate"/>
                  </g>
                  <g id="_0.1.7.0.0.0.0.3" data-name=" 0.1.7.0.0.0.0.3">
                    <rect id="_0.1.7.0.0.0.0.3.0" data-name=" 0.1.7.0.0.0.0.3.0" x="308.13" y="293.66" width="0.2" height="1.04" style="opacity: 0.100000001490116;isolation: isolate"/>
                  </g>
                  <g id="_0.1.7.0.0.0.0.4" data-name=" 0.1.7.0.0.0.0.4">
                    <rect id="_0.1.7.0.0.0.0.4.0" data-name=" 0.1.7.0.0.0.0.4.0" x="307.06" y="313.05" width="0.2" height="1.04" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <g id="_0.1.7.0.0.0.0.5" data-name=" 0.1.7.0.0.0.0.5">
                    <rect id="_0.1.7.0.0.0.0.5.0" data-name=" 0.1.7.0.0.0.0.5.0" x="307.06" y="293.66" width="0.2" height="1.04" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <path id="_0.1.7.0.0.0.0.6" data-name=" 0.1.7.0.0.0.0.6" d="M316.52,402.31v13.15a1.4,1.4,0,0,0,1.38,1.39h15.58a1.39,1.39,0,0,0,1.39-1.39h0V402.31l-3.81-3.81H320.33Z" transform="translate(-18.02 -103.8)" style="fill: #1a1a1a"/>
                  <circle id="_0.1.7.0.0.0.0.7" data-name=" 0.1.7.0.0.0.0.7" cx="307.67" cy="303.88" r="8.7" style="fill: #e6e6e6"/>
                  <path id="_0.1.7.0.0.0.0.8" data-name=" 0.1.7.0.0.0.0.8" d="M316.52,402.31v13.15a1.4,1.4,0,0,0,1.38,1.39h15.58a1.39,1.39,0,0,0,1.39-1.39h0V402.31l-3.81-3.81H320.33Z" transform="translate(-18.02 -103.8)" style="fill: #333"/>
                  <path id="_0.1.7.0.0.0.0.9" data-name=" 0.1.7.0.0.0.0.9" d="M330.87,398.5l3.82,3.81v13.15a1.4,1.4,0,0,1-1.39,1.39h.18a1.39,1.39,0,0,0,1.39-1.39h0V402.31l-3.81-3.81Z" transform="translate(-18.02 -103.8)"/>
                  <path id="_0.1.7.0.0.0.0.10" data-name=" 0.1.7.0.0.0.0.10" d="M318.09,416.85a1.4,1.4,0,0,1-1.39-1.39V402.31l3.81-3.82h-.18l-3.81,3.82v13.15a1.4,1.4,0,0,0,1.38,1.39Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.100000001490116;isolation: isolate"/>
                  <path id="_0.1.7.0.0.0.0.11" data-name=" 0.1.7.0.0.0.0.11" d="M334.52,407.67a8.71,8.71,0,1,1-8.72-8.7h0a8.68,8.68,0,0,1,8.7,8.66Z" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
                  <path id="_0.1.7.0.0.0.0.12" data-name=" 0.1.7.0.0.0.0.12" d="M325.69,416.39a8.69,8.69,0,0,0,7.09-3.67H318.61A8.66,8.66,0,0,0,325.69,416.39Z" transform="translate(-18.02 -103.8)"/>
                  <path id="_0.1.7.0.0.0.0.13" data-name=" 0.1.7.0.0.0.0.13" d="M325.93,399a8.71,8.71,0,0,0,0,17.42h-.25a8.71,8.71,0,0,1,0-17.41Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.300000011920929;isolation: isolate"/>
                  <path id="_0.1.7.0.0.0.0.14" data-name=" 0.1.7.0.0.0.0.14" d="M325.46,416.39a8.69,8.69,0,0,0,7.09-3.67h.23a8.69,8.69,0,0,1-7.09,3.67Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                  <path id="_0.1.7.0.0.0.0.15" data-name=" 0.1.7.0.0.0.0.15" d="M332.55,412.71A8.69,8.69,0,0,0,325.46,399h.23a8.69,8.69,0,0,1,7.09,13.74Z" transform="translate(-18.02 -103.8)" style="opacity: 0.200000002980232;isolation: isolate"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.8" data-name=" 0.1.8">
          <g id="panasonic_d-2" data-name="panasonic d-2">
            <g id="_0.1.8.0.0" data-name=" 0.1.8.0.0">
              <g id="_0.1.8.0.0.0" data-name=" 0.1.8.0.0.0">
                <g id="_0.1.8.0.0.0.0" data-name=" 0.1.8.0.0.0.0">
                  <g id="_0.1.8.0.0.0.0.0" data-name=" 0.1.8.0.0.0.0.0">
                    <rect id="_0.1.8.0.0.0.0.0.0" data-name=" 0.1.8.0.0.0.0.0.0" x="286.9" y="313.05" width="1.27" height="1.04" style="fill: #ccc"/>
                  </g>
                  <g id="_0.1.8.0.0.0.0.1" data-name=" 0.1.8.0.0.0.0.1">
                    <rect id="_0.1.8.0.0.0.0.1.0" data-name=" 0.1.8.0.0.0.0.1.0" x="286.9" y="293.66" width="1.27" height="1.04" style="fill: #ccc"/>
                  </g>
                  <g id="_0.1.8.0.0.0.0.2" data-name=" 0.1.8.0.0.0.0.2">
                    <rect id="_0.1.8.0.0.0.0.2.0" data-name=" 0.1.8.0.0.0.0.2.0" x="287.97" y="313.05" width="0.2" height="1.04" style="opacity: 0.100000001490116;isolation: isolate"/>
                  </g>
                  <g id="_0.1.8.0.0.0.0.3" data-name=" 0.1.8.0.0.0.0.3">
                    <rect id="_0.1.8.0.0.0.0.3.0" data-name=" 0.1.8.0.0.0.0.3.0" x="287.97" y="293.66" width="0.2" height="1.04" style="opacity: 0.100000001490116;isolation: isolate"/>
                  </g>
                  <g id="_0.1.8.0.0.0.0.4" data-name=" 0.1.8.0.0.0.0.4">
                    <rect id="_0.1.8.0.0.0.0.4.0" data-name=" 0.1.8.0.0.0.0.4.0" x="286.9" y="313.05" width="0.2" height="1.04" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <g id="_0.1.8.0.0.0.0.5" data-name=" 0.1.8.0.0.0.0.5">
                    <rect id="_0.1.8.0.0.0.0.5.0" data-name=" 0.1.8.0.0.0.0.5.0" x="286.9" y="293.66" width="0.2" height="1.04" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <path id="_0.1.8.0.0.0.0.6" data-name=" 0.1.8.0.0.0.0.6" d="M296.36,402.31v13.15a1.4,1.4,0,0,0,1.38,1.39h15.58a1.39,1.39,0,0,0,1.39-1.39h0V402.31l-3.78-3.81H300.17Z" transform="translate(-18.02 -103.8)" style="fill: #1a1a1a"/>
                  <circle id="_0.1.8.0.0.0.0.7" data-name=" 0.1.8.0.0.0.0.7" cx="287.51" cy="303.88" r="8.7" style="fill: #e6e6e6"/>
                  <path id="_0.1.8.0.0.0.0.8" data-name=" 0.1.8.0.0.0.0.8" d="M296.36,402.31v13.15a1.4,1.4,0,0,0,1.38,1.39h15.58a1.39,1.39,0,0,0,1.39-1.39h0V402.31l-3.78-3.81H300.17Z" transform="translate(-18.02 -103.8)" style="fill: #333"/>
                  <path id="_0.1.8.0.0.0.0.9" data-name=" 0.1.8.0.0.0.0.9" d="M310.71,398.5l3.82,3.81v13.16a1.4,1.4,0,0,1-1.39,1.38h.18a1.38,1.38,0,0,0,1.39-1.37h0V402.31l-3.78-3.81Z" transform="translate(-18.02 -103.8)"/>
                  <path id="_0.1.8.0.0.0.0.10" data-name=" 0.1.8.0.0.0.0.10" d="M297.93,416.85a1.4,1.4,0,0,1-1.39-1.39V402.31l3.81-3.81h-.18l-3.81,3.81v13.15a1.4,1.4,0,0,0,1.38,1.39Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.100000001490116;isolation: isolate"/>
                  <path id="_0.1.8.0.0.0.0.11" data-name=" 0.1.8.0.0.0.0.11" d="M314.36,407.67a8.71,8.71,0,1,1-8.72-8.7h0a8.68,8.68,0,0,1,8.7,8.66Z" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
                  <path id="_0.1.8.0.0.0.0.12" data-name=" 0.1.8.0.0.0.0.12" d="M305.53,416.39a8.69,8.69,0,0,0,7.09-3.67H298.45A8.66,8.66,0,0,0,305.53,416.39Z" transform="translate(-18.02 -103.8)"/>
                  <path id="_0.1.8.0.0.0.0.13" data-name=" 0.1.8.0.0.0.0.13" d="M305.78,399a8.71,8.71,0,0,0,0,17.41h-.25a8.71,8.71,0,0,1,0-17.41Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.300000011920929;isolation: isolate"/>
                  <path id="_0.1.8.0.0.0.0.14" data-name=" 0.1.8.0.0.0.0.14" d="M305.3,416.39a8.69,8.69,0,0,0,7.09-3.67h.23a8.69,8.69,0,0,1-7.09,3.67Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                  <path id="_0.1.8.0.0.0.0.15" data-name=" 0.1.8.0.0.0.0.15" d="M312.39,412.71A8.69,8.69,0,0,0,305.3,399h.23a8.69,8.69,0,0,1,7.09,13.74Z" transform="translate(-18.02 -103.8)" style="opacity: 0.200000002980232;isolation: isolate"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.9" data-name=" 0.1.9">
          <g id="_1x08-2" data-name=" 1x08-2">
            <rect id="_0.1.9.0.0" data-name=" 0.1.9.0.0" x="310.91" y="319" width="57.6" height="7.2" style="fill: #404040"/>
            <rect id="_0.1.9.0.1" data-name=" 0.1.9.0.1" x="313.12" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.2" data-name=" 0.1.9.0.2" points="312.1 320.18 313.12 321.21 315.9 321.21 316.93 320.18 312.1 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.3" data-name=" 0.1.9.0.3" points="316.93 320.18 315.9 321.21 315.9 323.99 316.93 325.02 316.93 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.4" data-name=" 0.1.9.0.4" points="316.93 325.02 315.9 323.99 313.12 323.99 312.1 325.02 316.93 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.5" data-name=" 0.1.9.0.5" points="312.1 325.02 313.12 323.99 313.12 321.21 312.1 320.18 312.1 325.02" style="fill: #373737"/>
            <rect id="_0.1.9.0.6" data-name=" 0.1.9.0.6" x="320.32" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.7" data-name=" 0.1.9.0.7" points="319.3 320.18 320.32 321.21 323.11 321.21 324.13 320.18 319.3 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.8" data-name=" 0.1.9.0.8" points="324.13 320.18 323.11 321.21 323.11 323.99 324.13 325.02 324.13 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.9" data-name=" 0.1.9.0.9" points="324.13 325.02 323.1 323.99 320.32 323.99 319.3 325.02 324.13 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.10" data-name=" 0.1.9.0.10" points="319.29 325.02 320.32 323.99 320.32 321.21 319.29 320.18 319.29 325.02" style="fill: #373737"/>
            <rect id="_0.1.9.0.11" data-name=" 0.1.9.0.11" x="327.52" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.12" data-name=" 0.1.9.0.12" points="326.5 320.18 327.52 321.21 330.3 321.21 331.33 320.18 326.5 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.13" data-name=" 0.1.9.0.13" points="331.33 320.18 330.3 321.21 330.3 323.99 331.33 325.02 331.33 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.14" data-name=" 0.1.9.0.14" points="331.33 325.02 330.3 323.99 327.52 323.99 326.5 325.02 331.33 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.15" data-name=" 0.1.9.0.15" points="326.49 325.02 327.52 323.99 327.52 321.21 326.49 320.18 326.49 325.02" style="fill: #373737"/>
            <rect id="_0.1.9.0.16" data-name=" 0.1.9.0.16" x="334.72" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.17" data-name=" 0.1.9.0.17" points="333.7 320.18 334.72 321.21 337.51 321.21 338.53 320.18 333.7 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.18" data-name=" 0.1.9.0.18" points="338.53 320.18 337.51 321.21 337.51 323.99 338.53 325.02 338.53 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.19" data-name=" 0.1.9.0.19" points="338.53 325.02 337.5 323.99 334.72 323.99 333.7 325.02 338.53 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.20" data-name=" 0.1.9.0.20" points="333.69 325.02 334.72 323.99 334.72 321.21 333.69 320.18 333.69 325.02" style="fill: #373737"/>
            <rect id="_0.1.9.0.21" data-name=" 0.1.9.0.21" x="341.92" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.22" data-name=" 0.1.9.0.22" points="340.9 320.18 341.92 321.21 344.7 321.21 345.73 320.18 340.9 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.23" data-name=" 0.1.9.0.23" points="345.73 320.18 344.7 321.21 344.7 323.99 345.73 325.02 345.73 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.24" data-name=" 0.1.9.0.24" points="345.73 325.02 344.7 323.99 341.92 323.99 340.9 325.02 345.73 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.25" data-name=" 0.1.9.0.25" points="340.89 325.02 341.92 323.99 341.92 321.21 340.89 320.18 340.89 325.02" style="fill: #373737"/>
            <rect id="_0.1.9.0.26" data-name=" 0.1.9.0.26" x="349.12" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.27" data-name=" 0.1.9.0.27" points="348.1 320.18 349.12 321.21 351.9 321.21 352.93 320.18 348.1 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.28" data-name=" 0.1.9.0.28" points="352.93 320.18 351.9 321.21 351.9 323.99 352.93 325.02 352.93 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.29" data-name=" 0.1.9.0.29" points="352.93 325.02 351.9 323.99 349.12 323.99 348.1 325.02 352.93 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.30" data-name=" 0.1.9.0.30" points="348.1 325.02 349.12 323.99 349.12 321.21 348.1 320.18 348.1 325.02" style="fill: #373737"/>
            <rect id="_0.1.9.0.31" data-name=" 0.1.9.0.31" x="356.32" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.32" data-name=" 0.1.9.0.32" points="355.3 320.18 356.32 321.21 359.1 321.21 360.13 320.18 355.3 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.33" data-name=" 0.1.9.0.33" points="360.13 320.18 359.1 321.21 359.1 323.99 360.13 325.02 360.13 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.34" data-name=" 0.1.9.0.34" points="360.13 325.02 359.1 323.99 356.32 323.99 355.3 325.02 360.13 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.35" data-name=" 0.1.9.0.35" points="355.29 325.02 356.32 323.99 356.32 321.21 355.29 320.18 355.29 325.02" style="fill: #373737"/>
            <rect id="_0.1.9.0.36" data-name=" 0.1.9.0.36" x="363.52" y="321.21" width="2.78" height="2.78"/>
            <polygon id="_0.1.9.0.37" data-name=" 0.1.9.0.37" points="362.5 320.18 363.52 321.21 366.3 321.21 367.33 320.18 362.5 320.18" style="fill: #2a2a29"/>
            <polygon id="_0.1.9.0.38" data-name=" 0.1.9.0.38" points="367.33 320.18 366.3 321.21 366.3 323.99 367.33 325.02 367.33 320.18" style="fill: #474747"/>
            <polygon id="_0.1.9.0.39" data-name=" 0.1.9.0.39" points="367.33 325.02 366.3 323.99 363.52 323.99 362.5 325.02 367.33 325.02" style="fill: #595959"/>
            <polygon id="_0.1.9.0.40" data-name=" 0.1.9.0.40" points="362.49 325.02 363.52 323.99 363.52 321.21 362.49 320.18 362.49 325.02" style="fill: #373737"/>
          </g>
        </g>
        <g id="_0.1.10" data-name=" 0.1.10">
          <g id="chip-led0805-3">
            <g id="_0.1.10.0.0" data-name=" 0.1.10.0.0">
              <g id="_0.1.10.0.0.0" data-name=" 0.1.10.0.0.0">
                <g id="_0.1.10.0.0.0.0" data-name=" 0.1.10.0.0.0.0">
                  <g id="led-0603-3">
                    <line id="_0.1.10.0.0.0.0.0.0" data-name=" 0.1.10.0.0.0.0.0.0" x1="317.74" y1="230.57" x2="310.5" y2="230.57" style="fill: none"/>
                    <g id="_0.1.10.0.0.0.0.0.1" data-name=" 0.1.10.0.0.0.0.0.1">
                      <rect id="RX_LED" data-name="RX LED" x="310.39" y="230.57" width="7.35" height="3.83" style="fill: #f2f2f2"/>
                    </g>
                    <path id="_0.1.10.0.0.0.0.0.2" data-name=" 0.1.10.0.0.0.0.0.2" d="M331,334.39s-.64.47-.87.43-.54.15-.67,0v-.42Z" transform="translate(-18.02 -103.8)" style="fill: #22b573;fill-opacity: 0.699999988079071"/>
                    <g id="_0.1.10.0.0.0.0.0.3" data-name=" 0.1.10.0.0.0.0.0.3">
                      <g id="_0.1.10.0.0.0.0.0.3.0" data-name=" 0.1.10.0.0.0.0.0.3.0">
                        <rect id="_0.1.10.0.0.0.0.0.3.0.0" data-name=" 0.1.10.0.0.0.0.0.3.0.0" x="313.7" y="232.04" width="0.85" height="0.96" style="fill: #fff"/>
                      </g>
                      <g id="_0.1.10.0.0.0.0.0.3.1" data-name=" 0.1.10.0.0.0.0.0.3.1">
                        <rect id="_0.1.10.0.0.0.0.0.3.1.0" data-name=" 0.1.10.0.0.0.0.0.3.1.0" x="313.71" y="232.01" width="0.85" height="0.05" style="fill: #b3b3b3"/>
                      </g>
                    </g>
                    <g id="_0.1.10.0.0.0.0.0.4" data-name=" 0.1.10.0.0.0.0.0.4">
                      <polygon id="_0.1.10.0.0.0.0.0.4.0" data-name=" 0.1.10.0.0.0.0.0.4.0" points="312.41 230.99 311.44 230.89 311.44 231.62 312.41 231.52 312.41 230.99" style="fill: #d1c690"/>
                      <g id="_0.1.10.0.0.0.0.0.4.1" data-name=" 0.1.10.0.0.0.0.0.4.1">
                        <path id="_0.1.10.0.0.0.0.0.4.1.0" data-name=" 0.1.10.0.0.0.0.0.4.1.0" d="M330.37,335h0a2.41,2.41,0,0,1,.6.16c.2.08.55.78.82.7h.07a.06.06,0,0,1,0,.08c-.3.09-.67-.62-.89-.7a2.19,2.19,0,0,0-.57-.16,0,0,0,0,1,0-.05v0Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <polygon id="_0.1.10.0.0.0.0.0.4.2" data-name=" 0.1.10.0.0.0.0.0.4.2" points="315.83 233.88 316.79 233.98 316.79 233.25 315.83 233.36 315.83 233.88" style="fill: #d1c690"/>
                      <g id="_0.1.10.0.0.0.0.0.4.3" data-name=" 0.1.10.0.0.0.0.0.4.3">
                        <path id="_0.1.10.0.0.0.0.0.4.3.0" data-name=" 0.1.10.0.0.0.0.0.4.3.0" d="M332.2,336.16h.05a2.64,2.64,0,0,0,1.89,1.15s.05,0,.05.07a.06.06,0,0,1-.05.06h0a2.59,2.59,0,0,1-2-1.24.06.06,0,0,1,0-.08Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <path id="_0.1.10.0.0.0.0.0.4.4" data-name=" 0.1.10.0.0.0.0.0.4.4" d="M331.73,336.14s.35,0,.38-.31h-.38Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.10.0.0.0.0.0.4.5" data-name=" 0.1.10.0.0.0.0.0.4.5" d="M332.16,336.46s-.16-.31-.05-.35.18-.05.24,0S332.16,336.46,332.16,336.46Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.10.0.0.0.0.0.4.6" data-name=" 0.1.10.0.0.0.0.0.4.6" d="M331.8,335.79c-.27.09-.62-.62-.82-.7a2.41,2.41,0,0,0-.6-.16V335a4.44,4.44,0,0,1,.6.16c.2.08.55.79.82.7Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <polygon id="_0.1.10.0.0.0.0.0.4.7" data-name=" 0.1.10.0.0.0.0.0.4.7" points="315.83 233.3 316.79 233.2 316.79 233.25 315.83 233.36 315.83 233.3" style="fill: #9d956c"/>
                      <path id="_0.1.10.0.0.0.0.0.4.8" data-name=" 0.1.10.0.0.0.0.0.4.8" d="M332.25,336.15a2.45,2.45,0,0,0,1.89,1.15v.09a2.31,2.31,0,0,1-1.89-1.16Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.10.0.0.0.0.0.4.9" data-name=" 0.1.10.0.0.0.0.0.4.9" d="M332.11,335.77h-.38v.06h.38Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.10.0.0.0.0.0.4.10" data-name=" 0.1.10.0.0.0.0.0.4.10" d="M332.35,336.08c-.06-.08-.13-.07-.24,0v.06c.11-.05.18-.05.24,0Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                    </g>
                    <g id="_0.1.10.0.0.0.0.0.5" data-name=" 0.1.10.0.0.0.0.0.5">
                      <rect id="_0.1.10.0.0.0.0.0.5.0" data-name=" 0.1.10.0.0.0.0.0.5.0" x="312.03" y="234.35" width="4.22" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.10.0.0.0.0.0.6" data-name=" 0.1.10.0.0.0.0.0.6" d="M334.8,338.2v-3.81h-5.32v3.83Z" transform="translate(-18.02 -103.8)" style="fill: #f2f2f2;opacity: 0.5;isolation: isolate"/>
                    <path id="_0.1.10.0.0.0.0.0.7" data-name=" 0.1.10.0.0.0.0.0.7" d="M334.75,337.55v.27c0,.15,0,.27-.1.27H329.8c-.17,0-.18-.07,0-.07h4.34c.46,0,.52-.1.52-.19v-.28C334.67,337.39,334.75,337.39,334.75,337.55Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.550000011920929;isolation: isolate"/>
                    <path id="_0.1.10.0.0.0.0.0.8" data-name=" 0.1.10.0.0.0.0.0.8" d="M329.62,334.59c0-.07,0-.14.1-.14h4.82c.16,0,.17.06,0,.06h-3.61C330.34,334.52,329.62,334.59,329.62,334.59Z" transform="translate(-18.02 -103.8)" style="opacity: 0.029999999329448;isolation: isolate"/>
                    <path id="_0.1.10.0.0.0.0.0.9" data-name=" 0.1.10.0.0.0.0.0.9" d="M335.76,334.39H335v.53a.28.28,0,0,1-.19.26v3.05h1v-3.84" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.10.0.0.0.0.0.10" data-name=" 0.1.10.0.0.0.0.0.10">
                      <rect id="_0.1.10.0.0.0.0.0.10.0" data-name=" 0.1.10.0.0.0.0.0.10.0" x="316.78" y="234.35" width="1.01" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.10.0.0.0.0.0.11" data-name=" 0.1.10.0.0.0.0.0.11" d="M328.41,334.39v3.84h1.07v-3.47a.32.32,0,0,1-.19-.27v-.1h-.83" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.10.0.0.0.0.0.12" data-name=" 0.1.10.0.0.0.0.0.12">
                      <rect id="_0.1.10.0.0.0.0.0.12.0" data-name=" 0.1.10.0.0.0.0.0.12.0" x="310.39" y="234.35" width="1.07" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.11" data-name=" 0.1.11">
          <g id="chip-led0805-4">
            <g id="_0.1.11.0.0" data-name=" 0.1.11.0.0">
              <g id="_0.1.11.0.0.0" data-name=" 0.1.11.0.0.0">
                <g id="_0.1.11.0.0.0.0" data-name=" 0.1.11.0.0.0.0">
                  <g id="led-0603-4">
                    <line id="_0.1.11.0.0.0.0.0.0" data-name=" 0.1.11.0.0.0.0.0.0" x1="317.74" y1="224.09" x2="310.5" y2="224.09" style="fill: none"/>
                    <g id="_0.1.11.0.0.0.0.0.1" data-name=" 0.1.11.0.0.0.0.0.1">
                      <rect id="TX_LED" data-name="TX LED" x="310.39" y="224.09" width="7.35" height="3.83" style="fill: #f2f2f2"/>
                    </g>
                    <path id="_0.1.11.0.0.0.0.0.2" data-name=" 0.1.11.0.0.0.0.0.2" d="M331,327.88s-.64.47-.87.43-.54.15-.67,0v-.42Z" transform="translate(-18.02 -103.8)" style="fill: #22b573;fill-opacity: 0.699999988079071"/>
                    <g id="_0.1.11.0.0.0.0.0.3" data-name=" 0.1.11.0.0.0.0.0.3">
                      <g id="_0.1.11.0.0.0.0.0.3.0" data-name=" 0.1.11.0.0.0.0.0.3.0">
                        <rect id="_0.1.11.0.0.0.0.0.3.0.0" data-name=" 0.1.11.0.0.0.0.0.3.0.0" x="313.7" y="225.56" width="0.85" height="0.96" style="fill: #fff"/>
                      </g>
                      <g id="_0.1.11.0.0.0.0.0.3.1" data-name=" 0.1.11.0.0.0.0.0.3.1">
                        <rect id="_0.1.11.0.0.0.0.0.3.1.0" data-name=" 0.1.11.0.0.0.0.0.3.1.0" x="313.7" y="225.53" width="0.85" height="0.05" style="fill: #b3b3b3"/>
                      </g>
                    </g>
                    <g id="_0.1.11.0.0.0.0.0.4" data-name=" 0.1.11.0.0.0.0.0.4">
                      <polygon id="_0.1.11.0.0.0.0.0.4.0" data-name=" 0.1.11.0.0.0.0.0.4.0" points="312.41 224.51 311.44 224.41 311.44 225.14 312.41 225.04 312.41 224.51" style="fill: #d1c690"/>
                      <g id="_0.1.11.0.0.0.0.0.4.1" data-name=" 0.1.11.0.0.0.0.0.4.1">
                        <path id="_0.1.11.0.0.0.0.0.4.1.0" data-name=" 0.1.11.0.0.0.0.0.4.1.0" d="M330.37,328.51h0a2.41,2.41,0,0,1,.6.16c.2.08.55.78.82.7h.07a.06.06,0,0,1,0,.08c-.3.09-.67-.62-.89-.7a2.19,2.19,0,0,0-.57-.16,0,0,0,0,1,0,0v0Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <polygon id="_0.1.11.0.0.0.0.0.4.2" data-name=" 0.1.11.0.0.0.0.0.4.2" points="315.83 227.4 316.79 227.5 316.79 226.77 315.83 226.88 315.83 227.4" style="fill: #d1c690"/>
                      <g id="_0.1.11.0.0.0.0.0.4.3" data-name=" 0.1.11.0.0.0.0.0.4.3">
                        <path id="_0.1.11.0.0.0.0.0.4.3.0" data-name=" 0.1.11.0.0.0.0.0.4.3.0" d="M332.2,329.68h.05a2.64,2.64,0,0,0,1.89,1.15s.05,0,.05.07a.06.06,0,0,1-.05.06h0a2.59,2.59,0,0,1-2-1.24.06.06,0,0,1,0-.08Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      </g>
                      <path id="_0.1.11.0.0.0.0.0.4.4" data-name=" 0.1.11.0.0.0.0.0.4.4" d="M331.73,329.66s.35,0,.38-.31h-.38Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.11.0.0.0.0.0.4.5" data-name=" 0.1.11.0.0.0.0.0.4.5" d="M332.16,330s-.16-.31-.05-.35.18-.05.24,0S332.16,330,332.16,330Z" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                      <path id="_0.1.11.0.0.0.0.0.4.6" data-name=" 0.1.11.0.0.0.0.0.4.6" d="M331.8,329.31c-.27.09-.62-.62-.82-.7a2.41,2.41,0,0,0-.6-.16v.06a4.44,4.44,0,0,1,.6.16c.2.08.55.79.82.7Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <polygon id="_0.1.11.0.0.0.0.0.4.7" data-name=" 0.1.11.0.0.0.0.0.4.7" points="315.83 226.82 316.79 226.72 316.79 226.77 315.83 226.88 315.83 226.82" style="fill: #9d956c"/>
                      <path id="_0.1.11.0.0.0.0.0.4.8" data-name=" 0.1.11.0.0.0.0.0.4.8" d="M332.25,329.67a2.45,2.45,0,0,0,1.89,1.15v.06a2.31,2.31,0,0,1-1.89-1.16Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.11.0.0.0.0.0.4.9" data-name=" 0.1.11.0.0.0.0.0.4.9" d="M332.11,329.29h-.38v.1h.38Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                      <path id="_0.1.11.0.0.0.0.0.4.10" data-name=" 0.1.11.0.0.0.0.0.4.10" d="M332.35,329.61c-.06-.08-.13-.08-.24,0v.06c.11,0,.18-.05.24,0Z" transform="translate(-18.02 -103.8)" style="fill: #9d956c"/>
                    </g>
                    <g id="_0.1.11.0.0.0.0.0.5" data-name=" 0.1.11.0.0.0.0.0.5">
                      <rect id="_0.1.11.0.0.0.0.0.5.0" data-name=" 0.1.11.0.0.0.0.0.5.0" x="312.03" y="227.87" width="4.22" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.11.0.0.0.0.0.6" data-name=" 0.1.11.0.0.0.0.0.6" d="M334.8,331.72v-3.83h-5.32v3.83Z" transform="translate(-18.02 -103.8)" style="fill: #f2f2f2;opacity: 0.5;isolation: isolate"/>
                    <path id="_0.1.11.0.0.0.0.0.7" data-name=" 0.1.11.0.0.0.0.0.7" d="M334.75,331.07v.32c0,.15,0,.27-.1.27H329.8c-.17,0-.18-.07,0-.07h4.34c.46,0,.52-.1.52-.19v-.28C334.67,330.89,334.75,330.89,334.75,331.07Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.550000011920929;isolation: isolate"/>
                    <path id="_0.1.11.0.0.0.0.0.8" data-name=" 0.1.11.0.0.0.0.0.8" d="M329.62,328.11c0-.07,0-.14.1-.14h4.82c.16,0,.17.07,0,.07h-3.61C330.34,328,329.62,328.11,329.62,328.11Z" transform="translate(-18.02 -103.8)" style="opacity: 0.029999999329448;isolation: isolate"/>
                    <path id="_0.1.11.0.0.0.0.0.9" data-name=" 0.1.11.0.0.0.0.0.9" d="M335.76,327.88H335v.51a.28.28,0,0,1-.19.26v3.05h1v-3.81" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.11.0.0.0.0.0.10" data-name=" 0.1.11.0.0.0.0.0.10">
                      <rect id="_0.1.11.0.0.0.0.0.10.0" data-name=" 0.1.11.0.0.0.0.0.10.0" x="316.78" y="227.87" width="1.01" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <path id="_0.1.11.0.0.0.0.0.11" data-name=" 0.1.11.0.0.0.0.0.11" d="M328.41,327.88v3.84h1.07v-3.47a.32.32,0,0,1-.19-.27v-.1h-.83" transform="translate(-18.02 -103.8)" style="fill: #d1c690"/>
                    <g id="_0.1.11.0.0.0.0.0.12" data-name=" 0.1.11.0.0.0.0.0.12">
                      <rect id="_0.1.11.0.0.0.0.0.12.0" data-name=" 0.1.11.0.0.0.0.0.12.0" x="310.39" y="227.87" width="1.07" height="0.05" style="fill: #fff;opacity: 0.5;isolation: isolate"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.12" data-name=" 0.1.12">
          <g id="sot223">
            <g id="_0.1.12.0.0" data-name=" 0.1.12.0.0">
              <g id="_0.1.12.0.0.0" data-name=" 0.1.12.0.0.0">
                <g id="_0.1.12.0.0.0.0" data-name=" 0.1.12.0.0.0.0">
                  <g id="_0.1.12.0.0.0.0.0" data-name=" 0.1.12.0.0.0.0.0">
                    <rect id="_0.1.12.0.0.0.0.0.0" data-name=" 0.1.12.0.0.0.0.0.0" x="262.08" y="285.3" width="4.9" height="3.46" style="fill: #999"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.1" data-name=" 0.1.12.0.0.0.0.1">
                    <rect id="_0.1.12.0.0.0.0.1.0" data-name=" 0.1.12.0.0.0.0.1.0" x="262.08" y="278.75" width="4.9" height="3.46" style="fill: #999"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.2" data-name=" 0.1.12.0.0.0.0.2">
                    <rect id="_0.1.12.0.0.0.0.2.0" data-name=" 0.1.12.0.0.0.0.2.0" x="262.08" y="272.19" width="4.9" height="3.45" style="fill: #999"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.3" data-name=" 0.1.12.0.0.0.0.3">
                    <rect id="_0.1.12.0.0.0.0.3.0" data-name=" 0.1.12.0.0.0.0.3.0" x="266.83" y="285.3" width="0.15" height="3.46" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.4" data-name=" 0.1.12.0.0.0.0.4">
                    <rect id="_0.1.12.0.0.0.0.4.0" data-name=" 0.1.12.0.0.0.0.4.0" x="266.83" y="278.75" width="0.15" height="3.46" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.5" data-name=" 0.1.12.0.0.0.0.5">
                    <rect id="_0.1.12.0.0.0.0.5.0" data-name=" 0.1.12.0.0.0.0.5.0" x="266.83" y="272.19" width="0.15" height="3.45" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.6" data-name=" 0.1.12.0.0.0.0.6">
                    <rect id="_0.1.12.0.0.0.0.6.0" data-name=" 0.1.12.0.0.0.0.6.0" x="246.85" y="275.37" width="5.28" height="10.21" style="fill: #999"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.7" data-name=" 0.1.12.0.0.0.0.7">
                    <rect id="_0.1.12.0.0.0.0.7.0" data-name=" 0.1.12.0.0.0.0.7.0" x="246.85" y="275.37" width="0.16" height="10.21" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                  </g>
                  <g id="_0.1.12.0.0.0.0.8" data-name=" 0.1.12.0.0.0.0.8">
                    <rect id="_0.1.12.0.0.0.0.8.0" data-name=" 0.1.12.0.0.0.0.8.0" x="252.13" y="270.9" width="9.94" height="19.16" style="fill: #303030"/>
                  </g>
                  <polygon id="_0.1.12.0.0.0.0.9" data-name=" 0.1.12.0.0.0.0.9" points="252.13 290.06 252.13 270.9 252.86 271.62 252.86 289.33 252.13 290.06" style="fill: #1f1f1f"/>
                  <polygon id="_0.1.12.0.0.0.0.10" data-name=" 0.1.12.0.0.0.0.10" points="262.08 290.06 262.08 270.9 261.35 271.62 261.35 289.33 262.08 290.06" style="fill: #1f1f1f"/>
                  <polygon id="_0.1.12.0.0.0.0.11" data-name=" 0.1.12.0.0.0.0.11" points="252.13 290.06 262.08 290.06 261.35 289.33 252.86 289.33 252.13 290.06"/>
                  <polygon id="_0.1.12.0.0.0.0.12" data-name=" 0.1.12.0.0.0.0.12" points="252.13 270.9 262.08 270.9 261.35 271.62 252.86 271.62 252.13 270.9" style="fill: #3d3d3d"/>
                  <circle id="_0.1.12.0.0.0.0.13" data-name=" 0.1.12.0.0.0.0.13" cx="259.91" cy="287.9" r="0.72" style="fill: #1f1f1f"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.13" data-name=" 0.1.13">
          <g id="powersupply_dc-21mm" data-name="powersupply dc-21mm">
            <g id="_0.1.13.0.0" data-name=" 0.1.13.0.0">
              <g id="_0.1.13.0.0.0" data-name=" 0.1.13.0.0.0">
                <g id="_0.1.13.0.0.0.0" data-name=" 0.1.13.0.0.0.0">
                  <g id="dc-21mm">
                    <g id="_0.1.13.0.0.0.0.0.0" data-name=" 0.1.13.0.0.0.0.0.0">
                      <g id="_0.1.13.0.0.0.0.0.0.0" data-name=" 0.1.13.0.0.0.0.0.0.0">
                        <g id="_0.1.13.0.0.0.0.0.0.0.0" data-name=" 0.1.13.0.0.0.0.0.0.0.0">
                          <g id="_0.1.13.0.0.0.0.0.0.0.0.0" data-name=" 0.1.13.0.0.0.0.0.0.0.0.0">
                            <rect id="_0.1.13.0.0.0.0.0.0.0.0.0.0" data-name=" 0.1.13.0.0.0.0.0.0.0.0.0.0" x="234.97" y="295.8" width="32.97" height="23.73" style="fill: #232323"/>
                            <rect id="_0.1.13.0.0.0.0.0.0.0.0.0.1" data-name=" 0.1.13.0.0.0.0.0.0.0.0.0.1" x="235.57" y="296.37" width="31.94" height="1.65" style="fill: #494949"/>
                            <rect id="_0.1.13.0.0.0.0.0.0.0.0.0.2" data-name=" 0.1.13.0.0.0.0.0.0.0.0.0.2" x="235.57" y="298.02" width="31.94" height="5.37" style="fill: #3d3d3d;fill-opacity: 0.300000011920929"/>
                            <rect id="_0.1.13.0.0.0.0.0.0.0.0.0.3" data-name=" 0.1.13.0.0.0.0.0.0.0.0.0.3" x="234.54" y="317.39" width="32.97" height="1.62"/>
                            <rect id="_0.1.13.0.0.0.0.0.0.0.0.0.4" data-name=" 0.1.13.0.0.0.0.0.0.0.0.0.4" x="234.54" y="311.61" width="32.97" height="5.83" style="fill: #0f0f0f;fill-opacity: 0.400000005960465"/>
                          </g>
                          <rect id="_0.1.13.0.0.0.0.0.0.0.0.1" data-name=" 0.1.13.0.0.0.0.0.0.0.0.1" x="267.35" y="295.8" width="0.59" height="23.73" style="opacity: 0.200000002980232;isolation: isolate"/>
                        </g>
                        <line id="_0.1.13.0.0.0.0.0.0.0.1" data-name=" 0.1.13.0.0.0.0.0.0.0.1" x1="265.13" y1="319.53" x2="265.13" y2="295.8" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px;opacity: 0.5;isolation: isolate"/>
                        <g id="_0.1.13.0.0.0.0.0.0.0.2" data-name=" 0.1.13.0.0.0.0.0.0.0.2">
                          <rect id="_0.1.13.0.0.0.0.0.0.0.2.0" data-name=" 0.1.13.0.0.0.0.0.0.0.2.0" x="237.18" y="295.82" width="1.29" height="23.73" style="opacity: 0.25;isolation: isolate"/>
                          <path id="_0.1.13.0.0.0.0.0.0.0.2.1" data-name=" 0.1.13.0.0.0.0.0.0.0.2.1" d="M255.49,403.92V419h13.29a7.55,7.55,0,0,0,0-15.09Z" transform="translate(-18.02 -103.8)" style="stroke: #565656;stroke-miterlimit: 10;stroke-width: 0.25px;opacity: 0.25;isolation: isolate"/>
                        </g>
                        <g id="_0.1.13.0.0.0.0.0.0.0.3" data-name=" 0.1.13.0.0.0.0.0.0.0.3">
                          <path id="_0.1.13.0.0.0.0.0.0.0.3.0" data-name=" 0.1.13.0.0.0.0.0.0.0.3.0" d="M255.49,403.92V419h13.29a7.55,7.55,0,0,0,0-15.09Z" transform="translate(-18.02 -103.8)" style="fill: #232323"/>
                          <rect id="_0.1.13.0.0.0.0.0.0.0.3.1" data-name=" 0.1.13.0.0.0.0.0.0.0.3.1" x="230.5" y="294.9" width="7.69" height="25.51" style="fill: #232323"/>
                        </g>
                        <rect id="_0.1.13.0.0.0.0.0.0.0.4" data-name=" 0.1.13.0.0.0.0.0.0.0.4" x="267.94" y="304.8" width="1.7" height="5.71" style="fill: #6d6d6d"/>
                        <rect id="_0.1.13.0.0.0.0.0.0.0.5" data-name=" 0.1.13.0.0.0.0.0.0.0.5" x="267.94" y="302.05" width="0.98" height="11.23" style="fill: #494949"/>
                        <rect id="_0.1.13.0.0.0.0.0.0.0.6" data-name=" 0.1.13.0.0.0.0.0.0.0.6" x="231.2" y="295.32" width="6.27" height="1.05" style="fill: #494949"/>
                        <rect id="_0.1.13.0.0.0.0.0.0.0.7" data-name=" 0.1.13.0.0.0.0.0.0.0.7" x="231.2" y="319.01" width="6.27" height="1.05"/>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.14" data-name=" 0.1.14">
          <g id="pn61729">
            <g id="_0.1.14.0.0" data-name=" 0.1.14.0.0">
              <g id="_0.1.14.0.0.0" data-name=" 0.1.14.0.0.0">
                <g id="_0.1.14.0.0.0.0" data-name=" 0.1.14.0.0.0.0">
                  <g id="_0.1.14.0.0.0.0.0" data-name=" 0.1.14.0.0.0.0.0">
                    <path id="_0.1.14.0.0.0.0.0.0" data-name=" 0.1.14.0.0.0.0.0.0" d="M254.93,305.28h3v4.11h-4.88v-3.2a.9.9,0,0,1,.89-.91h1Z" transform="translate(-18.02 -103.8)" style="fill: #999"/>
                    <path id="_0.1.14.0.0.0.0.0.1" data-name=" 0.1.14.0.0.0.0.0.1" d="M253.84,305.28v4.11H253v-3.32C253,305.64,253.6,305.28,253.84,305.28Z" transform="translate(-18.02 -103.8)" style="fill: gray"/>
                  </g>
                  <g id="_0.1.14.0.0.0.0.1" data-name=" 0.1.14.0.0.0.0.1">
                    <g id="_0.1.14.0.0.0.0.1.0" data-name=" 0.1.14.0.0.0.0.1.0">
                      <rect id="_0.1.14.0.0.0.0.1.0.0" data-name=" 0.1.14.0.0.0.0.1.0.0" x="225.1" y="205.56" width="36.68" height="32.48" style="fill: #b3b3b3"/>
                    </g>
                    <g id="_0.1.14.0.0.0.0.1.1" data-name=" 0.1.14.0.0.0.0.1.1">
                      <rect id="_0.1.14.0.0.0.0.1.1.0" data-name=" 0.1.14.0.0.0.0.1.1.0" x="217.54" y="205.56" width="7.57" height="32.48" style="fill: #999"/>
                    </g>
                    <g id="_0.1.14.0.0.0.0.1.2" data-name=" 0.1.14.0.0.0.0.1.2">
                      <rect id="_0.1.14.0.0.0.0.1.2.0" data-name=" 0.1.14.0.0.0.0.1.2.0" x="217.54" y="235.99" width="44.25" height="2.05" style="fill: #ccc;opacity: 0.5;isolation: isolate"/>
                    </g>
                    <g id="_0.1.14.0.0.0.0.1.3" data-name=" 0.1.14.0.0.0.0.1.3">
                      <rect id="_0.1.14.0.0.0.0.1.3.0" data-name=" 0.1.14.0.0.0.0.1.3.0" x="217.54" y="205.56" width="44.25" height="2.05" style="opacity: 0.200000002980232;isolation: isolate"/>
                    </g>
                  </g>
                  <g id="_0.1.14.0.0.0.0.2" data-name=" 0.1.14.0.0.0.0.2">
                    <path id="_0.1.14.0.0.0.0.2.0" data-name=" 0.1.14.0.0.0.0.2.0" d="M254.93,345.91h3v-4.08h-4.88V345a.9.9,0,0,0,.89.91h1Z" transform="translate(-18.02 -103.8)" style="fill: #b3b3b3"/>
                    <path id="_0.1.14.0.0.0.0.2.1" data-name=" 0.1.14.0.0.0.0.2.1" d="M253.84,345.91v-4.08H253v3.32C253,345.56,253.6,345.91,253.84,345.91Z" transform="translate(-18.02 -103.8)" style="fill: #e6e6e6"/>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_0.1.15" data-name=" 0.1.15">
          <g id="smd_157sw" data-name="smd 157sw">
            <g id="_0.1.15.0.0" data-name=" 0.1.15.0.0">
              <g id="_0.1.15.0.0.0" data-name=" 0.1.15.0.0.0">
                <polygon id="_0.1.15.0.0.0.0" data-name=" 0.1.15.0.0.0.0" points="248.16 198.15 248.16 197.78 256.43 197.78 256.43 198.15 262.67 198.15 262.67 182.17 241.92 182.17 241.92 198.15 248.16 198.15" style="fill: #ccc"/>
                <polygon id="_0.1.15.0.0.0.1" data-name=" 0.1.15.0.0.0.1" points="256.43 179.61 256.43 179.98 248.16 179.98 248.16 179.61 241.92 179.61 241.92 195.47 262.67 195.47 262.67 179.61 256.43 179.61" style="fill: #ccc"/>
                <circle id="_0.1.15.0.0.0.2" data-name=" 0.1.15.0.0.0.2" cx="252.3" cy="188.88" r="5.12" style="fill: #641d1c"/>
                <path id="_0.1.15.0.0.0.3" data-name=" 0.1.15.0.0.0.3" d="M275.43,292.39a5.12,5.12,0,1,0-10.23-.45,3.38,3.38,0,0,0,0,.45v.25a5.12,5.12,0,1,1,10.23-.45,3.38,3.38,0,0,1,0,.45Z" transform="translate(-18.02 -103.8)" style="opacity: 0.200000002980232;isolation: isolate"/>
                <circle id="_0.1.15.0.0.0.4" data-name=" 0.1.15.0.0.0.4" cx="252.3" cy="188.88" r="4.93" style="fill: #852725"/>
                <circle id="_0.1.15.0.0.0.5" data-name=" 0.1.15.0.0.0.5" cx="252.3" cy="189" r="4.93" style="fill: #852725"/>
                <g id="_0.1.15.0.0.0.6" data-name=" 0.1.15.0.0.0.6">
                  <path id="_0.1.15.0.0.0.6.0" data-name=" 0.1.15.0.0.0.6.0" d="M270.44,297.6a4.93,4.93,0,0,0,0-9.86h-.26a4.93,4.93,0,1,1,0,9.86h.22Z" transform="translate(-18.02 -103.8)" style="opacity: 0.100000001490116;isolation: isolate"/>
                  <path id="_0.1.15.0.0.0.6.1" data-name=" 0.1.15.0.0.0.6.1" d="M270.44,287.75a4.93,4.93,0,1,0,0,9.86h-.22a4.93,4.93,0,0,1,0-9.86h.26Z" transform="translate(-18.02 -103.8)" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                </g>
                <g id="_0.1.15.0.0.0.7" data-name=" 0.1.15.0.0.0.7">
                  <rect id="_0.1.15.0.0.0.7.0" data-name=" 0.1.15.0.0.0.7.0" x="241.91" y="197.78" width="6.25" height="0.37" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                </g>
                <g id="_0.1.15.0.0.0.8" data-name=" 0.1.15.0.0.0.8">
                  <rect id="_0.1.15.0.0.0.8.0" data-name=" 0.1.15.0.0.0.8.0" x="256.43" y="197.78" width="6.24" height="0.37" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                </g>
                <g id="_0.1.15.0.0.0.9" data-name=" 0.1.15.0.0.0.9">
                  <rect id="_0.1.15.0.0.0.9.0" data-name=" 0.1.15.0.0.0.9.0" x="248.16" y="197.41" width="8.27" height="0.37" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
                </g>
                <g id="_0.1.15.0.0.0.10" data-name=" 0.1.15.0.0.0.10">
                  <rect id="_0.1.15.0.0.0.10.0" data-name=" 0.1.15.0.0.0.10.0" x="241.91" y="179.62" width="6.25" height="0.37" style="opacity: 0.200000002980232;isolation: isolate"/>
                </g>
                <g id="_0.1.15.0.0.0.11" data-name=" 0.1.15.0.0.0.11">
                  <rect id="_0.1.15.0.0.0.11.0" data-name=" 0.1.15.0.0.0.11.0" x="256.42" y="179.62" width="6.24" height="0.37" style="opacity: 0.200000002980232;isolation: isolate"/>
                </g>
                <g id="_0.1.15.0.0.0.12" data-name=" 0.1.15.0.0.0.12">
                  <rect id="_0.1.15.0.0.0.12.0" data-name=" 0.1.15.0.0.0.12.0" x="248.16" y="179.99" width="8.27" height="0.37" style="opacity: 0.200000002980232;isolation: isolate"/>
                </g>
              </g>
            </g>
            <g id="_0.1.15.0.1" data-name=" 0.1.15.0.1">
              <rect id="_0.1.15.0.1.0" data-name=" 0.1.15.0.1.0" x="262.7" y="193.88" width="2.75" height="2.25" style="fill: #e6e6e6"/>
              <rect id="_0.1.15.0.1.1" data-name=" 0.1.15.0.1.1" x="262.7" y="181.63" width="2.75" height="2.25" style="fill: #e6e6e6"/>
              <rect id="_0.1.15.0.1.2" data-name=" 0.1.15.0.1.2" x="239.32" y="187.09" width="2.75" height="3.42" style="fill: #e6e6e6"/>
              <rect id="_0.1.15.0.1.3" data-name=" 0.1.15.0.1.3" x="239.32" y="193.88" width="2.75" height="2.25" style="fill: #e6e6e6"/>
              <rect id="_0.1.15.0.1.4" data-name=" 0.1.15.0.1.4" x="239.32" y="181.63" width="2.75" height="2.25" style="fill: #e6e6e6"/>
              <rect id="_0.1.15.0.1.5" data-name=" 0.1.15.0.1.5" x="239.32" y="187.09" width="0.33" height="3.42" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
              <rect id="_0.1.15.0.1.6" data-name=" 0.1.15.0.1.6" x="239.32" y="193.88" width="0.33" height="2.25" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
              <rect id="_0.1.15.0.1.7" data-name=" 0.1.15.0.1.7" x="239.32" y="181.63" width="0.33" height="2.25" style="fill: #fff;opacity: 0.200000002980232;isolation: isolate"/>
              <rect id="_0.1.15.0.1.8" data-name=" 0.1.15.0.1.8" x="265.39" y="193.86" width="0.1" height="2.25" style="opacity: 0.200000002980232;isolation: isolate"/>
              <rect id="_0.1.15.0.1.9" data-name=" 0.1.15.0.1.9" x="265.39" y="181.61" width="0.1" height="2.25" style="opacity: 0.200000002980232;isolation: isolate"/>
              <rect id="_0.1.15.0.1.10" data-name=" 0.1.15.0.1.10" x="262.71" y="193.89" width="0.33" height="2.25" style="opacity: 0.100000001490116;isolation: isolate"/>
              <rect id="_0.1.15.0.1.11" data-name=" 0.1.15.0.1.11" x="262.71" y="181.64" width="0.33" height="2.25" style="opacity: 0.100000001490116;isolation: isolate"/>
            </g>
          </g>
        </g>
        <g id="_0.1.16" data-name=" 0.1.16">
          <g id="_0.1.16.1" data-name=" 0.1.16.1">
            <g id="_0.1.16.1.0" data-name=" 0.1.16.1.0" style="isolation: isolate">
              <text transform="translate(244.81 202)" style="isolation: isolate;font-size: 4.179999828338623px;fill: #fff;font-family: ArialMT, Arial">RESE</text>
              <text transform="translate(256.18 202)" style="isolation: isolate;font-size: 4.179999828338623px;fill: #fff;font-family: ArialMT, Arial;letter-spacing: -0.03702994320732322em">T</text>
            </g>
          </g>
        </g>
        <g id="_0.1.17" data-name=" 0.1.17">
          <g id="_1x10" data-name=" 1x10">
            <rect id="_0.1.17.0.0" data-name=" 0.1.17.0.0" x="284.93" y="182.2" width="72" height="7.2" style="fill: #404040"/>
            <rect id="_0.1.17.0.1" data-name=" 0.1.17.0.1" x="287.14" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.2" data-name=" 0.1.17.0.2" points="286.12 183.38 287.14 184.41 289.92 184.41 290.95 183.38 286.12 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.3" data-name=" 0.1.17.0.3" points="290.95 183.38 289.92 184.41 289.92 187.19 290.95 188.22 290.95 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.4" data-name=" 0.1.17.0.4" points="290.95 188.22 289.92 187.19 287.14 187.19 286.12 188.22 290.95 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.5" data-name=" 0.1.17.0.5" points="286.12 188.22 287.14 187.19 287.14 184.41 286.12 183.38 286.12 188.22" style="fill: #373737"/>
            <rect id="_0.1.17.0.6" data-name=" 0.1.17.0.6" x="294.34" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.7" data-name=" 0.1.17.0.7" points="293.32 183.38 294.34 184.41 297.12 184.41 298.15 183.38 293.32 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.8" data-name=" 0.1.17.0.8" points="298.15 183.38 297.12 184.41 297.12 187.19 298.15 188.22 298.15 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.9" data-name=" 0.1.17.0.9" points="298.15 188.22 297.12 187.19 294.34 187.19 293.32 188.22 298.15 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.10" data-name=" 0.1.17.0.10" points="293.31 188.22 294.34 187.19 294.34 184.41 293.31 183.38 293.31 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_ARFF" x="301.54" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.12" data-name=" 0.1.17.0.12" points="300.52 183.38 301.54 184.41 304.33 184.41 305.35 183.38 300.52 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.13" data-name=" 0.1.17.0.13" points="305.35 183.38 304.33 184.41 304.33 187.19 305.35 188.22 305.35 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.14" data-name=" 0.1.17.0.14" points="305.35 188.22 304.33 187.19 301.54 187.19 300.52 188.22 305.35 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.15" data-name=" 0.1.17.0.15" points="300.52 188.22 301.54 187.19 301.54 184.41 300.52 183.38 300.52 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_GND_1" x="308.74" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.17" data-name=" 0.1.17.0.17" points="307.72 183.38 308.74 184.41 311.53 184.41 312.55 183.38 307.72 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.18" data-name=" 0.1.17.0.18" points="312.55 183.38 311.53 184.41 311.53 187.19 312.55 188.22 312.55 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.19" data-name=" 0.1.17.0.19" points="312.55 188.22 311.52 187.19 308.74 187.19 307.72 188.22 312.55 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.20" data-name=" 0.1.17.0.20" points="307.72 188.22 308.74 187.19 308.74 184.41 307.72 183.38 307.72 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_13" x="315.94" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.22" data-name=" 0.1.17.0.22" points="314.92 183.38 315.94 184.41 318.73 184.41 319.75 183.38 314.92 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.23" data-name=" 0.1.17.0.23" points="319.75 183.38 318.73 184.41 318.73 187.19 319.75 188.22 319.75 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.24" data-name=" 0.1.17.0.24" points="319.75 188.22 318.72 187.19 315.94 187.19 314.92 188.22 319.75 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.25" data-name=" 0.1.17.0.25" points="314.91 188.22 315.94 187.19 315.94 184.41 314.91 183.38 314.91 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_12" x="323.15" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.27" data-name=" 0.1.17.0.27" points="322.12 183.38 323.14 184.41 325.92 184.41 326.95 183.38 322.12 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.28" data-name=" 0.1.17.0.28" points="326.95 183.38 325.92 184.41 325.92 187.19 326.95 188.22 326.95 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.29" data-name=" 0.1.17.0.29" points="326.95 188.22 325.92 187.19 323.14 187.19 322.12 188.22 326.95 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.30" data-name=" 0.1.17.0.30" points="322.12 188.22 323.14 187.19 323.14 184.41 322.12 183.38 322.12 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_11" x="330.34" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.32" data-name=" 0.1.17.0.32" points="329.32 183.38 330.34 184.41 333.12 184.41 334.15 183.38 329.32 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.33" data-name=" 0.1.17.0.33" points="334.15 183.38 333.12 184.41 333.12 187.19 334.15 188.22 334.15 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.34" data-name=" 0.1.17.0.34" points="334.15 188.22 333.12 187.19 330.34 187.19 329.32 188.22 334.15 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.35" data-name=" 0.1.17.0.35" points="329.32 188.22 330.34 187.19 330.34 184.41 329.32 183.38 329.32 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_10" x="337.54" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.37" data-name=" 0.1.17.0.37" points="336.52 183.38 337.54 184.41 340.33 184.41 341.35 183.38 336.52 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.38" data-name=" 0.1.17.0.38" points="341.35 183.38 340.33 184.41 340.33 187.19 341.35 188.22 341.35 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.39" data-name=" 0.1.17.0.39" points="341.35 188.22 340.33 187.19 337.54 187.19 336.52 188.22 341.35 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.40" data-name=" 0.1.17.0.40" points="336.51 188.22 337.54 187.19 337.54 184.41 336.51 183.38 336.51 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_9" x="344.74" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.42" data-name=" 0.1.17.0.42" points="343.72 183.38 344.74 184.41 347.53 184.41 348.55 183.38 343.72 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.43" data-name=" 0.1.17.0.43" points="348.55 183.38 347.53 184.41 347.53 187.19 348.55 188.22 348.55 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.44" data-name=" 0.1.17.0.44" points="348.55 188.22 347.52 187.19 344.74 187.19 343.72 188.22 348.55 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.45" data-name=" 0.1.17.0.45" points="343.72 188.22 344.74 187.19 344.74 184.41 343.72 183.38 343.72 188.22" style="fill: #373737"/>
            <rect id="ARDUINO_PIN_8" x="351.95" y="184.41" width="2.78" height="2.78"/>
            <polygon id="_0.1.17.0.47" data-name=" 0.1.17.0.47" points="350.92 183.38 351.94 184.41 354.72 184.41 355.75 183.38 350.92 183.38" style="fill: #2a2a29"/>
            <polygon id="_0.1.17.0.48" data-name=" 0.1.17.0.48" points="355.75 183.38 354.72 184.41 354.72 187.19 355.75 188.22 355.75 183.38" style="fill: #474747"/>
            <polygon id="_0.1.17.0.49" data-name=" 0.1.17.0.49" points="355.74 188.22 354.72 187.19 351.94 187.19 350.92 188.22 355.74 188.22" style="fill: #595959"/>
            <polygon id="_0.1.17.0.50" data-name=" 0.1.17.0.50" points="350.91 188.22 351.94 187.19 351.94 184.41 350.91 183.38 350.91 188.22" style="fill: #373737"/>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g id="Power">
    <g id="GND">
      <g>
        <line x1="357.64" y1="336.73" x2="357.71" y2="322.6" style="fill: none;stroke: #000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="357.64" y1="336.73" x2="357.71" y2="322.6" style="fill: none;stroke: #404040;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <g>
        <line x1="47.99" y1="135.6" x2="47.99" y2="336.73" style="fill: none;stroke: #000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="47.99" y1="135.6" x2="47.99" y2="336.73" style="fill: none;stroke: #404040;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <g>
        <line x1="47.99" y1="336.73" x2="357.64" y2="336.73" style="fill: none;stroke: #000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="47.99" y1="336.73" x2="357.64" y2="336.73" style="fill: none;stroke: #404040;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <g>
        <line x1="134.53" y1="136.8" x2="47.99" y2="135.6" style="fill: none;stroke: #000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="134.53" y1="136.8" x2="47.99" y2="135.6" style="fill: none;stroke: #404040;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <line x1="551.98" y1="7.33" x2="592.76" y2="6.96" style="fill: none;stroke: #000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
      <line x1="552.36" y1="136.95" x2="593.08" y2="136.95" style="fill: none;stroke: #000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
      <line x1="592.97" y1="6.96" x2="592.97" y2="136.42" style="fill: none;stroke: #000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
    </g>
    <g id="VIN">
      <g>
        <line x1="70.01" y1="144.01" x2="70.01" y2="344.54" style="fill: none;stroke: #8c0000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="70.01" y1="144.01" x2="70.01" y2="344.54" style="fill: none;stroke: #cc1414;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <g>
        <line x1="364.74" y1="344.54" x2="364.91" y2="322.6" style="fill: none;stroke: #8c0000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="364.74" y1="344.54" x2="364.91" y2="322.6" style="fill: none;stroke: #cc1414;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <g>
        <line x1="70.01" y1="344.54" x2="364.74" y2="344.54" style="fill: none;stroke: #8c0000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="70.01" y1="344.54" x2="364.74" y2="344.54" style="fill: none;stroke: #cc1414;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <g>
        <line x1="134.53" y1="144" x2="70.01" y2="144.01" style="fill: none;stroke: #8c0000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
        <line x1="134.53" y1="144" x2="70.01" y2="144.01" style="fill: none;stroke: #cc1414;stroke-linecap: round;stroke-width: 1.60000002384186px"/>
      </g>
      <line x1="552.14" y1="14.5" x2="586.13" y2="14.5" style="fill: none;stroke: #8c0000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
      <line x1="586.13" y1="14.5" x2="586.13" y2="143.96" style="fill: none;stroke: #8c0000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
      <line x1="552.03" y1="143.96" x2="586.13" y2="143.96" style="fill: none;stroke: #8c0000;stroke-linecap: round;stroke-width: 3.20000004768372px"/>
    </g>
  </g>
  <g id="MESSAGE">
    <path id="MESSAGE_BUBBLE_ARDUINO" data-name="MESSAGE BUBBLE ARDUINO" d="M210.88,347.31l1.52-68c0-6.47-7.26-11.77-16.12-11.77H35.64c-8.86,0-16.12,5.3-16.12,11.77V354c0,6.48,7.26,11.76,16.12,11.76H173.71L252,416.12Z" transform="translate(-18.02 -103.8)" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 3px"/>
    <text id="MESSAGE_ARDUINO_TITLE" data-name="MESSAGE ARDUINO TITLE" transform="translate(9.06 190.84)" style="isolation: isolate;font-size: 16px;font-family: Biryani-ExtraBold, Biryani;font-weight: 800">Sending Message:</text>
    <text id="MESSAGE_LINE_3" transform="matrix(0.98, 0, -0.17, 0.98, 7.38, 244)" style="isolation: isolate;font-size: 16px;fill: #156cff;font-family: Biryani-ExtraBold, Biryani;font-weight: 800">THIS IS LINE OF MESS</text>
    <text id="MESSAGE_LINE_2" transform="matrix(0.98, 0, -0.17, 0.98, 7.38, 224)" style="isolation: isolate;font-size: 16px;fill: #156cff;font-family: Biryani-ExtraBold, Biryani;font-weight: 800">THIS IS LINE OF MESS</text>
  </g>
  <g id="ANALOG_WIRES">
    <g id="A5">
      <line x1="415.42" y1="322.69" x2="415.42" y2="352.02" style="fill: none;stroke: #d15f33;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line x1="441.3" y1="352.02" x2="415.42" y2="352.02" style="fill: none;stroke: #d15f33;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line id="ARDUINO_PIN_A5" x1="441.3" y1="166.92" x2="441.3" y2="352.02" style="fill: none;stroke: #d15f33;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
    </g>
    <g id="A4">
      <line x1="408.16" y1="322.6" x2="408.16" y2="356.73" style="fill: none;stroke: #ffe600;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line x1="449.34" y1="356.73" x2="408.16" y2="356.73" style="fill: none;stroke: #ffe600;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line id="ARDUINO_PIN_A4" x1="449.34" y1="167.02" x2="449.34" y2="356.73" style="fill: none;stroke: #ffe600;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
    </g>
    <g id="A3">
      <line x1="400.92" y1="322.59" x2="400.92" y2="362.97" style="fill: none;stroke: #5533d1;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line x1="456.67" y1="362.97" x2="400.92" y2="362.97" style="fill: none;stroke: #5533d1;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line id="ARDUINO_PIN_A3" x1="456.67" y1="167.02" x2="456.67" y2="362.97" style="fill: none;stroke: #5533d1;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
    </g>
    <g id="A2">
      <line x1="393.72" y1="322.59" x2="393.72" y2="368.84" style="fill: none;stroke: #34ce5f;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line x1="464.49" y1="368.84" x2="393.72" y2="368.84" style="fill: none;stroke: #34ce5f;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line id="ARDUINO_PIN_A2" x1="464.49" y1="167.02" x2="464.49" y2="368.84" style="fill: none;stroke: #34ce5f;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
    </g>
    <g id="A1">
      <line x1="386.52" y1="322.69" x2="386.52" y2="374.7" style="fill: none;stroke: #cc9e37;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line x1="473.51" y1="374.7" x2="386.52" y2="374.7" style="fill: none;stroke: #cc9e37;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line id="ARDUINO_PIN_A1" x1="473.51" y1="167.13" x2="473.51" y2="374.7" style="fill: none;stroke: #cc9e37;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
    </g>
    <g id="A0">
      <line x1="379.35" y1="322.47" x2="379.35" y2="379.92" style="fill: none;stroke: #b637cc;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line x1="481.76" y1="379.92" x2="379.35" y2="379.92" style="fill: none;stroke: #b637cc;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
      <line id="ARDUINO_PIN_A0" x1="481.76" y1="167.24" x2="481.76" y2="379.92" style="fill: none;stroke: #b637cc;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>
    </g>
  </g>
</svg>
`
    return boardString;
};

const boardSvg = {
    [MicroControllerType.ARDUINO_UNO]: arduinoUnoSvg,
    [MicroControllerType.ARDUINO_MEGA]: arduinoMegaSvg,
};