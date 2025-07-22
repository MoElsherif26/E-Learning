import {
  Component,
  computed,
  inject,
  Input,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../core/services/shared/sidebar.service';
import { AuthService } from '../../core/services/api_calls/auth.service';
import { NavbarService } from '../../core/services/shared/navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sideBarService = inject(SidebarService);
  authSerivce = inject(AuthService);
  navbarService = inject(NavbarService);
  showLogoutButton = computed(() => this.navbarService.showLogout());
  toggleSideBar() {
    this.sideBarService.showSideBar.set(!this.sideBarService.showSideBar());
    console.log(this.sideBarService.showSideBar());
  }
  logout(): void {
    console.log('logout');
    this.authSerivce.logout();
  }
}
