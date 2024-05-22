import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.user).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

