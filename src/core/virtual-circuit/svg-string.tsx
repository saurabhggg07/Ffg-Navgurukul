import {ArduinoComponentState, ArduinoComponentType} from "../frames/arduino.frames";
import {getLedSvgString} from "../../blocks/led/svg-string";
import buttonSvgString from '../../blocks/button/button.svg';

export interface GetSvgString {
    (state: ArduinoComponentState | undefined): string;
}
export const getSvgString = (state: ArduinoComponentState) => {
    if (createSvgString[state.type]) {
        return createSvgString[state.type](state);
    }

    throw new Error('No Svg String found ' + state.type);
};

const createSvgString: { [key: string]: GetSvgString } = {
    [ArduinoComponentType.LED]: getLedSvgString,
    [ArduinoComponentType.BUTTON]: (_) => buttonSvgString,
};