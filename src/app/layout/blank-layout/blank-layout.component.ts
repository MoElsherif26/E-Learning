import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SplashComponent } from '../splash/splash.component';

@Component({
  selector: 'app-blank-layout',
  imports: [FooterComponent, RouterLink, NavbarComponent, SplashComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {
  isLoading = true; // 3. Loading flag

  ngOnInit(): void {
    // Simulate app initialization time (e.g., fetching user data, config, etc.)
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Hide splash screen after 3 seconds
  }
}
