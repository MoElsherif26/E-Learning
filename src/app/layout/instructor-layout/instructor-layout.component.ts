import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instructor-layout',
  imports: [SidebarComponent, FooterComponent, NavbarComponent, RouterOutlet],
  templateUrl: './instructor-layout.component.html',
  styleUrl: './instructor-layout.component.scss'
})
export class InstructorLayoutComponent {

}
