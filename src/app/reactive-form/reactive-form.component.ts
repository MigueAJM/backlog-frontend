import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass'],
})
export class ReactiveFormComponent {
  firstname = new FormControl('');
  lastname = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  active = new FormControl(false);
}
