import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-v4',
  standalone: false,
  templateUrl: './footer-v4.html',
  styleUrl: './footer-v4.css',
})
export class FooterV4 {
  readonly currentYear = new Date().getFullYear();
}
