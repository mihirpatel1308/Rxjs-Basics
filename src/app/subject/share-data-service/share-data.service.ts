import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  public save$: Observable<any>;
  public save: Subject<any>;

  
  constructor() {
    this.save = new Subject();
    this.save$ = this.save.asObservable();
  }

  editUser(newUser: any) {
    debugger
    this.save.next(newUser);
  }

}
