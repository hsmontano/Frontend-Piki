import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-urbanero',
  templateUrl: './urbanero.component.html',
  styleUrls: ['./urbanero.component.css']
})

export class UrbaneroComponent implements OnInit {
  constructor() {}
  settings = {
    title: "Urbanero",
    belongs: "Información de la empresa",
    type: "2",
    identification:"nit"
  }

  ngOnInit(): void {}
}
