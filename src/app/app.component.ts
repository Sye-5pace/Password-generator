import { Component } from '@angular/core';
import { GeneratorSettingsComponent } from './components/generator-settings/generator-settings.component';
import { PasswordViewComponent } from './components/password-view/password-view.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PasswordViewComponent, GeneratorSettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'password-generator';
}
