import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) { }

    register(username: string, password: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/register/`, { username, password });
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/login/`, { username, password });
    }

    chat(message: string): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
        return this.http.post(`${this.baseUrl}/chat/`, { message }, { headers });
    }
}
