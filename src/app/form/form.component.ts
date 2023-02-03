import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  show_alert: boolean = false;
  users: User[] = [
    {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    },
    {
      firstname: 'Sebastian',
      lastname: 'Angel',
      username: 'sebasjm',
      email: 'miguelj@infoexpo.com',
      password: 'this passsword is secret',
      active: true,
    },
    {
      firstname: 'Christopher',
      lastname: 'Angel',
      username: 'christojm',
      email: 'miguelj@infoexpo.com',
      password: 'this passsword is secret',
      active: true,
    },
    {
      firstname: 'Jesus',
      lastname: 'Angel',
      username: 'chuchojm',
      email: 'miguelj@infoexpo.com',
      password: 'this passsword is secret',
      active: true,
    },
    {
      firstname: 'Hector',
      lastname: 'Angel',
      username: 'chumajm',
      email: 'miguelj@infoexpo.com',
      password: 'this passsword is secret',
      active: true,
    },
  ];
  showInConsole(username: string) {
    this.show_alert = true;
    console.log({ username });
  }

  day: number = new Date().getDay();

  process() {
    console.log(this.users[0]);
  }
}
