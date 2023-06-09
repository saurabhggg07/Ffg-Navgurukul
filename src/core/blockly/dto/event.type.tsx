import {BlockData} from "./block.type";
import {MicroControllerType} from "../../microcontroller/microcontroller";
import {VariableData} from "./variable.type";

export interface BlockEvent {
    blocks: BlockData[];
    variables: VariableData[];
    type: string; // the type of event
    blockId: string;
    microController: MicroControllerType;

    fieldName?: string; // the field name that got changed
    fieldType?: string;
    oldValue?: string; // previous value that got changes
    newValue?: string; //
}