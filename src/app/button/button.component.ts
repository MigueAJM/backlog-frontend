import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  text_color: string = 'text-dark';
  button_disabled: boolean = false;
  src: string = 'https://images.pexels.com/photos/5945960/pexels-photo-5945960.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
}
