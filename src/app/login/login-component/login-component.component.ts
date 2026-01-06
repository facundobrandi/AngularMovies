import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { Router } from '@angular/router';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, NgIf, MatCard, MatCardHeader, MatCardContent],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  loginForm: FormGroup;
  userList : User[] = [];
  userLogId!: number;
  constructor(private fb :FormBuilder , private Router : Router , private userService : UserServiceService)
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value.email,this.loginForm.value.password)

    this.userService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(data =>
      {
        console.log(data)

        if (data.length > 0 && data[0].id !== undefined) {
          this.userLogId = data[0].id;
          this.Router.navigate(['/home']);
          alert('Bienvenido')
        }else
        {
          alert('wrong user')
        }
      }
    )

    
  }
}
