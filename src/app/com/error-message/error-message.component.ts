import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  contactForm = new FormGroup( {
    firstName: new FormControl('', [Validators.required , Validators.max(7)]),
    lastName: new FormControl(''),
    nationality: new FormControl(''),
    age: new FormControl('', [Validators.required])
  })
 
  onSubmit() {
   console.log(this.contactForm.value);
   console.log(this.contactForm);
  }

  ChangeTo(){
    this.contactForm.setValue({age:'92',firstName:'Abebe',lastName:'Kebede',nationality:'ET'})
    this.contactForm.controls['age'].setValue('60');
    // patchValue
  }
  patchValue(){
    this.contactForm.patchValue({age:'55',lastName:'patchName'})
  }
  selectedCity: any;
  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

}
