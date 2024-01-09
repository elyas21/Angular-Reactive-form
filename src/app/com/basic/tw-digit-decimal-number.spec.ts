import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoDigitDecimaNumberDirective } from './two-digit-decimal-number';
import { fakeAsync, tick } from '@angular/core/testing';

@Component({
  template: `<input appTwoDigitDecimaNumber [(ngModel)]="value" />`
})
class TestComponent {
  value = '12.341';
}

fdescribe('TwoDigitDecimaNumberDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TwoDigitDecimaNumberDirective],
      imports: [FormsModule, ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(TwoDigitDecimaNumberDirective));

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should allow valid decimal input', fakeAsync(() => {
    inputEl.nativeElement.value = '12.34';
    const event = new KeyboardEvent('keydown', { key: '1' });
    inputEl.triggerEventHandler('keydown', event);
  
    fixture.detectChanges();
    tick(); // Simulate the passage of time
  
    expect(component.value).toBe('12.341');
  }));
  // Add your tests for the directive here

  it('should prevent invalid decimal input', () => {
    inputEl.nativeElement.value = '12.34';
    inputEl.triggerEventHandler('keydown', { key: 'a' });
    fixture.detectChanges();
    expect(component.value).toBe('12.34');
  });
});
  // it('should create the component', () => {
  //   expect(component).toBeTruthy();
  // });


  // it('should prevent invalid decimal input', () => {
  //   inputEl.nativeElement.value = '12.34';
  //   inputEl.triggerEventHandler('keydown', { key: 'a' });
  //   fixture.detectChanges();
  //   expect(component.value).toBe('12.34');
  // });

  // Add more tests as needed

