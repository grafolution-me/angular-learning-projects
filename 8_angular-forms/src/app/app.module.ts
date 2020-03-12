import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {TdComponent} from './td/td.component';
import { TdPractiseComponent } from './td-practise/td-practise.component';
import { RouterModule, Routes} from '@angular/router';
import { RdComponent } from './rd/rd.component';
import { RdPractiseComponent } from './rd-practise/rd-practise.component';
import {CustumValidators} from './rd-practise/custum-validators';
const routes: Routes = [
  {path: '', redirectTo: 'td', pathMatch: 'full'},
  { path: 'td', component:  TdComponent},
  { path: 'rd', component:  RdComponent},
  { path: 'rd-practise', component: RdPractiseComponent},
  { path: 'td-practise', component: TdPractiseComponent}
]
@NgModule({
  declarations: [
    TdComponent,
    TdPractiseComponent,
    AppComponent,
    RdComponent,
    RdPractiseComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
