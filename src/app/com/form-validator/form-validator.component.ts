import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.scss']
})
export class FormValidatorComponent {
  registerForm = new FormGroup({
    'name': new FormControl('',[Validators.required , ]),
    'password': new FormControl('',[Validators.required]),
    'confPassword': new FormControl()
  },
  { validators: passwordMatchValidator }
  
  );
  onSubmit(){
    console.log(this.registerForm.value);
    
  }
}

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password:string = control.get('password')?.value;
  const confPassword = control.get('confPassword')?.value;
if(password && confPassword)
return password != confPassword ? { diff: true } : null;
else return {diff: true}
};