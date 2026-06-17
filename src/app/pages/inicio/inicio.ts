import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

export interface QuickLink { title: string; url: string; svgIcon: SafeHtml; }
export interface SlideItem { imageUrl: string; link: string; }
export interface NewsItem { title: string; category: string; fechaPublicacion: string; excerpt: string; imageUrl: string; link: string; }
export interface AnnouncementItem { day: string; month: string; title: string; description: string; link: string; }
export interface ScheduleItem { title: string; address: string; hoursLine1: string; hoursLine2?: string; hoursLine3?: string; mapLink: string; }
export interface VideoItem { subtitle: string; title: string; url: string; safeUrl?: SafeResourceUrl; }

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit, OnDestroy {
  
  // ==========================================
  // ARREGLO 1: IMÁGENES PANORÁMICAS (Banner Superior en PC)
  // ==========================================
  panoramicSlides: SlideItem[] = [
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2024/12/PORTADA-DIA-NORMAL.jpg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/SLIDER-4-ASAMBLEA-10-DE-JUNIO-2026-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/SLIDER-3-DNA-v2-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2025/07/SLIDEER-MAPA.jpg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2025/11/RECURSOS-1.jpg', link: '/' }
  ];

  // ==========================================
  // ARREGLO 2: IMÁGENES CUADRADAS (Banner Superior en MÓVIL)
  // ==========================================
  mobileSquareSlides: SlideItem[] = [
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/BANER-I-CONGRESO-DE-ARBITRAJE-CEARCAL-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/Diplomado-2-banner.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/BANER-CONCILIACION-JUNIO-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/SPIJ-BANNER.jpeg', link: '/' }
  ];

  // ==========================================
  // ARREGLO 3: IMÁGENES CARRUSEL LATERAL (Visible en PC y Móvil)
  // ==========================================
  sideSquareSlides: SlideItem[] = [
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/BANER-CONVOCATORIA-COMISIONES-Y-CONSULTAS-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/BANER-CONVOCATORIA-DDHH.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/BANER-CONVOCATORIA-EXTENSION-SOCIAL.jpeg', link: '/' }
  ];

  // ESTADOS DEL BANNER PRINCIPAL (PC)
  desktopIndex: number = 0;
  desktopProgress: number = 0;
  desktopInterval: any;
  isDesktopPaused: boolean = false;
  isDesktopTransitioning: boolean = false;
  touchStartDesktopX: number = 0; touchEndDesktopX: number = 0; isDraggingDesktop: boolean = false;

  // ESTADOS DEL BANNER PRINCIPAL (MÓVIL)
  mobileIndex: number = 0;
  mobileProgress: number = 0;
  mobileInterval: any;
  isMobilePaused: boolean = false;
  isMobileTransitioning: boolean = false;
  touchStartMobileX: number = 0; touchEndMobileX: number = 0; isDraggingMobile: boolean = false;

  // ESTADOS DEL CARRUSEL LATERAL (AMBOS)
  sideIndex: number = 0;
  sideInterval: any;
  isSidePaused: boolean = false;
  touchStartSideX: number = 0; touchEndSideX: number = 0;

  // ==========================================
  // DATOS DEL RESTO DE LA PÁGINA
  // ==========================================
  rawQuickLinks = [
    { title: 'Pago online e impresión', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' },
    { title: 'Consulta de deuda', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-8"></path><path d="M9.5 10a2.5 2.5 0 1 1 5 0c0 1.5-5 2.5-5 4a2.5 2.5 0 1 0 5 0"></path></svg>' },
    { title: 'Nuevas incorporaciones', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>' },
    { title: 'Incorp. de otros colegios', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>' },
    { title: 'Biblioteca Virtual', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>' },
    { title: 'Consulta de habilidad', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' },
    { title: 'Mesa de partes virtual', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>' },
    { title: 'Devolución de pagos errados', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>' },
    { title: 'Libro de reclamaciones', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>' },
    { title: 'Recarnetización', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>' },
    { title: 'Conoce a tu Juez Abogado', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
    { title: 'Abogados voluntarios', url: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>' }
  ];
  quickLinks: QuickLink[] = [];

  latestNews: NewsItem[] = [
    { title: 'Diplomado Especializado en Nuevas tendencias del Derecho Familiar', category: 'Formación Integral', fechaPublicacion: '12 JUN, 2026', excerpt: 'Aprende las actualizaciones más recientes en derecho de familia con nuestros expertos invitados de alto nivel...', imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/FORMACION-INTEGRAL.jpg', link: '#' },
    { title: 'Corte Suprema de Justicia: Selección de Personal CAS', category: 'Convocatoria', fechaPublicacion: '09 JUN, 2026', excerpt: 'Conoce los requisitos, bases y el cronograma para la selección de personal bajo la modalidad CAS D. Leg. N° 115...', imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/PORTADA-CONVOCATORIA-VARIOS.jpg-scaled.jpeg', link: '#' },
    { title: 'Diplomado Especializado en Políticas Públicas contra la violencia', category: 'Formación Integral', fechaPublicacion: '05 JUN, 2026', excerpt: 'Un enfoque integral para abordar la violencia hacia las mujeres e integrantes del grupo familiar...', imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/FORMACION-INTEGRAL.jpg', link: '#' },
    { title: 'Curso - Conciliación Extrajudicial', category: 'Formación Integral', fechaPublicacion: '08 JUN, 2026', excerpt: 'Participa en nuestro próximo curso para especializarte en temas de conciliación extrajudicial.', imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/FORMACION-INTEGRAL.jpg', link: '#' },
    { title: 'Corte Suprema de Justicia: Selección de Personal N. 110-2026', category: 'Convocatoria', fechaPublicacion: '08 JUN, 2026', excerpt: 'El Comité de Selección de Personal Ad Hoc de la Corte Suprema de Justicia invita a...', imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/PORTADA-CONVOCATORIA-VARIOS.jpg-scaled.jpeg', link: '#' }
  ];

  announcements: AnnouncementItem[] = [
    { day: '15', month: 'FEB', title: 'Suspensión de Actividades por Elecciones Generales 2026', description: 'Ver comunicado en formato PDF', link: '#' },
    { day: '12', month: 'FEB', title: 'Pronunciamiento sobre el señalamiento del domicilio procesal', description: 'Procesos contenciosos y no contenciosos ante el Poder Judicial', link: '#' },
    { day: '08', month: 'FEB', title: 'CAL expresa su preocupación por decisiones del Gobierno', description: 'Inseguridad jurídica en materia contractual y obras de infraestructura', link: '#' },
    { day: '02', month: 'FEB', title: 'Comunicado del Comité Electoral', description: 'Respecto a las próximas elecciones institucionales del CAL', link: '#' },
    { day: '28', month: 'ENE', title: 'Convocatoria a Asamblea General Ordinaria', description: 'Presentación de memoria anual y balance general a los agremiados', link: '#' },
    { day: '20', month: 'ENE', title: 'Actualización del Cuadro de Valores', description: 'Nuevas tarifas para trámites administrativos, certificados y colegiatura', link: '#' }
  ];

  schedules: ScheduleItem[] = [
    { title: 'Sede Miraflores', address: 'Av. Santa Cruz N° 255', hoursLine1: 'Lunes a viernes: 8 a.m. a 6 p.m.', hoursLine2: 'Sábados: 8 a.m. a 1 p.m.', hoursLine3: 'Teléfono: 710-6600', mapLink: 'https://maps.google.com/?q=Av.+Santa+Cruz+255,+Miraflores' },
    { title: 'Lima Centro', address: 'Jr. Lampa N° 1174', hoursLine1: 'Lunes a viernes: 8 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 710-6600 Anexo 6791 / 710-6600 Anexo 6780', mapLink: 'https://maps.google.com/?q=Jr.+Lampa+1174,+Lima' },
    { title: 'Lima Norte', address: 'Calle San Héctor N° 219, Los Olivos', hoursLine1: 'Lunes a viernes: 8 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 710-6600 Anexo 6680', mapLink: 'https://maps.google.com/?q=Calle+San+Héctor+219,+Los+Olivos' },
    { title: 'Caja Policlínico', address: 'Jr. Luis Sáenz N° 232, Jesús María', hoursLine1: 'Lunes a viernes: 9 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 463-1755 / 261-5169', mapLink: 'https://maps.google.com/?q=Jr.+Luis+Sáenz+232,+Jesús+María' },
    { title: 'Caja CECAL', address: 'Alt. Km 40.5 Carretera Central Ricardo Palma', hoursLine1: 'Miércoles a domingo: 9 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 353-9584 / 353-9616', mapLink: 'https://maps.google.com/?q=Km+40.5+Carretera+Central,+Ricardo+Palma' }
  ];

  videos: VideoItem[] = [
    { subtitle: 'Lo más destacado', title: '¡El Policlínico del CAL al servicio del agremiado!', url: 'https://youtu.be/KTzimDzi40w' },
    { subtitle: 'Últimos videos', title: 'CECAL: ¡Un espacio renovado para nuestros agremiados y sus familias!', url: 'https://youtu.be/A1TWie-_Jlk' }
  ];

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.startDesktopTimer();
    this.startMobileTimer();
    this.startSideTimer();

    this.quickLinks = this.rawQuickLinks.map(link => ({
      title: link.title, url: link.url, svgIcon: this.sanitizer.bypassSecurityTrustHtml(link.icon)
    }));

    this.videos.forEach(video => {
      const embedUrl = this.formatYouTubeUrl(video.url);
      video.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    });
  }

  private formatYouTubeUrl(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return 'https://www.youtube.com/embed/' + match[2];
    }
    return url;
  }

  ngOnDestroy() {
    clearInterval(this.desktopInterval);
    clearInterval(this.mobileInterval);
    clearInterval(this.sideInterval);
  }

  // ==========================================
  // LÓGICA: BANNER PRINCIPAL (PC - PANORÁMICO)
  // ==========================================
  startDesktopTimer() {
    this.desktopInterval = setInterval(() => {
      if (!this.isDesktopPaused && !this.isDesktopTransitioning && this.panoramicSlides.length > 0) {
        this.desktopProgress += (20 / 4000) * 100;
        if (this.desktopProgress >= 100) this.nextDesktopSlide();
        this.cdr.detectChanges();
      }
    }, 20);
  }
  pauseDesktop() { this.isDesktopPaused = true; }
  resumeDesktop() { this.isDesktopPaused = false; }
  getDesktopSegmentWidth(i: number) { return i < this.desktopIndex ? 100 : (i === this.desktopIndex ? this.desktopProgress : 0); }
  
  nextDesktopSlide() {
    if (this.isDesktopTransitioning) return;
    this.isDesktopTransitioning = true; this.desktopProgress = 0;
    this.desktopIndex = (this.desktopIndex + 1) % this.panoramicSlides.length;
    setTimeout(() => this.isDesktopTransitioning = false, 600);
  }
  prevDesktopSlide() {
    if (this.isDesktopTransitioning) return;
    this.isDesktopTransitioning = true; this.desktopProgress = 0;
    this.desktopIndex = (this.desktopIndex - 1 + this.panoramicSlides.length) % this.panoramicSlides.length;
    setTimeout(() => this.isDesktopTransitioning = false, 600);
  }
  goToDesktopSlide(i: number) { this.desktopProgress = 0; this.desktopIndex = i; }
  
  getDesktopClass(i: number) {
    if (i === this.desktopIndex) return 'active';
    if (i === (this.desktopIndex - 1 + this.panoramicSlides.length) % this.panoramicSlides.length) return 'prev';
    if (i === (this.desktopIndex + 1) % this.panoramicSlides.length) return 'next';
    return 'hidden';
  }

  onDesktopTouchStart(e: TouchEvent) { this.pauseDesktop(); this.touchStartDesktopX = e.changedTouches[0].screenX; }
  onDesktopTouchEnd(e: TouchEvent) { this.touchEndDesktopX = e.changedTouches[0].screenX; this.handleDesktopSwipe(); this.resumeDesktop(); }
  onDesktopMouseDown(e: MouseEvent) { this.pauseDesktop(); this.isDraggingDesktop = true; this.touchStartDesktopX = e.clientX; }
  onDesktopMouseUp(e: MouseEvent) { if (!this.isDraggingDesktop) return; this.isDraggingDesktop = false; this.touchEndDesktopX = e.clientX; this.handleDesktopSwipe(); this.resumeDesktop(); }
  onDesktopMouseLeave() { this.isDraggingDesktop = false; this.resumeDesktop(); }
  handleDesktopSwipe() { const d = this.touchStartDesktopX - this.touchEndDesktopX; if (d > 50) this.nextDesktopSlide(); else if (d < -50) this.prevDesktopSlide(); }
  onDesktopClick(e: MouseEvent) { if (Math.abs(this.touchStartDesktopX - this.touchEndDesktopX) > 15) e.preventDefault(); }

  // ==========================================
  // LÓGICA: BANNER PRINCIPAL (MÓVIL - CUADRADO)
  // ==========================================
  startMobileTimer() {
    this.mobileInterval = setInterval(() => {
      if (!this.isMobilePaused && !this.isMobileTransitioning && this.mobileSquareSlides.length > 0) {
        this.mobileProgress += (20 / 4000) * 100;
        if (this.mobileProgress >= 100) this.nextMobileSlide();
        this.cdr.detectChanges();
      }
    }, 20);
  }
  pauseMobile() { this.isMobilePaused = true; }
  resumeMobile() { this.isMobilePaused = false; }
  getMobileSegmentWidth(i: number) { return i < this.mobileIndex ? 100 : (i === this.mobileIndex ? this.mobileProgress : 0); }
  
  nextMobileSlide() {
    if (this.isMobileTransitioning) return;
    this.isMobileTransitioning = true; this.mobileProgress = 0;
    this.mobileIndex = (this.mobileIndex + 1) % this.mobileSquareSlides.length;
    setTimeout(() => this.isMobileTransitioning = false, 600);
  }
  prevMobileSlide() {
    if (this.isMobileTransitioning) return;
    this.isMobileTransitioning = true; this.mobileProgress = 0;
    this.mobileIndex = (this.mobileIndex - 1 + this.mobileSquareSlides.length) % this.mobileSquareSlides.length;
    setTimeout(() => this.isMobileTransitioning = false, 600);
  }
  goToMobileSlide(i: number) { this.mobileProgress = 0; this.mobileIndex = i; }
  
  getMobileClass(i: number) {
    if (i === this.mobileIndex) return 'active';
    if (i === (this.mobileIndex - 1 + this.mobileSquareSlides.length) % this.mobileSquareSlides.length) return 'prev';
    if (i === (this.mobileIndex + 1) % this.mobileSquareSlides.length) return 'next';
    return 'hidden';
  }

  onMobileTouchStart(e: TouchEvent) { this.pauseMobile(); this.touchStartMobileX = e.changedTouches[0].screenX; }
  onMobileTouchEnd(e: TouchEvent) { this.touchEndMobileX = e.changedTouches[0].screenX; this.handleMobileSwipe(); this.resumeMobile(); }
  onMobileMouseDown(e: MouseEvent) { this.pauseMobile(); this.isDraggingMobile = true; this.touchStartMobileX = e.clientX; }
  onMobileMouseUp(e: MouseEvent) { if (!this.isDraggingMobile) return; this.isDraggingMobile = false; this.touchEndMobileX = e.clientX; this.handleMobileSwipe(); this.resumeMobile(); }
  onMobileMouseLeave() { this.isDraggingMobile = false; this.resumeMobile(); }
  handleMobileSwipe() { const d = this.touchStartMobileX - this.touchEndMobileX; if (d > 50) this.nextMobileSlide(); else if (d < -50) this.prevMobileSlide(); }
  onMobileClick(e: MouseEvent) { if (Math.abs(this.touchStartMobileX - this.touchEndMobileX) > 15) e.preventDefault(); }

  // ==========================================
  // LÓGICA: CARRUSEL LATERAL (SIEMPRE VISIBLE - CUADRADO)
  // ==========================================
  startSideTimer() {
    this.sideInterval = setInterval(() => {
      if (!this.isSidePaused && this.sideSquareSlides.length > 0) this.nextSideSlide();
    }, 4000); 
  }
  pauseSide() { this.isSidePaused = true; }
  resumeSide() { this.isSidePaused = false; }
  
  nextSideSlide() { 
    this.sideIndex = (this.sideIndex + 1) % this.sideSquareSlides.length; 
    this.cdr.detectChanges(); 
  }
  prevSideSlide() { 
    this.sideIndex = (this.sideIndex - 1 + this.sideSquareSlides.length) % this.sideSquareSlides.length; 
    this.cdr.detectChanges(); 
  }

  onSideTouchStart(e: TouchEvent) { this.pauseSide(); this.touchStartSideX = e.changedTouches[0].screenX; }
  onSideTouchEnd(e: TouchEvent) { this.touchEndSideX = e.changedTouches[0].screenX; this.handleSideSwipe(); this.resumeSide(); }
  handleSideSwipe() { const d = this.touchStartSideX - this.touchEndSideX; if (d > 50) this.nextSideSlide(); else if (d < -50) this.prevSideSlide(); }
}