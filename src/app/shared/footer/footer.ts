import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  currentYear: number = new Date().getFullYear();

  socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fab fa-youtube', url: '#', label: 'YouTube' },
    { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' },
  ];

  headquarters = [
    { name: 'Lima Centro', address: 'Jr. Lampa N° 1174' },
    { name: 'San Isidro', address: 'Av. Santa Cruz 252' },
    { name: 'Lima Norte', address: 'Calle San Héctor 219, Los Olivos' },
    { name: 'CECAL - Chosica', address: 'Km. 40.5 de la Carretera Central' },
    { name: 'Policlínico CAL', address: 'Calle Luis N. Sáenz 232, Jesús María' },
  ];

  quickLinks = [
    { text: 'Bolsa de Trabajo', url: '#' },
    { text: 'Tabla de Honorarios', url: '#' },
    { text: 'Buzón de Sugerencias', url: '#' },
    { text: 'Cuadro de Aranceles', url: '#' },
    { text: 'Normas Legales - El Peruano', url: '#' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
