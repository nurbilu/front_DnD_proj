import { Component } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  message: string = '';
  messages: string[] = [];

  constructor(private chatService: ChatService) { }

  sendMessage() {
    this.chatService.sendMessage(this.message).subscribe(
      (response: any) => {
        this.messages.push(response.message);
        this.message = '';
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
