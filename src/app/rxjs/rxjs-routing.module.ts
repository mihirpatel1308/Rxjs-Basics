import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsMainComponent } from './rxjs-main/rxjs-main.component';

const routes: Routes = [
  {
    path:'',
    component: RxjsMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
