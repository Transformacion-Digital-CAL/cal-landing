import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.html',
  styleUrls: ['./publicaciones.css'],
  standalone: false
})
export class Publicaciones implements OnInit {
  
  categories: string[] = [
    'Notas de Prensa', 
    'Comunicados', 
    'Avisos', 
    'Formación Integral',
    'Convocatorias'
  ];
  
  selectedCategory: string = 'Todos';

  currentPage: number = 1;
  itemsPerPage: number = 12; 

  publications = [
    {
      category: 'Notas de Prensa',
      title: 'Decana del CAL firma convenios con Palestra Editores para fortalecer la capacitación',
      date: '18 JUN, 2026',
      excerpt: 'La decana del Ilustre Colegio de Abogados de Lima (CAL), Dra. Espinoza Valenzuela, y el representante de la editorial firmaron un importante acuerdo...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/NOTAS-DE-PRENSA.jpg',
      link: '#'
    },
    {
      category: 'Notas de Prensa',
      title: 'CAL y OLTURSA firman convenio en favor de los agremiados y sus familiares',
      date: '16 JUN, 2026',
      excerpt: 'El Ilustre Colegio de Abogados de Lima y la Empresa de Transporte Turístico Olano suscribieron un convenio que otorga tarifas preferenciales...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/NOTAS-DE-PRENSA.jpg',
      link: '#'
    },
    {
      category: 'Notas de Prensa',
      title: 'Exitosa jornada de asesoría legal gratuita en el distrito de San Juan de Lurigancho',
      date: '10 JUN, 2026',
      excerpt: 'Decenas de ciudadanos recibieron orientación jurídica gratuita por parte de los abogados voluntarios de nuestra ilustre orden...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/NOTAS-DE-PRENSA.jpg',
      link: '#'
    },
    {
      category: 'Comunicados',
      title: 'Llamado urgente a la acción frente a la crisis de derechos humanos e impunidad institucional',
      date: '23 JUN, 2026',
      excerpt: 'La Junta Directiva del CAL emite el presente comunicado para expresar su profunda preocupación ante los recientes acontecimientos nacionales...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/COMUNICADOS.jpg',
      link: '#'
    },
    {
      category: 'Comunicados',
      title: 'Resultados del Proceso de Selección y Contratación Pública N°001-2026-CAL',
      date: '17 JUN, 2026',
      excerpt: 'Por medio del presente comunicado, se hacen de conocimiento público los resultados correspondientes a la evaluación curricular y entrevistas...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/COMUNICADOS.jpg',
      link: '#'
    },
    {
      category: 'Comunicados',
      title: 'Suspensión temporal de atención presencial en la sede de Miraflores',
      date: '12 JUN, 2026',
      excerpt: 'Se informa a todos los agremiados que, debido a trabajos de mantenimiento preventivo, la sede Miraflores suspenderá su atención el día de mañana...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/COMUNICADOS.jpg',
      link: '#'
    },
    {
      category: 'Avisos',
      title: 'Campaña de vacunación contra la Influenza y Neumococo para agremiados',
      date: '20 JUN, 2026',
      excerpt: 'Acércate este fin de semana a nuestra sede central en Miraflores portando tu carnet de abogado para acceder a la campaña de inmunización...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/AVISOS.jpg',
      link: '#'
    },
    {
      category: 'Avisos',
      title: 'Actualización obligatoria de datos en el sistema del CAL',
      date: '14 JUN, 2026',
      excerpt: 'Recordamos a todos los miembros de la orden que tienen hasta fin de mes para actualizar sus correos electrónicos y teléfonos en la intranet...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/AVISOS.jpg',
      link: '#'
    },
    {
      category: 'Avisos',
      title: 'Entrega de medallas y diplomas para nuevos colegiados rezagados',
      date: '02 JUN, 2026',
      excerpt: 'Los abogados que no pudieron asistir a la última ceremonia de colegiatura podrán recoger sus distintivos en la Dirección Académica...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/02/AVISOS.jpg',
      link: '#'
    },
    {
      category: 'Formación Integral',
      title: 'Diplomado Especializado en Nuevas tendencias del Derecho Familiar',
      date: '12 JUN, 2026',
      excerpt: 'Aprende las actualizaciones más recientes en derecho de familia con nuestros expertos invitados de alto nivel. Inicio de clases este 15 de julio...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/FORMACION-INTEGRAL.jpg',
      link: '#'
    },
    {
      category: 'Formación Integral',
      title: 'Diplomado Especializado en Políticas Públicas contra la violencia',
      date: '05 JUN, 2026',
      excerpt: 'Un enfoque integral para abordar la violencia hacia las mujeres e integrantes del grupo familiar. Certificación a nombre del Colegio...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/FORMACION-INTEGRAL.jpg',
      link: '#'
    },
    {
      category: 'Formación Integral',
      title: 'Seminario Internacional: Inteligencia Artificial aplicada al Derecho',
      date: '22 MAY, 2026',
      excerpt: 'Descubre cómo las nuevas herramientas de IA generativa están transformando la redacción jurídica, el análisis de jurisprudencia y la gestión de despachos...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/FORMACION-INTEGRAL.jpg',
      link: '#'
    },
    {
      category: 'Convocatorias',
      title: 'Corte Suprema de Justicia: Selección de Personal CAS',
      date: '09 JUN, 2026',
      excerpt: 'Conoce los requisitos, bases y el cronograma para la selección de personal bajo la modalidad CAS D. Leg. N° 115 para diversas áreas jurisdiccionales...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/PORTADA-CONVOCATORIA-VARIOS.jpeg',
      link: '#'
    },
    {
      category: 'Convocatorias',
      title: 'Concurso Público de Méritos para la Procuraduría General del Estado',
      date: '01 JUN, 2026',
      excerpt: 'La Procuraduría General convoca a profesionales del derecho para cubrir más de 20 plazas a nivel nacional. Revisa los anexos adjuntos...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/PORTADA-CONVOCATORIA-VARIOS.jpeg',
      link: '#'
    },
    {
      category: 'Convocatorias',
      title: 'Convocatoria para Docentes Universitarios en la Academia de la Magistratura',
      date: '25 MAY, 2026',
      excerpt: 'La AMAG apertura su proceso de selección y registro de docentes tutores para el Programa de Formación de Aspirantes (PROFA) del presente año...',
      imageUrl: 'https://www.cal.org.pe/v1/wp-content/uploads/2026/06/PORTADA-CONVOCATORIA-VARIOS.jpeg',
      link: '#'
    }
  ];

  ngOnInit() {
    this.updateItemsPerPage();
    this.publications.sort((a, b) => this.parseDate(b.date) - this.parseDate(a.date));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage();
  }

  updateItemsPerPage() {
    if (window.innerWidth <= 768) {
      this.itemsPerPage = 5;
    } else {
      this.itemsPerPage = 12;
    }
    
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
  }

  parseDate(dateStr: string): number {
    const months: { [key: string]: number } = {
      'ENE': 0, 'FEB': 1, 'MAR': 2, 'ABR': 3, 'MAY': 4, 'JUN': 5,
      'JUL': 6, 'AGO': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DIC': 11
    };
    
    const parts = dateStr.replace(',', '').split(' ');
    
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = months[parts[1].toUpperCase()] || 0;
      const year = parseInt(parts[2], 10);
      
      return new Date(year, month, day).getTime();
    }
    
    return 0; 
  }

  get filteredPublications() {
    if (this.selectedCategory === 'Todos') {
      return this.publications;
    }
    return this.publications.filter(pub => pub.category === this.selectedCategory);
  }

  get paginatedPublications() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPublications.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPublications.length / this.itemsPerPage);
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1; 
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}