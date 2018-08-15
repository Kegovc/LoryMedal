import { ContenidoService } from './../../../shared/services/contenido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias-detalle',
  templateUrl: './noticias-detalle.component.html',
  styleUrls: ['./noticias-detalle.component.scss']
})
export class NoticiasDetalleComponent implements OnInit {
  public noticia: any = {};
  public noticias: any[] = [
  ];
  constructor(
    private contenido: ContenidoService,
    private route: ActivatedRoute
  ) {
    this.contenido.getNotices()
    .then((response: any) => {
      console.log(response);
      if (response.fun.access) {
        this.noticias = response.fun.data;
      }
    })
    .catch(response => {
      console.error(response);
    });
    this.route.params.subscribe(param => {
      this.contenido.getNotice(param['titulo'])
      .then((response: any) => {
        console.log(response);
        if (response.fun.access) {
          this.noticia = response.fun.data;
        }
      })
      .catch(response => {
        console.error(response);
      });
    });
  }

  ngOnInit() {
  }

}
