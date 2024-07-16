import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generator-settings',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './generator-settings.component.html',
  styleUrl: './generator-settings.component.scss'
})



export class GeneratorSettingsComponent {
  @Input() password!: string;
  @Output() generatedPassword = new EventEmitter<string>();
  passwordStrength: string = 'Medium';
  charLength: number = 10;
  progressBar: number = 10;
  uppercase: boolean = true;
  lowercase: boolean = true;
  numbers: boolean = true;
  symbols: boolean = false;

  checkStrength() {
    const hasLowercase = /[a-z]/.test(this.password);
    const hasUppercase = /[A-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSpecialChars = /[!@#$%^&*()\-=+[{\]}\\|;:'",<.>\/?]/.test(this.password);

    const typesCount = [hasLowercase, hasUppercase, hasDigits, hasSpecialChars].filter(Boolean).length;

    switch (true) {
      case this.password.length < 8:
        this.passwordStrength = 'Too Weak';
        break;
      case this.password.length >= 8 && typesCount === 1:
        this.passwordStrength = 'Weak';
        break;
      case this.password.length >= 8 && this.password.length < 12 && typesCount >= 2:
        this.passwordStrength = 'Medium';
        break;
      default:
        this.passwordStrength = 'Strong';
    }
  }





  //random generator password string
  generatePassword() {
    // Implement password generation logic here
    let charSet = '';
    if (this.uppercase) {
      charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.lowercase) {
      charSet += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.numbers) {
      charSet += '0123456789';
    }
    if (this.symbols) {
      charSet += '!@#$%^&*()-_=+[{]};:\'",<.>/?';
    }
    if(charSet.length === 0) {
      return ;
    };
    this.password = '';
    for (let i = 0; i < this.charLength; i++) {
      this.password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    this.generatedPassword.emit(this.password);
    this.checkStrength()
    return this.password;
  }

}


