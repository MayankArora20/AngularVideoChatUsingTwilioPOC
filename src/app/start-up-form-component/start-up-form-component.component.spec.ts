import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpFormComponentComponent } from './start-up-form-component.component';

describe('StartUpFormComponentComponent', () => {
  let component: StartUpFormComponentComponent;
  let fixture: ComponentFixture<StartUpFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartUpFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartUpFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
