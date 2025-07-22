import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarService } from '../../core/services/shared/navbar.service';

@Component({
  selector: 'app-admin-layout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent, SidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent implements OnInit {
  navbarService = inject(NavbarService);
  ngOnInit(): void {
    this.navbarService.showLogout.set(true);
  }
}
