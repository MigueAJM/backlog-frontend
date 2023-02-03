import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  show_alert: boolean = false;
  showInConsole(username: string) {
    this.show_alert = true;
    console.log({ username });
  }
}
