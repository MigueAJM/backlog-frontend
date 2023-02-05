import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.sass'],
})
export class ChildrenComponent {
  constructor() {}
  @Input() title?: string;
}
