import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFieldTextComponent } from './shared-utils/form-utils/input-field-text/input-field-text.component';
import { InputFieldNumberComponent } from './shared-utils/form-utils/input-field-number/input-field-number.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldTextComponent,
    InputFieldNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
