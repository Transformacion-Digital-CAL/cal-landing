import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-v3',
  standalone: false,
  templateUrl: './footer-v3.html',
  styleUrl: './footer-v3.css',
})
export class FooterV3 {
  readonly currentYear = new Date().getFullYear();
}
