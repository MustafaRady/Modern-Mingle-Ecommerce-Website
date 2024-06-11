// src/app/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isRegistering = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  toggleForm() {
    this.isRegistering = !this.isRegistering;
    this.errorMessage = null;  // Clear error message when toggling forms
  }
   onRegister() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
        this.authService.register(email, password).subscribe(
          (response)=>{
            console.log(response);
            this.errorMessage = null;
          },error=>{
            console.log(error);
            this.errorMessage = error.message;
          }
        );
    }

    this.loginForm.reset();
  }

  onLogin(){
    if(this.loginForm.valid){
      const {email , password} = this.loginForm.value;
      this.authService.login(email,password).subscribe(
        (response)=>{
          console.log(response);
          this.errorMessage = null;
          window.localStorage.setItem('token', response.accessToken);
        },error=>{
          console.log(error);
          this.errorMessage = error.message;
        }
      )
    }

    this.loginForm.reset();
  }
}
