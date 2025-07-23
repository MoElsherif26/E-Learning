import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SplashComponent } from '../splash/splash.component';
import { AuthService } from '../../core/services/api_calls/auth.service';
import { ROUTES } from '../../core/constants';

@Component({
  selector: 'app-blank-layout',
  imports: [FooterComponent, RouterLink, NavbarComponent, SplashComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent implements OnInit {
  isLoading = true; // 3. Loading flag
  authService = inject(AuthService);
  route: string = '';

  ngOnInit(): void {
    this.authService.decodeData();

    console.log(this.authService.userData?.Id);

    if (this.authService.userData?.role === 'Admin')
      this.route = ROUTES.ADMIN.TEACHERS;
    else if (this.authService.userData?.role === 'Teacher')
      this.route = ROUTES.TEACHER.CLASSROOM;
    else if (this.authService.userData?.role === 'Student')
      this.route = ROUTES.STUDENT.MY_CLASSROOMS;
    else this.route = ROUTES.AUTH.LOGIN;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
