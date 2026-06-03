import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';

interface onDestroy {
}

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar implements OnInit, onDestroy {
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
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.clickOutside);
    document.body.style.overflow = '';
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
