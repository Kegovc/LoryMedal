import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from './../../shared/services/contenido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss']
})
export class CatalogosComponent implements OnInit {

  public catalogos: any[] = [];
  constructor(
    private contenido: ContenidoService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => {
    this.contenido.getCatalogo(param['tipo'])
    .then((response: any) => {
      console.log(response);
      if (response.fun.access) {
        this.catalogos = response.fun.data;
      }
    })
    .catch(response => {
      console.error(response);
    });
  }); }

  ngOnInit() {
  }

}
