import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsMainComponent } from './rxjs-main/rxjs-main.component';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    RxjsMainComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule    
  ]
})
export class RxjsModule { }
