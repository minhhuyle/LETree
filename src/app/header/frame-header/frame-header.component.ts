import {Component, OnInit} from '@angular/core';
import {FrameHeaderState} from "../../store/ngrx/frame-header/FrameHeader.state";
import {Store} from "@ngrx/store";
import {FrameHeaderHideIcon, FrameHeaderShowIcon} from "../../store/ngrx/frame-header/FrameHeader.action";
import {StateMap} from "../../store/ngrx/StateReduceMap";
import {selectStore} from "../../store/ngrx/Store.operator";

@Component({
  selector: 'le-frame-header',
  templateUrl: './frame-header.component.html',
  styleUrls: ['./frame-header.component.scss']
})

export class FrameHeaderComponent implements OnInit {

  private readonly _frameHeader$;
  private _frameHeader: FrameHeaderState;

  constructor(private store: Store<StateMap>) {
    this._frameHeader$ = selectStore(store, state => state.frameHeader)
      .subscribe(value => this._frameHeader = value);
  }

  private static getAssetPath() {
    return "assets/pics/frame/header";
  }

  ngOnInit() {
  }

  getCloseBtnUrl() {
    return (this._frameHeader && this._frameHeader.isInFrameAction)
      ? FrameHeaderComponent.getAssetPath() + "/close.png"
      : FrameHeaderComponent.getAssetPath() + "/red.png";
  }

  getMinimizeBtnUrl() {
    return (this._frameHeader && this._frameHeader.isInFrameAction)
      ? FrameHeaderComponent.getAssetPath() + "/minimize.png"
      : FrameHeaderComponent.getAssetPath() + "/orange.png";
  }

  getResizeBtnUrl() {
    return (this._frameHeader && this._frameHeader.isInFrameAction)
      ? FrameHeaderComponent.getAssetPath() + "/resize.png"
      : FrameHeaderComponent.getAssetPath() + "/green.png";
  }

  activeShowActions() {
    this.store.dispatch(new FrameHeaderShowIcon());
  }

  disableShowActions() {
    this.store.dispatch(new FrameHeaderHideIcon());
  }


  getFrameHeader() {
    return this._frameHeader$;
  }
}
