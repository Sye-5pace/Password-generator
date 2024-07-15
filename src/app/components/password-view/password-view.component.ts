import { Component } from '@angular/core';
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
  password: string= 'P4$5W0rD!';

  copyText() {

  }
}
