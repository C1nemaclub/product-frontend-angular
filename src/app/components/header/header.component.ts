import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links: any = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
    {
      label: 'About',
      link: '/about',
    },
  ];

  ngOnInit() {}
}
