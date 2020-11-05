import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicewithuserComponent } from './devicewithuser.component';

describe('DevicewithuserComponent', () => {
  let component: DevicewithuserComponent;
  let fixture: ComponentFixture<DevicewithuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicewithuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicewithuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
