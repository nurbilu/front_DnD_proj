import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      () => {
        this.router.navigate(['/chat']);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}


