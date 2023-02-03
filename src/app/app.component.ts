import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `<h1>Todo bien, todo correcto y yo que me alegro.</h1>`,
  styleUrls: ['./app.component.sass']
  /* styles: [`
    h1
        color: #ccc
`] */
})
export class AppComponent {
  title = 'backlog-frontend';
}
