import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'le-frame-action',
  templateUrl: './frame-action.component.html',
  styleUrls: ['./frame-action.component.scss']
})
export class FrameActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  getCloseBtnUrl() {
    return "assets/pics/frame/actions/red.png";
  }

  getMinimizeBtnUrl() {
    return "assets/pics/frame/actions/orange.png";
  }

  getResizeBtnUrl() {
    return "assets/pics/frame/actions/green.png";
  }
}
