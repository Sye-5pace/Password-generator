import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generator-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './generator-settings.component.html',
  styleUrl: './generator-settings.component.scss'
})

export class GeneratorSettingsComponent {
  @Input() password!: string;
  @Output() generatedPassword = new EventEmitter<string>();
  charLength: number = 10;
  progressBar: number = 10;
  uppercase: boolean = true;
  lowercase: boolean = true;
  numbers: boolean = true;
  symbols: boolean = false;

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
    return this.password;
  }
}


