import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reposicion',
  templateUrl: './reposicion.component.html',
  styleUrls: ['./reposicion.component.css']
})
export class ReposicionComponent implements OnInit {

  constructor() { }

  public settings = {
    title: "Reposición",
    belongs: "Información del conductor",
    type: "4",
    identification:"identificación"
  }

  ngOnInit(): void {
  }

}
