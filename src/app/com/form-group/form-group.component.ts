import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  contactForm = new FormGroup( {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    nationality: new FormControl(''),
    age: new FormControl('12')
  })
 
  onSubmit() {
   console.log(this.contactForm.value);
   console.log(this.contactForm);
  }

ChangeTo(){
    this.contactForm.setValue({age:'92',firstName:'Abebe',lastName:'Beso',nationality:'Ethiopia'})
    this.contactForm.controls['age'].setValue('60');
    // patchValue
  }
}
