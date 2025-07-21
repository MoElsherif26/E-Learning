import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  showSideBar = signal<boolean>(true);
  constructor() { }
}
