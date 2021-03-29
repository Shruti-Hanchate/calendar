import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { AppComponent } from './app.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DemoUtilModule } from './demo-utils/demo.util.module';
import { DemoUtilsComponent } from './demo-utils/demo-utils.component';
import {DemoModule} from './demo/demo.module'
import { from } from 'rxjs';
// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
  // interactionPlugin

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule,
    DemoUtilModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
  ]
})
export class AppModule { }
