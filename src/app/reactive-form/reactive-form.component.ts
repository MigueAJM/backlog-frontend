import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass'],
})
export class ReactiveFormComponent {
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', [Validators.required]);
  username = new FormControl('', Validators.required);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', Validators.required);
  active = new FormControl(false);
}
