import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../core/services/shared/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sideBarService = inject(SidebarService);
  toggleSideBar() {
    this.sideBarService.showSideBar.set(!this.sideBarService.showSideBar());
    console.log(this.sideBarService.showSideBar());
  }
}
