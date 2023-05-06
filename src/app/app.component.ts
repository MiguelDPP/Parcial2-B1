import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Misión y Visión', url: '/mision-and-vision', icon: 'clipboard' },
    { title: 'Servicios', url: '/services', icon: 'apps' },
    { title: 'Contacto', url: '/contact', icon: 'people' },
    { title: 'Restaurante', url: '/restaurant', icon: 'restaurant' },
  ];
  constructor() {}
}
