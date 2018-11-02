import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'le-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private readonly logoIcoUrl : string;

  constructor() {
    this.logoIcoUrl = 'assets/pics/logo/icon.png'
  }

  ngOnInit() {
  }

  getLogoIcoUrl() {
    return this.logoIcoUrl;
  }
}
