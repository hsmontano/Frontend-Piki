import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exportacion',
  templateUrl: './exportacion.component.html',
  styleUrls: ['./exportacion.component.css']
})
export class ExportacionComponent implements OnInit {

  public settings = {
    title: "Exportacion",
    belongs: "Información del conductor",
    type: "3",
    identification:"identificación"
  }

  constructor() {
  }

  ngOnInit(): void {}

}
