import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';

import { DemoComponent } from './demo.component';
@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule],
  declarations: [DemoComponent],
  exports: [DemoComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class DemoModule {}
