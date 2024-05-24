import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://127.0.0.1:8000/chat/'; // Replace with your actual API URL
  constructor(private http: HttpClient) {}

  sendMessage(room: string, content: string, user: string): Observable<any> {
    const messagePayload = {
      room,
      content,
      user
    };
    return this.http.post<any>(this.apiUrl, messagePayload);
  }
}
