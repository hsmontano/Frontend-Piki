import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reenturnamiento-ur',
  templateUrl: './reenturnamiento-ur.component.html',
  styleUrls: ['./reenturnamiento-ur.component.css']
})
export class ReenturnamientoUrComponent implements OnInit {

  constructor() { }

  public settings = {
    title: "Reenturne de urbanero",
    belongs: "Empresa",
    type: "6",
    identification:"NIT"
  }

  ngOnInit(): void {
  }

  

}
