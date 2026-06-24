import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { Toolbar } from './shared/toolbar/toolbar';
import { Footer } from './shared/footer/footer';
import { Direcciones } from './pages/direcciones/direcciones';
import { Contacto } from './pages/contacto/contacto';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { Inicio } from './pages/inicio/inicio';
import { AcademicaYPromocionCultural } from './pages/direcciones/academica-y-promocion-cultural/academica-y-promocion-cultural';
import { BibliotecaYCentroDeDocumentacion } from './pages/direcciones/biblioteca-y-centro-de-documentacion/biblioteca-y-centro-de-documentacion';
import { BienestarSocial } from './pages/direcciones/bienestar-social/bienestar-social';
import { ComisionesYConsultas } from './pages/direcciones/comisiones-y-consultas/comisiones-y-consultas';
import { ComunicacionesEInformaticaJuridica } from './pages/direcciones/comunicaciones-e-informatica-juridica/comunicaciones-e-informatica-juridica';
import { DefensaGremial } from './pages/direcciones/defensa-gremial/defensa-gremial';
import { DerechosHumanos } from './pages/direcciones/derechos-humanos/derechos-humanos';
import { Economia } from './pages/direcciones/economia/economia';
import { EticaProfesional } from './pages/direcciones/etica-profesional/etica-profesional';
import { ExtensionSocialYParticipacion } from './pages/direcciones/extension-social-y-participacion/extension-social-y-participacion';
import { Institucional } from './pages/institucional/institucional';
import { Publicaciones } from './pages/publicaciones/publicaciones';

@NgModule({
  declarations: [
    App,
    Toolbar,
    Footer,
    Direcciones,
    Contacto,
    Inicio,
    AcademicaYPromocionCultural,
    BibliotecaYCentroDeDocumentacion,
    BienestarSocial,
    ComisionesYConsultas,
    ComunicacionesEInformaticaJuridica,
    DefensaGremial,
    DerechosHumanos,
    Economia,
    EticaProfesional,
    ExtensionSocialYParticipacion,
    Institucional,
    Publicaciones,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    // Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
  ],

  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
