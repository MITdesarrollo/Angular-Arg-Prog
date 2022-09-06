import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-nombre',
  templateUrl: './logo-nombre.component.html',
  styleUrls: ['./logo-nombre.component.scss']
})
export class LogoNombreComponent implements OnInit {
  curso="Argentina Programa!";
  constructor() { }

  ngOnInit(): void {
  }

}
