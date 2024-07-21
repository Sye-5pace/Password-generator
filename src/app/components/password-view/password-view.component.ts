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
  copied: boolean = false;


  // Initialize the clipboard service to allow copying the password
  constructor(private clipboard: Clipboard) {
  }

  copyText(): void {
    if(this.password !== ''){
      navigator.clipboard.writeText(this.password)
      .then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1500);
        console.log('this clipboard was copied'+ this.password);
      }).catch(() => {
        console.log('Failed to copy this clipboard'+ this.password);
      });
    }
  }
}
