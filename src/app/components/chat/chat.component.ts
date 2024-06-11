import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {
    message: string = '';
    responses: string[] = [];

    constructor(private authService: AuthService) { }

    sendMessage() {
        this.authService.chat(this.message).subscribe(
            data => {
                this.responses.push(data.choices[0].text);
                this.message = '';
            },
            error => {
                console.error('Chat failed', error);
            }
        );
    }
}
