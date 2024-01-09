import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoDigitDecimaNumberDirective } from './two-digit-decimal-number';

fdescribe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicComponent, TwoDigitDecimaNumberDirective ],
      imports: [MatCardModule, MatFormFieldModule, FormsModule,BrowserAnimationsModule, ReactiveFormsModule, MatInputModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
