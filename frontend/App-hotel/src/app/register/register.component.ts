import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    const userData = { username: this.username, email: this.email, password: this.password };
    this.authService.register(userData).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }
}