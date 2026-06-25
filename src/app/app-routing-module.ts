import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Direcciones } from './pages/direcciones/direcciones';
import { Contacto } from './pages/contacto/contacto';
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
import {
  ExtensionSocialYParticipacion
} from './pages/direcciones/extension-social-y-participacion/extension-social-y-participacion';
import { Decanato } from './pages/decanato/decanato';
import { Vicedecanato } from './pages/decanato/vicedecanato/vicedecanato';
import { SecretariaGeneral } from './pages/decanato/secretaria-general/secretaria-general';
import { Publicaciones } from './pages/publicaciones/publicaciones';
import { Institucional } from './pages/institucional/institucional';
import { CajaDePrevisionSocial } from './pages/otras-areas/caja-de-prevision-social/caja-de-prevision-social';
import { ComiteElectoral } from './pages/otras-areas/comite-electoral/comite-electoral';
import { JuntaDeVigilancia } from './pages/otras-areas/junta-de-vigilancia/junta-de-vigilancia';
import { DelegadosDeLaOrden } from './pages/otras-areas/delegados-de-la-orden/delegados-de-la-orden';


const routes: Routes = [
  { path: '', component: Inicio },

  { path: 'institucional', component: Institucional },

  // Decanato
  { path: 'decanato', component: Decanato },
  { path: 'vicedecanato', component: Vicedecanato },
  { path: 'secretaria-general', component: SecretariaGeneral },

  // Direcciones
  { path: 'direcciones', component: Direcciones },
  { path: 'academica-y-promocion-cultural', component: AcademicaYPromocionCultural },
  { path: 'biblioteca-y-centro-de-documentacion', component: BibliotecaYCentroDeDocumentacion },
  { path: 'bienestar-social', component: BienestarSocial },
  { path: 'comisiones-y-consultas', component: ComisionesYConsultas },
  { path: 'comunicaciones-e-informatica-juridica', component: ComunicacionesEInformaticaJuridica },
  { path: 'defensa-gremial', component: DefensaGremial },
  { path: 'derechos-humanos', component: DerechosHumanos },
  { path: 'economia', component: Economia },
  { path: 'etica-profesional', component: EticaProfesional },
  { path: 'extensión-social-y-participacion', component: ExtensionSocialYParticipacion },

  // Otras Areas
  { path: 'caja-de-prevision-social', component: CajaDePrevisionSocial },
  { path: 'comite-electoral', component: ComiteElectoral },
  { path: 'junta-de-vigilancia', component: JuntaDeVigilancia },
  { path: 'delegados-de-la-orden', component: DelegadosDeLaOrden },

  { path: 'publicaciones', component: Publicaciones },
  { path: 'contacto', component: Contacto },

  { path: 'contacto', component: Contacto },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
