import { ContenidoService } from './../../shared/services/contenido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  public noticias: any[] = [
  ];
  constructor(
    private contenido: ContenidoService
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
  }

  ngOnInit() {
  }

}
