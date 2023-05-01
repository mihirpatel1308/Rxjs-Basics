ng g m rxjs --routing

ng g c rxjs/rxjs-main

ng g c rxjs/observable

==> Add observable selector in  rxjs-main component.

==> Update App routing module :

  {
    path:'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
  }

==> Update rxjs routing module : 

const routes: Routes = [
{
  path:'',
  component: RxjsMainComponent
}
];

==> Create data-service : 

ng g s rxjs/rxjs-service/rxjs

==> Update code rxjs service : 

  product(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

==> Update import of HttpClientModule

==> Update observable Html file : 

<!-- <pre>{{showProducts | json}}</pre> -->

<div>
    <ul *ngFor="let showProduct of showProducts">
        <li>
            {{showProduct.name}} -{{showProduct.email}}
        </li>
    </ul>
</div>

==>  Update observable ts file :

 showProducts: any
  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.product().subscribe((res) => {
      this.showProducts = res;
    })
  }

------------------------------------------------------------------------------------------------------------------------------------

ng g m subject --routing

ng g c subject/subject

ng g c subject/component1

ng g c subject/component2

ng g c subject/component3

ng g s subject/share-data-service/share-data

==> Update app routing module

const routes: Routes = [
  {
    path:'subject',
    loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)
  }  
];

==> Update subject routing module : 

const routes: Routes = [
{
  path:'',
  component: SubjectComponent
}
];

==> Update App component with Router outlet

==> update subject component html : 

<div style="text-align: center;  
font-size: x-large;  
font-family: monospace;">Example of Subject in RxJs</div>
<div style="margin:10px" class="card-deck">
  <app-component1></app-component1>
  <app-component2></app-component2>
  <app-component3></app-component3>
</div>


==> Update share data service : 

 public save$: Observable<any>;
   public save: Subject<any>;

  constructor() {
    this.save = new Subject();
    this.save$ = this.save.asObservable();
   }

   editUser(newUser:any){
    debugger
    this.save.next(newUser); 
  }


==> Update component 1 html : 

<div style="background-color: aliceblue;" class="card">
    <div class="card-body">
        <h5 class="card-title">Component 1</h5>
        <input name="comp1" #comp1 type="text" />
        <button (click)="onSubmit(comp1)">Submit</button>
        <p class="card-text">{{Component1Data}}</p>
    </div>
</div>

==> Update component 1 ts : 

Component1Data: any = '';

  constructor(private DataSharing: DataSharingService) {
    
    this.DataSharing.save$.subscribe((res: any) => {
      this.Component1Data = res;
    })
  }

  onSubmit(data: any) {
    this.DataSharing.save.next(data.value);  
  }


==> Update component 2 html : 

<div style="background-color:antiquewhite" class="card">
    <div class="card-body">
        <h5 class="card-title">Component 2</h5>
        <input name="comp2" #comp2 type="text" />
        <button (click)="onSubmit(comp2)">Submit</button>
        <p class="card-text">{{Component2Data}}</p>
    </div>
</div>

==> Update component 2 ts : 

 Component2Data: any = '';


  constructor(private DataSharing: DataSharingService) {
    this.DataSharing.save$.subscribe((res: any) => {
      debugger
      this.Component2Data = res;
    })
  }

  onSubmit(data: any) {
    debugger
    this.DataSharing.editUser(data.value);  
  }

==> Update component 3 html : 

<div style="background-color:burlywood" class="card">  
    <div class="card-body">  
      <h5 class="card-title">Component 3</h5>  
      <input name="comp3" #comp3 type="text" />  
      <button (click)="onSubmit(comp3)">Submit</button>  
      <p class="card-text">{{Component3Data}}</p>  
    </div>  
  </div> 

==> Update component 3 ts : 

 Component3Data: any = '';  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.save$.subscribe((res: any) => {
      this.Component3Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this.DataSharing.editUser(data.value);  
  }  


----------------------------------------------------------------------------------------------------------------------------

ng g m behavior-subject --routing

ng g c behavior-subject/behavior-subject

ng g c behavior-subject/one

ng g c behavior-subject/two

ng g s behavior-subject/user-data-service/user-data

==> Update App routing module :

 const routes: Routes = [
 
   {
    path:'behavior-subject',
    loadChildren: () => import('./behavior-subject/behavior-subject.module').then(m => m.BehaviorSubjectModule)
  }
  
];

==> Update behavior subject routing module : 

const routes: Routes = [
  {
    path:'',
    component: BehaviorSubjectComponent
  }
];

==> Update user data service : 

 private user = new BehaviorSubject<string>('1Rivet');
  public castUser = this.user.asObservable();
  constructor() { }
  
  
  editUser(newUser:any){
    debugger
    this.user.next(newUser); 
  }

==> Update component one Html : 

<p> from component1 {{user}}</p>
<input [(ngModel)]="newUser" />
<button (click)="editedUser();">Change</button>

==> Update component one ts : 

 constructor(private userService: UserService) { }
  name = 'Angular';
  user: string = '';
  newUser: string = '';
  ngOnInit() {
    this.userService.castUser.subscribe((user) => {
      debugger
      this.user = user
    });
  }
  editedUser() {
    this.userService.editUser(this.newUser);
  }

  ==> Update component two Html : 

  <p>
    two: {{user}}
</p>

==> Update component two ts : 

 name = 'Angular';
  user: string = '';
  newUser: string = '';
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.castUser.subscribe(user => this.user = user);

  }

  newUsers() {
    this.userService.editUser(this.newUser);
  }

----------------------------------------------------------------------------------------------------------------------------

