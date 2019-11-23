import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessComponent} from './success/success.component';
import {WarningComponent} from './warning/warning.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PracticingDirectiveComponent } from './practicing-directive/practicing-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
    DatabindingComponent,
    PracticingDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
