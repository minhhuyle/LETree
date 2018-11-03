import {FrameHeaderState} from "./FrameHeader.state";
import {FrameHeaderAction, FrameHeaderActionType} from "./FrameHeader.action";

export function frameHeaderReduce(state : FrameHeaderState = {isInFrameAction: false}, action : FrameHeaderAction){
  if(!(action instanceof FrameHeaderAction)) {
    return;
  }

  switch (action.type) {
    case FrameHeaderActionType.HIDE_ICON:
      return {
        ...state,
        isInFrameAction: false
      };
    case FrameHeaderActionType.SHOW_ICON:
      return {
        ...state,
        isInFrameAction: true
      };
  }
}
