import type { Sensor } from "../../core/blockly/dto/sensor.type";
import type { ArduinoComponentState } from "../../core/frames/arduino.frames";

export interface ButtonSensor extends Sensor {
  is_pressed: boolean;
}

export interface ButtonState extends ArduinoComponentState {
  isPressed: boolean;
}
