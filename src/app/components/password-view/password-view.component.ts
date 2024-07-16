import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-password-view',
  standalone: true,
  imports: [FormsModule,ClipboardModule],
  templateUrl: './password-view.component.html',
  styleUrl: './password-view.component.scss'
})

export class PasswordViewComponent {
  @Input() password!: string;


  // Initialize the clipboard service to allow copying the password
  constructor(private clipboard: Clipboard) {

  }
  copyText() {
    this.clipboard.copy(this.password);
    console.log(this.password);
  }
}
