import {Action} from "@ngrx/store";

export const enum AppElectronActionType {
  FOCUS = "[AppElectronAction] FOCUS",
  BLUR = "[AppElectronAction] BLUR",
}

export class AppElectronAction implements Action {
  type: string;

}

export class AppElectronActionFocus extends AppElectronAction {
  readonly type: AppElectronActionType = AppElectronActionType.FOCUS;
}

export class AppElectronActionBlur extends AppElectronAction {
  readonly type: AppElectronActionType = AppElectronActionType.BLUR;
}
