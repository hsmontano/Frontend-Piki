import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from 'app/services/master.service';
import { ShiftService } from 'app/services/shift.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public shifts : any[] = [];
  public clients : any[] = [];
  @ViewChild('content') myModal;
  public containers : any[] = [];
  public user = {};
  public money : any = {};
 
  constructor(private shiftService:ShiftService,
    private masterService: MasterService,
    private modalService:NgbModal,
      private spinner: NgxSpinnerService)
  {}

    ngOnInit(){
      this.getShifts();
      this.getMoney();
      this.getContainers();
      this.getClients();
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    public getShifts(){
      this.spinner.show()
      this.shiftService.get().subscribe((res:any) =>{
        this.shifts = res;
      })
    }

    public getClients(){
      this.spinner.show()
      this.masterService.getClients().subscribe((res:any) =>{
        this.clients = res;
        this.spinner.hide();
      })
    }

    public getContainers(){
      this.spinner.show()
      this.masterService.getContainers().subscribe((res:any) =>{
        this.containers = res;
      })
    }

    public getMoney(){
      this.spinner.show()
      this.shiftService.getMoney().subscribe((res:any) =>{
        this.money = res[0];
      })
    }

    toggle(){
      try {
          Swal.fire({
            title: 'Estas Seguro?',
            text: "Esta accion no se podra revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, entregar!'
          }).then((result) => {
            this.shiftService.postMoney({}).subscribe((res:any) => {
              this.getMoney();
            })
          });
      } catch (error) {
        console.log(error);
        this.getMoney();
      }
    }


}
