import { Component, inject, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NavbarService } from '../../core/services/shared/navbar.service';

@Component({
  selector: 'app-teacher-layout',
  imports: [SidebarComponent, FooterComponent, NavbarComponent, RouterOutlet],
  templateUrl: './teacher-layout.component.html',
  styleUrl: './teacher-layout.component.scss',
})
export class TeacherLayoutComponent implements OnInit {
  navbarService = inject(NavbarService);
  ngOnInit(): void {
    this.navbarService.showLogout.set(true);
  }
}
