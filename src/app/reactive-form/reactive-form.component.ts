import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass'],
})
export class ReactiveFormComponent {
  get email() {
    return this.form_user.get('email');
  }
  get password() {
    return this.form_user.get('password') as FormControl;
  }
  form_user = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    active: new FormControl(false),
  });
  process() {
    console.info({ form_user: this.form_user.value });
  }
}
