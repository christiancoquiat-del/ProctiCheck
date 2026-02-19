import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loginpage');
  email : string = '';
  password : string = '';
  value : string = '';
  validate(){
    this.value = (this.email == "andreabusa@gmail.com") ? ((this.password == "pass123") ? "Login Successful.": "Failed to Login") : "Failed to Login";
  }
}
