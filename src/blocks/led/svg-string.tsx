import type { LedState } from "./state";

import ledSvgString from "./led.svg";

export const getLedSvgString = (state: LedState) => {
    let ledsvgStr = `<svg id="Container" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81.81" height="112.4" viewBox="0 0 81.81 112.4">
  <defs>
    <radialGradient id="radial-gradient" cx="24" cy="40.5" r="14.75" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#39b54a"/>
    </radialGradient>
  </defs>
  <g id="POWER">
    <line x1="28" y1="54.74" x2="28" y2="103.74" fill="none" stroke="#999" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <g id="PIN_GND">
    <line x1="14" y1="54.74" x2="14" y2="75.74" fill="none" stroke="#999" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <path id="COVER" d="M39,52v2a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V52a4,4,0,0,1,4-4,0,0,0,0,0,0,0c0-.48,0-1,0-1.48C13,35.32,17.8,26.23,23.77,26h.46C30.2,26.23,35,35.32,35,46.5c0,.5,0,1,0,1.48a0,0,0,0,0,0,0A4,4,0,0,1,39,52Z" transform="translate(-3 -0.26)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
  <path id="LED_LIGHT" d="M39,52v2a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V52a4,4,0,0,1,4-4,0,0,0,0,0,0,0c0-.48,0-1,0-1.48C13,35.32,17.8,26.23,23.77,26h.46C30.2,26.23,35,35.32,35,46.5c0,.5,0,1,0,1.48a0,0,0,0,0,0,0A4,4,0,0,1,39,52Z" transform="translate(-3 -0.26)" stroke="#000" stroke-miterlimit="10" stroke-width="2" fill="url(#radial-gradient)"/>
  <text transform="translate(29.47 70.63)" font-size="21" font-family="Biryani-SemiBold, Biryani" font-weight="600">+</text>
  <text id="PIN_NUMBER" transform="translate(30.47 99.63)" font-size="21" font-family="Biryani-SemiBold, Biryani" font-weight="600">A15</text>
  <text transform="translate(2.47 71.63)" font-size="24" font-family="Biryani-SemiBold, Biryani" font-weight="600">-</text>
  <text id="LED_TEXT" transform="translate(0 18.46)" font-size="21" font-family="Biryani-SemiBold, Biryani" font-weight="600">OFF</text>
  <text transform="translate(39.66 50.96)" font-size="21" font-family="Biryani-Bold, Biryani" font-weight="700">LED</text>
</svg>
`
    return ledsvgStr.replace(
        /radial-gradient/g,
        `radial-gradient-${state.pin}`
    );
};
