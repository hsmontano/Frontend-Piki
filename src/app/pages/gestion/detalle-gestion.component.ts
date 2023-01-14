import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'app/model/Client';
import { ContainerYard } from 'app/model/ContainerYard';
import { Driver } from 'app/model/Driver';
import { ShiftClass } from 'app/model/ShiftClass';
import { TransLine } from 'app/model/TransLine';
import { GestionService } from 'app/services/gestion.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { ShiftManagement } from '../../model/ShiftManagement';

@Component({
  selector: 'app-detalle-gestion',
  templateUrl: './detalle-gestion.component.html',
  styleUrls: ['./detalle-gestion.component.css']
})
export class DetalleGestionComponent implements OnInit {

  public closeResult = '';
  public active = 1;
  public shiftManagement: ShiftManagement = new ShiftManagement();
  public client: Client = new Client();
  public driver: Driver = new Driver();
  public transLine: TransLine = new TransLine();
  public containerYard: ContainerYard = new ContainerYard();
  public shiftClass: ShiftClass = new ShiftClass();
  public shiftEditForm: FormGroup;
  public submitted: boolean = false;
  public shiftId: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private spinner: NgxSpinnerService, 
              private gestionService: GestionService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {
                this.shiftEditForm = this.formBuilder.group({
                  obvs: ['', [Validators.required, Validators.maxLength(500)]]
                })
              }

  ngOnInit(): void {
    this.getShift();
  }

  get cf() {
    return this.shiftEditForm.controls;
  }

  getShift() : void {
    this.spinner.show();
    this.activatedRoute.params.subscribe( params => {
      let id = params['id']
      if (id) {
        this.gestionService.getShift(id).subscribe(
          (response: any) => {
            console.log(response);
            
            this.shiftManagement = response.foundShift as ShiftManagement;
            if ( this.shiftManagement != null ) {
              this.client = this.shiftManagement.client;
              this.driver = this.shiftManagement.driver;
              this.transLine = this.shiftManagement.transLine;
              this.containerYard = this.shiftManagement.containerYard;
              this.shiftClass = this.shiftManagement.shiftClass;
              this.spinner.hide();
            }
          }
        )
      }
    })
  }

  openModal(content: any, id: number) {
    this.shiftId = id;
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
      if (result === 'save') {
        this.closeResult = `Closed with: ${result}`;
        this.editObvs();
      } else {
        this.shiftEditForm.controls.obvs.reset();
      }
    },(reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.shiftEditForm.controls.obvs.reset();
    });   
  }

  editObvs() {
    this.gestionService.createObvs(this.shiftEditForm.value, this.shiftId).subscribe((response: any) => {
      Swal.fire('Nueva observación', `${response.message}`, 'success');
    }, (err) => {
      console.error('Error from the backend: ' + err.message);
    })
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
