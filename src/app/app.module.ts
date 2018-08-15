import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { CatalogosComponent } from './catalogoStuffs/catalogos/catalogos.component';
import { InicioComponent } from './othersStuffs/inicio/inicio.component';
import { TelasComponent } from './othersStuffs/telas/telas.component';
import { NoticiasComponent } from './othersStuffs/noticias/noticias.component';
import { NoticiasDetalleComponent } from './othersStuffs/noticias/noticias-detalle/noticias-detalle.component';
import { ContactoComponent } from './othersStuffs/contacto/contacto.component';
import { LegalComponent } from './othersStuffs/legal/legal.component';
import { HttpClientModule } from '@angular/common/http';

// angular ngx

import { BsDropdownModule, CarouselModule } from 'ngx-bootstrap'; // de esta manera solo anexa el nombre del module que importes
import { ContenidoService } from './shared/services/contenido.service';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ValidatedInputDirective } from './shared/directives/validated-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent,
    CatalogosComponent,
    InicioComponent,
    TelasComponent,
    NoticiasComponent,
    NoticiasDetalleComponent,
    ContactoComponent,
    LegalComponent,
    ValidatedInputDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    routing,
  ],
  providers: [
    ContenidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
