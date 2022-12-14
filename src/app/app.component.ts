import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected navLinks = [
    { index: '00', link: 'home' },
    { index: '01', link: 'destination' },
    { index: '02', link: 'crew' },
    { index: '03', link: 'technology' },
  ];
  protected active = 0;
  protected mobileMenu: boolean = true;
}
