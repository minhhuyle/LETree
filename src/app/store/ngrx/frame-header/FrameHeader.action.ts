import {Action} from "@ngrx/store";

export const enum FrameHeaderActionType {
  SHOW_ICON = "SHOW_ICON",
  HIDE_ICON = "HIDE_ICON",
}

export class FrameHeaderAction implements Action {
  type: string;

}

export class FrameHeaderShowIcon extends FrameHeaderAction {
  readonly type: FrameHeaderActionType= FrameHeaderActionType.SHOW_ICON;
}

export class FrameHeaderHideIcon extends FrameHeaderAction {
  readonly type: FrameHeaderActionType = FrameHeaderActionType.HIDE_ICON;
}


export class FrameTest implements Action{
  type: string;
}
