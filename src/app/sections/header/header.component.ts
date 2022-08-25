import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navItems: {label: string, href?: string}[] = [
    {
      label: 'home'
    },
    {
      label: 'about us',
      href: 'about'
    },
    {
      label: 'services'
    },
    {
      label: 'technologies'
    }
  ];
}
