import {AppElectronState} from "./AppElectorn.state";
import {AppElectronAction, AppElectronActionType} from "./AppElectron.action";

export function appElectronReduce(state : AppElectronState = {isFocus: true},
  action : AppElectronAction) : AppElectronState {
  switch (action.type) {
    case AppElectronActionType.BLUR:
      return {
        ...state,
        isFocus: false
      };
    case AppElectronActionType.FOCUS:
      return {
        ...state,
        isFocus: true
      };
    default:
      return state;
  }
}
