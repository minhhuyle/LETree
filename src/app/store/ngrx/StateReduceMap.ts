import {frameHeaderReduce} from "./frame-header/FrameHeader.reducer";
import {FrameHeaderState} from "./frame-header/FrameHeader.state";

export interface StateMap {
  frameHeader: FrameHeaderState
}

export const ReduceMap = {
  frameHeader: frameHeaderReduce
};
