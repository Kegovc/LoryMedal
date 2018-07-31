import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
// en este caso solo dice que declares la propiedad solo que anexale el public
	public noPause = true;
	public myInterval = 5000; // ms
  constructor() { }

  ngOnInit() {
  }

}
