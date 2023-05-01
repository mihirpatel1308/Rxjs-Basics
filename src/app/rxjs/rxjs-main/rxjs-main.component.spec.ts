import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMainComponent } from './rxjs-main.component';

describe('RxjsMainComponent', () => {
  let component: RxjsMainComponent;
  let fixture: ComponentFixture<RxjsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
