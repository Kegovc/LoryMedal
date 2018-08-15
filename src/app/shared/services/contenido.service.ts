import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(
    private http: HttpClient
  ) { }

  getThreeNotices() {
    return this.http.get(`${environment.api}getThreeNotices`)
    .toPromise();
  }
  getNotices() {
    return this.http.get(`${environment.api}getNotices`)
    .toPromise();
  }
  getNotice(notice: string) {
    return this.http.post(`${environment.api}getNotice`, {notice: notice})
    .toPromise();
  }

  mailto(data: any) {
    return this.http.post(`${environment.api}mailto`, data)
    .toPromise();
  }

  getCatalogo(tipo: string) {
    return this.http.post(`${environment.api}getAllCatalogo`, {tipo: tipo})
    .toPromise();
  }
}
