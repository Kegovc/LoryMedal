import { LegalComponent } from './othersStuffs/legal/legal.component';
import { ContactoComponent } from './othersStuffs/contacto/contacto.component';
import { NoticiasComponent } from './othersStuffs/noticias/noticias.component';
import { CatalogosComponent } from './catalogoStuffs/catalogos/catalogos.component';
import { TelasComponent } from './othersStuffs/telas/telas.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './othersStuffs/inicio/inicio.component';



const appRoutes: Routes = [
  {path: 'Inicio', component: InicioComponent, canActivate: []},
  {path: 'Telas', component: TelasComponent, canActivate: []},
  {path: 'Catalogo', component: CatalogosComponent, canActivate: []},
  {path: 'Catalogo/:tipo', component: CatalogosComponent, canActivate: []},
  {path: 'Noticias', component: NoticiasComponent, canActivate: []},
  {path: 'Contacto', component: ContactoComponent, canActivate: []},
  {path: 'Legal', component: LegalComponent, canActivate: []},
  {path: '**', redirectTo: '/Inicio'}

];

export const routing = RouterModule.forRoot(appRoutes);
