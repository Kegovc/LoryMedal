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
import { ContactoComponent } from './othersStuffs/contacto/contacto.component';
import { LegalComponent } from './othersStuffs/legal/legal.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// angular ngx

import { BsDropdownModule, CarouselModule } from 'ngx-bootstrap'; // de esta manera solo anexa el nombre del module que importes


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent,
    CatalogosComponent,
    InicioComponent,
    TelasComponent,
    NoticiasComponent,
    ContactoComponent,
    LegalComponent
  ],
  imports: [
  	BsDropdownModule.forRoot(),
	CarouselModule.forRoot(),
  	AngularFontAwesomeModule,
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
