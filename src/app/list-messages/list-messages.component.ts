import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.sass'],
})
export class ListMessagesComponent {
  constructor(public messagesService: MessagesService) {}
}
