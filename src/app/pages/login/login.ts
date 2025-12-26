import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

import { Field, form, required, email, minLength } from '@angular/forms/signals';
import { LoginInterface } from '../../interfaces/LoginInterface';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    RippleModule,
    Field,
    MessageModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  checked: boolean = false;

  loginModel = signal<LoginInterface>({ email: '', password: '' });

  //path são os campos do formulário
  loginForm = form(this.loginModel, (path) => {
    //EMAIL
    required(path.email, { message: 'Campo de email obrigatório!' });
    email(path.email, { message: 'Digite um email válido.' });
    //PASSWORD
    required(path.password, { message: 'Campo de senha obrigatório' });
    minLength(path.password, 8, { message: 'A senha deve ter pelo menos 8 caracteres.' });
  });

  onSubmit() {
    const formData = this.loginModel();
    console.log(JSON.stringify(formData));
  }
}
