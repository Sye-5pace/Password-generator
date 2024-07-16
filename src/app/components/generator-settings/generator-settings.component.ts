import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generator-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './generator-settings.component.html',
  styleUrl: './generator-settings.component.scss'
})

export class GeneratorSettingsComponent {
  charLength: number = 10;
  progressBar: number = 10;
}
