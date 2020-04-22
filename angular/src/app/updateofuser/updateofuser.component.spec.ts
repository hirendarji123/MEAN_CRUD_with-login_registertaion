import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateofuserComponent } from './updateofuser.component';

describe('UpdateofuserComponent', () => {
  let component: UpdateofuserComponent;
  let fixture: ComponentFixture<UpdateofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
