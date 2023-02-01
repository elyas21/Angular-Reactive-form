import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAsyncValidatorComponent } from './form-async-validator.component';

describe('FormAsyncValidatorComponent', () => {
  let component: FormAsyncValidatorComponent;
  let fixture: ComponentFixture<FormAsyncValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAsyncValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAsyncValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
