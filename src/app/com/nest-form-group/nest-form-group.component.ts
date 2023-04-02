import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nest-form-group',
  templateUrl: './nest-form-group.component.html',
  styleUrls: ['./nest-form-group.component.scss']
})
export class NestFormGroupComponent {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    }),
    addressTwo: this.addressTwoGenrartor()
  })

  onSave(){
    console.log(this.userForm.value);
  }
  addressTwoGenrartor(){
    return new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    });
  }
}
 