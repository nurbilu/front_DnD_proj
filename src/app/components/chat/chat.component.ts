import { Component } from '@angular/core';
import { ChatService } from '../../chat.service';

interface Message {
  user: string;
  content: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  newMessage: string = ''; 
  room: string = ''; 
  user: string = ''; 
  messages: Message[] = []; 

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (this.room && this.newMessage && this.user) {
      this.chatService.sendMessage(this.room, this.newMessage, this.user).subscribe(
        response => {
          console.log('Message sent successfully:', response);
          this.messages.push({ user: this.user, content: this.newMessage });
          this.newMessage = '';
        },
        error => {
          console.error('Error sending message:', error);
        }
      );
    } else {
      console.error('Room, message, and user must be provided');
    }
  }
}
