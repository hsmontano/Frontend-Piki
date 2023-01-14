import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'app/services/config.service';
import { MasterService } from 'app/services/master.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})

export class ConductoresComponent implements OnInit {
    
  displayedColumns: string[] = ['name','email', 'phone', 'vehicle_plate', 'identification', 'select'];
  public items: MatTableDataSource<any>;
  clientForm: FormGroup;
  @ViewChild('content') myModal;
  type = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private paginatorIn: MatPaginatorIntl, 
    private masterService: MasterService,
    private formBuilder: FormBuilder, 
    private TsService: ToastrService, 
    private modalService: NgbModal, 
    private appService: ConfigService,
    private spinner: NgxSpinnerService) {
    this.paginatorIn.itemsPerPageLabel = 'items por pagina'; 

    this.clientForm = this.formBuilder.group({
      id: ['', []],
      identification: ['', [Validators.required]],
      vehicle_plate: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', []],
      phone: ['', []],
    })
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.spinner.show();
    this.masterService.getDrivers().subscribe((res:any) =>{
      this.items = new MatTableDataSource(res);
      this.items.paginator = this.paginator;
      this.items.sort = this.sort; 
      this.spinner.hide();
    })
  }

  delete(item: any){
    try {
        Swal.fire({
          title: 'Estas Seguro?',
          text: "Esta accion no se podra revertir!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.masterService.deleteDriver(item.id).subscribe((res:any) => {
              this.getClients();
              Swal.fire(
                'Eliminado!',
                'La Empresa Fue Eliminada.',
                'success'
              )
            });
          }
        });
    } catch (error) {
      console.log(error);
      this.getClients();
    }
  }

  create(){
    this.spinner.show();
    this.masterService.createDriver(this.clientForm.value).subscribe((res:any) => {
      this.getClients();
      this.spinner.hide();
      this.TsService.success(res.message);
      this.modalService.dismissAll();
    })
  }

  update(){
    this.spinner.show();
    this.masterService.updateDriver(this.clientForm.controls.id.value, this.clientForm.value).subscribe((res:any) => {
      this.getClients();
      this.spinner.hide();
      this.TsService.success(res.message);
      this.modalService.dismissAll();
    })
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.items.filter = filterValue.trim().toLowerCase();
      if (this.items.paginator) {
      this.items.paginator.firstPage();
      }
  }

  toggleModal(item, step){
    this.type = step;
    if (this.type === 'update') {
      this.clientForm.controls.id.setValue(item.id);
      this.clientForm.controls.identification.setValue(item.identification);
      this.clientForm.controls.vehicle_plate.setValue(item.vehicle_plate);
      this.clientForm.controls.name.setValue(item.name);
      this.clientForm.controls.email.setValue(item.email);
      this.clientForm.controls.phone.setValue(item.phone);
    }
    if (this.type === 'create') {
      this.clientForm.controls.identification.setValue(null);
      this.clientForm.controls.vehicle_plate.setValue(null);
      this.clientForm.controls.name.setValue(null);
      this.clientForm.controls.email.setValue(null);
      this.clientForm.controls.phone.setValue(null);
    }
    this.modalService.open(this.myModal);
  }

}
