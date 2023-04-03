import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nest-form-group',
  templateUrl: './nest-form-group.component.html',
  styleUrls: ['./nest-form-group.component.scss'],
})
export class NestFormGroupComponent {
  userForm = new FormGroup({
    closeRelatives: new FormGroup({
      familyMembers: new FormArray([new FormControl('')]),
      friends: new FormArray([
        new FormGroup({
          name: new FormControl(),
          rank: new FormControl(),
        }),
      ]),
    }),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    }),
    addressTwo: this.addressTwoGenrartor(),
  });

  onSave() {
    console.log(this.userForm.value);
  }
  addressTwoGenrartor() {
    return new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    });
  }

  closeRelatives(name: string): FormArray {
    return this.userForm.get(['closeRelatives', name]) as FormArray;
  }

  addFamilyMembers() {
    this.closeRelatives('familyMembers').push(new FormControl());
  }

  addFriends() {
    this.closeRelatives('friends').push(
      new FormGroup({
        name: new FormControl(),
        rank: new FormControl(),
      })
    );
  }
}
