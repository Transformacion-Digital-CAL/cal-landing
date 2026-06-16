import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

// Interfaz para los botones de accesos directos
export interface QuickLink {
  title: string;
  url: string;
  svgIcon: SafeHtml;
}

// Interfaz reutilizable para los banners dinámicos
export interface SlideItem {
  imageUrl: string;
  link: string;
}

// Interfaz para las Noticias
export interface NewsItem {
  title: string;
  category: string;
  fechaPublicacion: string; 
  excerpt: string;
  imageUrl: string;
  link: string;
}

// Interfaz para los Comunicados Oficiales
export interface AnnouncementItem {
  day: string;
  month: string;
  title: string;
  description: string;
  link: string;
}

// Interfaz para las Sedes (Horarios y Mapas)
export interface ScheduleItem {
  title: string;
  address: string;
  hoursLine1: string;
  hoursLine2?: string;
  hoursLine3?: string;
  mapLink: string; 
}

// NUEVA: Interfaz para los Videos de YouTube
export interface VideoItem {
  subtitle: string;
  title: string;
  url: string;
  safeUrl?: SafeResourceUrl; 
}

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit, OnDestroy {
  
  // ==========================================
  // 1. ARREGLO DINÁMICO DEL BANNER PRINCIPAL
  // ==========================================
  heroSlides: SlideItem[] = [
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2024/12/PORTADA-DIA-NORMAL.jpg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/SLIDER-4-ASAMBLEA-10-DE-JUNIO-2026-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/SLIDER-3-DNA-v2-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2025/07/SLIDEER-MAPA.jpg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2025/11/RECURSOS-1.jpg', link: '/' }
  ];

  // ==========================================
  // 2. ARREGLO DINÁMICO DEL BANNER LATERAL
  // ==========================================
  sideBannerSlides: SlideItem[] = [
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/BANER-CONVOCATORIA-EXTENSION-SOCIAL.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/BANER-CONVOCATORIA-COMISIONES-Y-CONSULTAS-scaled.jpeg', link: '/' },
    { imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/BANER-CONVOCATORIA-DDHH.jpeg', link: '/' }
  ];

  // ==========================================
  // 3. ARREGLO DINÁMICO DE ACCESOS DIRECTOS
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

  // ==========================================
  // 4. ARREGLO DINÁMICO DE NOTICIAS
  // ==========================================
  latestNews: NewsItem[] = [
    {
      title: 'Diplomado Especializado en Nuevas tendencias del Derecho Familiar',
      category: 'Formación Integral',
      fechaPublicacion: '12 JUN, 2026',
      excerpt: 'Aprende las actualizaciones más recientes en derecho de familia con nuestros expertos invitados de alto nivel...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/FORMACION-INTEGRAL.jpg',
      link: '#'
    },
    {
      title: 'Corte Suprema de Justicia: Selección de Personal CAS',
      category: 'Convocatoria',
      fechaPublicacion: '09 JUN, 2026',
      excerpt: 'Conoce los requisitos, bases y el cronograma para la selección de personal bajo la modalidad CAS D. Leg. N° 115...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/PORTADA-CONVOCATORIA-VARIOS.jpg-scaled.jpeg',
      link: '#'
    },
    {
      title: 'Diplomado Especializado en Políticas Públicas contra la violencia',
      category: 'Formación Integral',
      fechaPublicacion: '05 JUN, 2026',
      excerpt: 'Un enfoque integral para abordar la violencia hacia las mujeres e integrantes del grupo familiar...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/FORMACION-INTEGRAL.jpg',
      link: '#'
    },
    {
      title: 'Curso - Conciliación Extrajudicial',
      category: 'Formación Integral',
      fechaPublicacion: '08 JUN, 2026',
      excerpt: 'Participa en nuestro próximo curso para especializarte en temas de conciliación extrajudicial.',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/FORMACION-INTEGRAL.jpg',
      link: '#'
    },
    {
      title: 'Corte Suprema de Justicia: Selección de Personal N. 110-2026',
      category: 'Convocatoria',
      fechaPublicacion: '08 JUN, 2026',
      excerpt: 'El Comité de Selección de Personal Ad Hoc de la Corte Suprema de Justicia invita a...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/05/PORTADA-CONVOCATORIA-VARIOS.jpg-scaled.jpeg',
      link: '#'
    }
  ];

  // ==========================================
  // 5. ARREGLO DINÁMICO DE COMUNICADOS
  // ==========================================
  announcements: AnnouncementItem[] = [
    { day: '15', month: 'FEB', title: 'Suspensión de Actividades por Elecciones Generales 2026', description: 'Ver comunicado en formato PDF', link: '#' },
    { day: '12', month: 'FEB', title: 'Pronunciamiento sobre el señalamiento del domicilio procesal', description: 'Procesos contenciosos y no contenciosos ante el Poder Judicial', link: '#' },
    { day: '08', month: 'FEB', title: 'CAL expresa su preocupación por decisiones del Gobierno', description: 'Inseguridad jurídica en materia contractual y obras de infraestructura', link: '#' },
    { day: '02', month: 'FEB', title: 'Comunicado del Comité Electoral', description: 'Respecto a las próximas elecciones institucionales del CAL', link: '#' },
    { day: '28', month: 'ENE', title: 'Convocatoria a Asamblea General Ordinaria', description: 'Presentación de memoria anual y balance general a los agremiados', link: '#' },
    { day: '20', month: 'ENE', title: 'Actualización del Cuadro de Valores', description: 'Nuevas tarifas para trámites administrativos, certificados y colegiatura', link: '#' }
  ];

  // ==========================================
  // 6. ARREGLO DINÁMICO DE SEDES 
  // ==========================================
  schedules: ScheduleItem[] = [
    { title: 'Sede Miraflores', address: 'Av. Santa Cruz N° 255', hoursLine1: 'Lunes a viernes: 8 a.m. a 6 p.m.', hoursLine2: 'Sábados: 8 a.m. a 1 p.m.', hoursLine3: 'Teléfono: 710-6600', mapLink: 'https://maps.google.com/?q=Av.+Santa+Cruz+255,+Miraflores' },
    { title: 'Lima Centro', address: 'Jr. Lampa N° 1174', hoursLine1: 'Lunes a viernes: 8 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 710-6600 Anexo 6791 / 710-6600 Anexo 6780', mapLink: 'https://maps.google.com/?q=Jr.+Lampa+1174,+Lima' },
    { title: 'Lima Norte', address: 'Calle San Héctor N° 219, Los Olivos', hoursLine1: 'Lunes a viernes: 8 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 710-6600 Anexo 6680', mapLink: 'https://maps.google.com/?q=Calle+San+Héctor+219,+Los+Olivos' },
    { title: 'Caja Policlínico', address: 'Jr. Luis Sáenz N° 232, Jesús María', hoursLine1: 'Lunes a viernes: 9 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 463-1755 / 261-5169', mapLink: 'https://maps.google.com/?q=Jr.+Luis+Sáenz+232,+Jesús+María' },
    { title: 'Caja CECAL', address: 'Alt. Km 40.5 Carretera Central Ricardo Palma', hoursLine1: 'Miércoles a domingo: 9 a.m. a 6 p.m.', hoursLine2: 'Teléfono: 353-9584 / 353-9616', mapLink: 'https://maps.google.com/?q=Km+40.5+Carretera+Central,+Ricardo+Palma' }
  ];

  // ==========================================
  // 7. ARREGLO DINÁMICO DE VIDEOS (YOUTUBE)
  // ==========================================
  videos: VideoItem[] = [
    {
      subtitle: 'Lo más destacado',
      title: '¡El Policlínico del CAL al servicio del agremiado!',
      url: 'https://www.youtube.com/embed/KTzimDzi40w'
    },
    {
      subtitle: 'Últimos videos',
      title: 'CECAL: ¡Un espacio renovado para nuestros agremiados y sus familias!',
      url: 'https://www.youtube.com/embed/aS92mCGvHvY'
    }
  ];

  // ==========================================
  // VARIABLES DE CONTROL GENERALES
  // ==========================================
  currentIndex: number = 0;
  totalSlides: number = 0; 
  isTransitioning: boolean = false;

  slideProgress: number = 0;        
  autoPlayInterval: any;            
  isPaused: boolean = false;        
  slideDuration: number = 4000;     
  tickRate: number = 20;            

  currentSideIndex: number = 0;
  sideBannerInterval: any;
  isSidePaused: boolean = false;

  touchStartX: number = 0;
  touchEndX: number = 0;
  isDragging: boolean = false; 

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.totalSlides = this.heroSlides.length; 
    this.startProgressTimer(); 
    this.startSideBannerTimer();

    this.quickLinks = this.rawQuickLinks.map(link => ({
      title: link.title,
      url: link.url,
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(link.icon)
    }));

    this.videos.forEach(video => {
      video.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
    });
  }

  ngOnDestroy() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    if (this.sideBannerInterval) clearInterval(this.sideBannerInterval);
  }

  // LOGICAS DEL COMPONENTE...
  startProgressTimer() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = setInterval(() => {
      if (!this.isPaused && !this.isTransitioning) {
        this.slideProgress += (this.tickRate / this.slideDuration) * 100;
        if (this.slideProgress >= 100) this.nextSlide();
        this.cdr.detectChanges(); 
      }
    }, this.tickRate);
  }

  pauseAutoPlay() { this.isPaused = true; }
  resumeAutoPlay() { this.isPaused = false; }

  getSegmentWidth(index: number): number {
    if (index < this.currentIndex) return 100; 
    if (index === this.currentIndex) return this.slideProgress; 
    return 0; 
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.slideProgress = 0; 
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    setTimeout(() => { this.isTransitioning = false; }, 600); 
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.slideProgress = 0; 
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    setTimeout(() => { this.isTransitioning = false; }, 600);
  }

  goToSlide(index: number) {
    if (this.isTransitioning || this.currentIndex === index) return;
    this.isTransitioning = true;
    this.slideProgress = 0; 
    this.currentIndex = index;
    setTimeout(() => { this.isTransitioning = false; }, 600);
  }

  startSideBannerTimer() {
    if (this.sideBannerInterval) clearInterval(this.sideBannerInterval);
    this.sideBannerInterval = setInterval(() => {
      if (!this.isSidePaused) {
        this.currentSideIndex = (this.currentSideIndex + 1) % this.sideBannerSlides.length;
        this.cdr.detectChanges();
      }
    }, 4000); 
  }

  pauseSideBanner() { this.isSidePaused = true; }
  resumeSideBanner() { this.isSidePaused = false; }

  nextSideSlide() {
    this.currentSideIndex = (this.currentSideIndex + 1) % this.sideBannerSlides.length;
    this.cdr.detectChanges();
  }

  prevSideSlide() {
    this.currentSideIndex = (this.currentSideIndex - 1 + this.sideBannerSlides.length) % this.sideBannerSlides.length;
    this.cdr.detectChanges();
  }

  onTouchStart(event: TouchEvent) {
    this.pauseAutoPlay();
    this.touchStartX = event.changedTouches[0].screenX;
  }
  
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
    this.resumeAutoPlay();
  }
  
  onMouseDown(event: MouseEvent) {
    this.pauseAutoPlay();
    this.isDragging = true;
    this.touchStartX = event.clientX;
  }
  
  onMouseUp(event: MouseEvent) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.touchEndX = event.clientX;
    this.handleSwipe();
    this.resumeAutoPlay();
  }
  
  onMouseLeave() {
    this.isDragging = false;
    this.resumeAutoPlay();
  }
  
  handleSwipe() {
    const swipeThreshold = 50; 
    const diff = this.touchStartX - this.touchEndX;
    if (diff > swipeThreshold) { this.nextSlide(); } else if (diff < -swipeThreshold) { this.prevSlide(); }
  }

  onSlideClick(event: MouseEvent) {
    const diff = Math.abs(this.touchStartX - this.touchEndX);
    if (diff > 15) {
      event.preventDefault(); 
    }
  }

  getSlideClass(index: number): string {
    if (index === this.currentIndex) return 'active';
    const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    if (index === prevIndex) return 'prev';
    if (index === nextIndex) return 'next';
    return 'hidden';
  }
}