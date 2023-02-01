import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IsUserNameTaken } from 'src/app/validator/asyncValidatorService';

@Component({
  selector: 'app-form-async-validator',
  templateUrl: './form-async-validator.component.html',
  styleUrls: ['./form-async-validator.component.scss']
})
export class FormAsyncValidatorComponent {
  constructor(private isUserNameTaken: IsUserNameTaken) {}
 
  alterEgoControl = new FormControl('', {
    asyncValidators: [this.isUserNameTaken.validate.bind(this.isUserNameTaken)],
    updateOn: 'blur'
  });
  clickForm(){
    console.log(this.alterEgoControl);
    
  }
}
