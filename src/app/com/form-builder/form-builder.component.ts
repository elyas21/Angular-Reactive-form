import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  citiesList: City[] = cities;
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
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

interface City {
  name: string;
  code: string;
}