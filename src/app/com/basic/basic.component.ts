import { Component } from '@angular/core';
import { FormControl,  } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  age = new FormControl('')
  name = new FormControl('Abebe')
}
