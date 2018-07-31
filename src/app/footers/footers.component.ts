import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.scss']
})
export class FootersComponent implements OnInit {

  public now: String;
  constructor() {
    const fecha  = new Date();
    this.now = `${fecha.getFullYear()}`;
   }

  ngOnInit() {
  }

}
