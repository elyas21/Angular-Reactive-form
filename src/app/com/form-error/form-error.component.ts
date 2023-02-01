import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
const cities: City[] = [
  {
    name: 'london',
    code: 'LN'
  },
  {
    name: 'new york',
    code: 'NY'
  },
  {
    name: 'Addis Abeba',
    code: 'AD'
  },
  {
    name: 'Beijing',
    code: 'BG'
  },
  {
    name: 'Paris',
    code: 'PS'
  },  
]
@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {
  citiesList: City[] = cities;
  profileForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['', [Validators.required, forbiddenNameValidator()]],
    address: this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  constructor(private fb: FormBuilder) { }
  onSubmit() {
    console.log(this.profileForm.value);

  }
  
}
/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value.startsWith('bad')
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

interface City {
  name: string;
  code: string;
}