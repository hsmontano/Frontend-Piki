import { Component, OnInit } from '@angular/core';
import { Company } from 'app/model/company';
import { CompanyService } from 'app/services/conpany.service';
import { PaginationInstance } from 'ngx-pagination';
import Swal from 'sweetalert2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];
  public status: any;
  public collectionSize: any;
  public newCompanyForm: FormGroup;
  public Submitted = false;
  public update = false;
  public idUser: string;
  public config: PaginationInstance = {
    itemsPerPage: 5,
    currentPage: 1
  };

  

  constructor(  private companyService: CompanyService, private modalService: NgbModal, private formBuilder: FormBuilder  ) { 
    this.newCompanyForm = this.formBuilder.group({
      name:  ['', Validators.required]
    }); 
  }

  ngOnInit(): void {
    this.getCompany();
  }

  get cf() {
    return this.newCompanyForm.controls;
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }

  open(content: any, update = false, name: String, id: string) {
    console.log(name);
    this.update = update;
    this.newCompanyForm.controls.name.setValue(name);
    this.idUser = id;
    this.modalService.open(content);
   }

  getCompany(){
    this.companyService.getEmpresas().subscribe(
     ( res: Company[]) => {
       this.companies = res;
       console.log(res);
       
      }
    )
  }

  newCompany(){
    try {
      this.getCompany();
    if(this.update){
      console.log(this.newCompanyForm.value);
      this.companyService.updateCompany(this.idUser, this.newCompanyForm.value).subscribe(
        ( res ) => {
          this.modalService.dismissAll();
          this.getCompany();
          Swal.fire({
            icon: 'success',
            title: 'Actualizacion exitosa',
            showConfirmButton: false,
            timer: 1500
          });
          this.newCompanyForm.reset();
        }
      )
    } else {
      this.companyService.newCompany(this.newCompanyForm.value).subscribe(
        ( res ) => {
          this.getCompany();
          this.newCompanyForm.reset();
          this.modalService.dismissAll();
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
          });
          this.getCompany();
        });
    }
    } catch (error) {
      console.log( error );
      
    }
    
  }

  deleteCompany(id: String){
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
            this.companyService.deleteCompany( id ).subscribe(
              ( res ) => {
                this.getCompany();
    
               console.log(res);
              });
            Swal.fire(
              'Eliminado!',
              'La Empresa Fue Eliminada.',
              'success'
            )
          }
        });
    } catch (error) {
      console.log(error);
      this.getCompany();
    }
  }


}
