import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NavbarService } from '../../core/services/shared/navbar.service';

@Component({
  selector: 'app-student-layout',
  imports: [FooterComponent, SidebarComponent, NavbarComponent, RouterOutlet],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss',
})
export class StudentLayoutComponent implements OnInit {
  navbarService = inject(NavbarService);
  ngOnInit(): void {
    this.navbarService.showLogout.set(true);
  }
}
