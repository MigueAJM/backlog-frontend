import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.sass'],
})
export class ChildrenComponent {
  constructor() {}
  @Input() title?: string;
  @Output() titleChange = new EventEmitter<string>();
  emitTitleChange() {
    this.titleChange.emit(this.title);
    console.info('The title is change');
    console.info(this.title);
  }
}
