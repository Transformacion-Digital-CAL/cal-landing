import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-v2',
  standalone: false,
  templateUrl: './footer-v2.html',
  styleUrl: './footer-v2.css',
})
export class FooterV2 {
  readonly currentYear = new Date().getFullYear();
}
