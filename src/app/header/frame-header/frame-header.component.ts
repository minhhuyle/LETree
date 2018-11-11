import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {StateMap} from "../../store/ngrx/StateReduceMap";
import {selectStore} from "../../store/ngrx/Store.operator";
import {ElectronService} from "ngx-electron";
import {AppElectronState} from "../../store/ngrx/app-electron/AppElectorn.state";

@Component({
  selector: 'le-frame-header',
  templateUrl: './frame-header.component.html',
  styleUrls: ['./frame-header.component.scss']
})

export class FrameHeaderComponent implements OnInit {
  private appElectronState : AppElectronState;
  private isInFrameAction : boolean = false;

  constructor(private electronService: ElectronService, private store: Store<StateMap>) {
    selectStore(this.store, state => state.appElectron)
      .subscribe(value => {
        this.appElectronState = value
      });
  }

  private static getAssetPath() {
    return "assets/pics/frame/header";
  }

  ngOnInit(): void {
  }

  private getButtonUrlBy(valueInFrame : string, valueNotInFrame) {
    if(!this.appElectronState.isFocus){
      return FrameHeaderComponent.getAssetPath() + "/light-gray.png";
    }

    return (this.isInFrameAction)
      ? FrameHeaderComponent.getAssetPath() + "/" + valueInFrame + ".png"
      : FrameHeaderComponent.getAssetPath() + "/" + valueNotInFrame + ".png";
  }

  getCloseBtnUrl() {
    return this.getButtonUrlBy("close", "red");
  }

  getMinimizeBtnUrl() {
    return this.getButtonUrlBy("minimize", "orange");
  }

  getResizeBtnUrl() {
    return this.getButtonUrlBy("resize", "green");
  }

  activeShowActions() {
    this.isInFrameAction = true;
  }

  disableShowActions() {
    this.isInFrameAction = false;
  }
}
