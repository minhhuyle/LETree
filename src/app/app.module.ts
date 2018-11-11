import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentsComponent} from './contents/contents.component';
import {FrameHeaderComponent} from './header/frame-header/frame-header.component';
import {StoreModule} from "@ngrx/store";
import {ReduceMap} from "./store/ngrx/StateReduceMap";
import {NgxElectronModule} from "ngx-electron";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    FrameHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ReduceMap),
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
