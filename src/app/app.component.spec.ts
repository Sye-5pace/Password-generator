import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PasswordViewComponent } from './components/password-view/password-view.component';
import { GeneratorSettingsComponent } from './components/generator-settings/generator-settings.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,PasswordViewComponent, GeneratorSettingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the PasswordViewComponent', () => {
    const passwordViewDebugElement = fixture.debugElement.query(By.directive(PasswordViewComponent));
    expect(passwordViewDebugElement).not.toBeNull();
  });

  it('should render the GeneratorSettingsComponent', () => {
    const generatorSettingsDebugElement = fixture.debugElement.query(By.directive(GeneratorSettingsComponent));
    expect(generatorSettingsDebugElement).not.toBeNull();
  });

});
