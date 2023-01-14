import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pdfReporteTurnosTemplate } from 'app/templates/pdf-export/pdf-reporte-turnos';
import { Excel } from 'app/utils/excel';
import { PDF } from 'app/utils/pdf';
import { PaginationInstance } from 'ngx-pagination';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-table-filter-reportes',
  templateUrl: './table-filter-reportes.component.html',
  styles: [
  ]
})
export class TableFilterReportesComponent implements OnInit {

  public camposData: string[] = [];
  public turnosData: any[] = [];
  public infoData: any = {};
  public filterData: any = {};
  public config: PaginationInstance = {
    itemsPerPage: 5,
    currentPage: 1
  };
  @Output() volver = new EventEmitter();
  @Input('campos') set campos(value : string[]) {
    this.camposData = value;
  }
  
  @Input('turnos') set turnos(value : any[]) {
    this.turnosData = value;
  }

  @Input('info') set info(value : any) {
    this.infoData = value;
  }

  @Input('filter') set filter(value : any) {
    this.filterData = value;
  }
 
  constructor(
    private excel: Excel,
    private pdf: PDF,
    private spinner : NgxSpinnerService
  ) { 
  }

  ngOnInit(): void {
  }

  async exportar(tipo: string) {
    this.spinner.show()
    switch (tipo) {
      case "PDF":
        const docDefinition = await pdfReporteTurnosTemplate(this.turnosData, this.camposData, this.infoData, this.filterData)
        this.pdf.exportAsPDFFile(docDefinition, "Reporte turnos")
        break;
      case "EXCEL":
        this.excel.exportAsExcelFile(this.turnosData, "Reporte turnos")
        break;
      default:
        break;
    }
    this.spinner.hide()
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }

}
