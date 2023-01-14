import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ShiftManagement } from 'app/model/ShiftManagement';
import { GestionService } from 'app/services/gestion.service';
import { ShiftService } from 'app/services/shift.service';
import { PaginationInstance } from 'ngx-pagination';
import { PDF } from 'app/utils/pdf';
import { pdfTiqueteTurnosTemplate } from 'app/templates/pdf-export/tiquete-turno';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  closeResult = '';

  public shifts: ShiftManagement[];
  @ViewChild('contentTicket') myModal;
  public searchvalue = '';
  public shiftForm: FormGroup;
  public submitted: boolean = false;
  public step: boolean = true;
  public idShift: number;
  public config: PaginationInstance = {
    itemsPerPage: 5,
    currentPage: 1
  };
  public shift = {
    dayShift: '',
    client: {},
    driver: {},
    shiftClassId: '',
    containers: [],
    date: '',
    price: 0,
  };

  constructor(
    private gestionService: GestionService, 
    private shiftService: ShiftService, 
    private spinner: NgxSpinnerService, 
    private modalService: NgbModal, 
    private pdf: PDF,
    private formBuilder: FormBuilder
  ) { 
    this.shiftForm = this.formBuilder.group({
      obvs: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    this.getInfo();
  }

  get cf() {
    return this.shiftForm.controls;
  }

  getInfo(){
    this.spinner.show();
    this.step = true;
    this.gestionService.getInfo().subscribe(
      (response: any) => {
        this.shifts = response.info as ShiftManagement[];
        this.spinner.hide();
      }
    )
  }

  getCanceleds(){
    this.spinner.show();
    this.step = false;
    this.gestionService.getCanceled().subscribe(
      (response: any) => {
        this.shifts = response.info as ShiftManagement[];
        this.spinner.hide();
        
      }
    )
  }

  openModal(content: any, idShift: number) {
    this.idShift = idShift;
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
      if (result === 'save') {
        this.closeResult = `Closed with: ${result}`;
        this.cancelShift();
      } else {
        this.shiftForm.controls.obvs.reset();
      }
    },(reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.shiftForm.controls.obvs.reset();
    });   
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }

  cancelShift(): void {
    this.shiftService.cancel(this.shiftForm.value, this.idShift.toString()).subscribe((response: any) => {
      Swal.fire('Anular', `${response.message}`, 'success');
      this.getInfo();
      this.getCanceleds();
    }, (err) => {
      console.error('Error from the backend: ' + err.message);
    })
  }

  ticketModal(id: String){
    this.spinner.show();
    this.shiftService.getShift(id).subscribe((res:any) =>{
      this.shift = res;
      console.log(this.shift);
      this.spinner.hide();
      this.modalService.open(this.myModal);
    });
  }

  async genPdf(){
    this.spinner.show();
    const docDefinition = await pdfTiqueteTurnosTemplate(this.shift)
    this.pdf.exportAsPDFFile(docDefinition, "Tiquete");
    this.spinner.hide();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
