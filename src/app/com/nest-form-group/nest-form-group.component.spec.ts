import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestFormGroupComponent } from './nest-form-group.component';

describe('NestFormGroupComponent', () => {
  let component: NestFormGroupComponent;
  let fixture: ComponentFixture<NestFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
