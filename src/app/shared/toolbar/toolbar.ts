import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  scrolled = false;
  menuOpen = false;
  activeDropdown = '';
  mobileOpen = '';

  private clickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.navbar__nav-item--dropdown')) {
      this.activeDropdown = '';
    }
  };

  ngOnInit(): void {
    document.addEventListener('click', this.clickOutside);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeDropdown = '';
      }
    });
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.clickOutside);
    document.body.style.overflow = '';
  }

  isDireccionesSection(): boolean {
    const url = this.router.url;

    return [
      '/direcciones',
      '/academica-y-promocion-cultural',
      '/biblioteca-y-centro-de-documentacion',
      '/bienestar-social',
      '/comisiones-y-consultas',
      '/comunicaciones-e-informatica-juridica',
      '/defensa-gremial',
      '/derechos-humanos',
      '/economia',
      '/etica-profesional',
      '/extension-social-y-participacion',
    ].includes(url);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
    if (this.scrolled) this.activeDropdown = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeAll();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.mobileOpen = '';
    document.body.style.overflow = '';
  }

  toggleDropdown(name: string): void {
    this.activeDropdown = this.activeDropdown === name ? '' : name;
  }

  toggleMobile(name: string): void {
    this.mobileOpen = this.mobileOpen === name ? '' : name;
  }

  closeAll(): void {
    this.activeDropdown = '';
    this.closeMenu();
  }
}
