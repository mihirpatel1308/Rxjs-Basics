import { Component } from '@angular/core';
import { ShareDataService } from '../share-data-service/share-data.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {
  Component3Data: any = '';  
  
  constructor(private shareDataService: ShareDataService) {  
    this.shareDataService.save$.subscribe((res: any) => {
      debugger
      this.Component3Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this.shareDataService.editUser(data.value);  
  }  
}
