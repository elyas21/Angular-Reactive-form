import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {
  contactForm = new FormGroup( {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    pets: new FormArray([
      new FormControl('Dog')
    ])
    
  })
 
  // onSubmit() {
  //  console.log(this.contactForm.value);
  //  console.log(this.contactForm);
  // }

ChangeTo(){
    // this.contactForm.setValue({age:'92',firstName:'Abebe',lastName:'Beso',nationality:'Ethiopia'})
    // this.contactForm.controls['age'].setValue('60')
  }



  get pets(): FormArray {
    return this.contactForm.get('pets') as FormArray;
  }

  addPet() {
    this.pets.push(new FormControl());
  }

  onSubmit() {
    console.log(this.pets.value);
    console.log(this.contactForm.value)
  }
  // To change pets
  setPreset() {
    this.pets.patchValue(['Cat', 'Dog']);
  }
}
