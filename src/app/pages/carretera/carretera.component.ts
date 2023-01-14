import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carretera',
  templateUrl: './carretera.component.html',
  styleUrls: ['./carretera.component.css']
})
export class CarreteraComponent implements OnInit {

  public settings = {
    title: "Carretera",
    belongs: "Información del conductor",
    type: "1",
    identification:"identificación"
  }

  constructor() {
  }

  ngOnInit(): void {}

}
