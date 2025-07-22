import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarService } from '../../core/services/shared/navbar.service';

@Component({
  selector: 'app-auth-layout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent implements OnInit {
  navbarService = inject(NavbarService);
  ngOnInit(): void {
    this.navbarService.showLogout.set(false);
  }
}
