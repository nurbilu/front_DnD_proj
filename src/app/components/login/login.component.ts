import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string = '';
    password: string = '';

    constructor(private authService: AuthService, private router: Router) { }

    login() {
        this.authService.login(this.username, this.password).subscribe(
            data => {
                localStorage.setItem('token', data.token);
                this.router.navigate(['/chat']);
            },
            error => {
                console.error('Login failed', error);
            }
        );
    }
}    
