import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs-service/rxjs.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  public showProducts: any;
constructor(
  private rxjsService: RxjsService
){

}

  ngOnInit(): void {
    this.rxjsService.product().subscribe((res) => {
      this.showProducts = res;
    })
  }
}
