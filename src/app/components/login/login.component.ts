import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Add FormsModule here
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private apiService: ApiService) {}

  login(): void {
    this.apiService.login(this.credentials).subscribe((response) => {
      console.log('Token:', response.token);
      localStorage.setItem('token', response.token);
    });
  }
}
