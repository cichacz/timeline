import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {TimelineModule} from '@timeline/timeline.module';
import {StoreModule} from '@store/store.module';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Material Icons', 'Raleway']
  }
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TimelineModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
