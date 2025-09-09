import { Component, OnInit } from '@angular/core';

import { IMenuLabelRoute } from 'src/app/interface/IMenu';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit{

  menuItems: IMenuLabelRoute[] = [
    { label: 'Inicio', route: '/home' },
    { label: 'Quiénes somos', route: '/about' },
    { label: 'Servicios', route: '/services' },
    { label: 'Clientes', route: '/clients' },
    { label: 'Blog', route: '/blog' },
    { label: 'Segunda mano', route: '/used' },
    { label: 'Contacto', route: '/contact' }
  ];

  constructor(){}
  ngOnInit(): void {
    
  }
}
