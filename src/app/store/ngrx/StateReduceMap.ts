import {appElectronReduce} from "./app-electron/AppElectron.reducer";
import {AppElectronState} from "./app-electron/AppElectorn.state";

export interface StateMap {
  appElectron: AppElectronState
}

export const ReduceMap = {
  appElectron: appElectronReduce
};
