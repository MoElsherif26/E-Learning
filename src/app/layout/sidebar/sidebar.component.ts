import { Component, Input, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../core/services/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() userType!: string;
  sidebarService = inject(SidebarService);
  isSidebarVisible = computed(() => this.sidebarService.showSideBar());
}
