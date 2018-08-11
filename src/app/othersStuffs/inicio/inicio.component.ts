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
	
	// aqu
	i
	public noticias: any[] = [
		{"titulo": "Expo Mueblera verano 2018", "contenido": "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."},
		
		{"titulo": "Expo Mueblera verano 2018", "contenido": "Some quick example text to build on the card title and make up the bulk of the card's content."}
	
	];
	
  constructor() { }

  ngOnInit() {
  }

}