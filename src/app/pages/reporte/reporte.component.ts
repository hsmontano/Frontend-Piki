import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShiftService } from 'app/services/shift.service';
import { tableReportesTemplate } from 'app/templates/tables/table-reportes';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  campos : string[] = [];
  turnos : any[] = [];
  info : any[] = [];
  filterCampos : any = {};
  public showTable: boolean = false;

  constructor(    
    private shiftService: ShiftService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
  }

  async filter(form: FormGroup){
    this.spinner.show()
    this.turnos = []
    this.campos = [];
    let formFilter = {...form}
    form['campos'].forEach(campo => this.campos.push(campo.item_text))
    formFilter['campos'] = this.campos.slice()

    this.shiftService.getFilter(formFilter).subscribe(async (res: any[]) => {
      if (res.length) {
        const i = this.campos.indexOf('CONTENEDORES');
        if (i !== -1) this.campos.splice(i, 1, 'CONTENEDOR I', 'CONTENEDOR II')
        const j = this.campos.indexOf('TIPO/TAMAÑO')
        if (j !== -1) this.campos.splice(j, 1, 'TIPO/TAMAÑO I', 'TIPO/TAMAÑO II')
        const { arrayTurnos, info } = await tableReportesTemplate(res, formFilter['campos']);
        this.filterCampos = {...form}
        delete this.filterCampos['campos']
        this.info = info;
        this.turnos = arrayTurnos;      
      }
      this.showTable = true;
      this.spinner.hide()
    }, error => {
      console.log('error: ', error);
    })
  }

}
