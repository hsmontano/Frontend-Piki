import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'app/model/company';
import { Role } from 'app/model/role ';
import { User } from 'app/model/user';
import { CompanyService } from 'app/services/conpany.service';
import { RoleService } from 'app/services/role.service ';
import { UserService } from 'app/services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  companies: Company[] = [];
  roles: Role[] = [];
  public status: any;
  public collectionSize: any;
  public newUserForm: FormGroup;
  public Submitted = false;
  public update = false;
  public idUser: any;
  public responce: any;
  public config: PaginationInstance = {
    itemsPerPage: 4,
    currentPage: 1
  };
  constructor(  
    private userService: UserService, 
    private roleService: RoleService,
    private modalService: NgbModal, 
    private formBuilder: FormBuilder,
    private companyService: CompanyService  
    ) { 
    this.newUserForm = this.formBuilder.group({
      name:  ['', Validators.required],
      identification:  ['', Validators.required],
      login:  ['', Validators.required],
      password:  ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      companyId:  ['', Validators.required],
      roleId:  ['', Validators.required],
      type:  ['', Validators.required],
      phone:  ['', Validators.required], 
    }); 
  }

  get uf() {
    return this.newUserForm.controls;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCompany();
    this.getRoles();
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }

  open(content: any, update = false ) {
    this.update = update;
    this.modalService.open(content);
     
   }

   openModal(content: any, user: any) {
   console.log(user);
   
   this.newUserForm.controls.name.setValue(user.name);
   this.newUserForm.controls.password.setValue(user.password);
   this.newUserForm.controls.identification.setValue(user.identification);
   this.newUserForm.controls.login.setValue(user.login);
   this.newUserForm.controls.email.setValue(user.email);
   this.newUserForm.controls.phone.setValue(user.phone);
   this.newUserForm.controls.companyId.setValue(user.companyId);
   this.newUserForm.controls.type.setValue(user.type);
   this.idUser = user.id;
   this.modalService.open(content);
  }

  getCompany(){
    this.companyService.getEmpresas().subscribe(
     ( res: Company[]) => {
       this.companies = res;
      }
    )
  }

  getRoles(){
    this.roleService.getRole().subscribe(
     ( res: Role[]) => {
       this.roles = res;
      }
    )
  }

  newUser( ) {
    try {
      this.userService.newUser(this.newUserForm.value).subscribe(
        ( res ) => {
         this.responce = res;
         if (this.responce.status) {
          console.log(this.responce);
          this.getUsers();
          this.newUserForm.reset();
          this.modalService.dismissAll();
          Swal.fire({
            icon: 'success',
            title: this.responce.message,
            showConfirmButton: false,
            timer: 1500
          });
         }else {
         
         }
        }, (error) => {
          console.log(error);
          if (error['status']) {
            Swal.fire({
              icon: 'error',
              text: error.error.message,
              footer: 'Intentalo nuevamente'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error en el servidor. !Contacte a soporte',
              showConfirmButton: false,
              timer: 3000
            });
          }
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      ( res: User[] ) => {
        this.users = res;
        console.log(this.users);
        
        
      },
      err => {
        console.log(err);
        
      }
    )
  }

  deleteUser(id: String){
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
        this.userService.deleteUser( id ).subscribe(
          ( res ) => {
            this.getUsers();
           console.log(res);
           Swal.fire(
            'Eliminado!',
            'La Empresa Fue Eliminada.',
            'success'
          )}
          ), (error) => {
            console.log(error.error);
            this.getUsers();
          };
      
      }
    });
  }


  updateUser() {
    try {
      this.userService.updateUser(this.idUser, this.newUserForm.value).subscribe(
        ( res ) => {
          this.modalService.dismissAll();
          this.getUsers();
          Swal.fire({
            icon: 'success',
            title: 'Actualizacion exitosa',
            showConfirmButton: false,
            timer: 1500
          });
          this.newUserForm.reset();
        }
      )
    } catch (error) {
      console.log(error);
      
    }
  }

}
