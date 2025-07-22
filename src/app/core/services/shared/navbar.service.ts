import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  showLogout = signal<boolean>(false);
  constructor() {}
}
