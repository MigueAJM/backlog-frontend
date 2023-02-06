import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.sass'],
})
export class AddMessagesComponent {
  constructor(public messagesService: MessagesService) {}
  /* message: string = '';
  addMessage() {
    this.messagesService.add(this.message);
  } */
  message?: string;
  addMessage() {
    this.messagesService.add(this.message!);
    this.message = '';
  }
}
