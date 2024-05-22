import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Message {
  room: string;
  content: string;
  user: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8000/api/chat/';

  constructor(private http: HttpClient) { }

  getMessages(room: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}rooms/${room}/messages/`);
  }

  sendMessage(room: string, content: string, user: string): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}rooms/${room}/messages/`, { content, user });
  }
}

