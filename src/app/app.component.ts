import {Component, HostListener, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {StateMap} from "./store/ngrx/StateReduceMap";
import {
  AppElectronActionBlur,
  AppElectronActionFocus,
} from "./store/ngrx/app-electron/AppElectron.action";

@Component({
  selector: 'le-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<StateMap>) {

  }

  ngOnInit(): void {
  }

  @HostListener('window:focus', ['$event'])
  onFocus(): void {
    this.store.dispatch(new AppElectronActionFocus());
  }

  @HostListener('window:blur', ['$event'])
  onBlur(): void {
    this.store.dispatch(new AppElectronActionBlur());
  }
}
