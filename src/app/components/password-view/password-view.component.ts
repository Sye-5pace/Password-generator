import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-password-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-view.component.html',
  styleUrl: './password-view.component.scss'
})

export class PasswordViewComponent {
  password: string= 'P4$5W0rD!';

  copyText() {
    
  }
}
