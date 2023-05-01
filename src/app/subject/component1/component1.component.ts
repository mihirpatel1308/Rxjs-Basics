import { Component } from '@angular/core';
import { ShareDataService } from '../share-data-service/share-data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  Component1Data: any = '';

  constructor(private shareDataService: ShareDataService) {
    
    this.shareDataService.save$.subscribe((res: any) => {
      debugger
      this.Component1Data = res;
    })
  }

  onSubmit(data: any) {
    debugger
    this.shareDataService.editUser(data.value);  
  }
}
