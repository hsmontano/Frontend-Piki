import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reenturnamiento-ca',
  templateUrl: './reenturnamiento-ca.component.html',
  styleUrls: ['./reenturnamiento-ca.component.css']
})
export class ReenturnamientoCaComponent implements OnInit {

  constructor() { }

  public settings = {
    title: "Reenturne de carretera",
    belongs: "Conductor",
    type: "5",
    identification:"Cedula"
  }

  ngOnInit(): void {
  }

}
