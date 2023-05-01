import { Component } from '@angular/core';
import { ShareDataService } from '../share-data-service/share-data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  Component2Data: any = '';


  constructor(private shareDataService: ShareDataService) {
    this.shareDataService.save$.subscribe((res: any) => {
      debugger
      this.Component2Data = res;
    })
  }

  onSubmit(data: any) {
    debugger
    this.shareDataService.editUser(data.value);
  }
}
