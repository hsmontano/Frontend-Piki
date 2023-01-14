import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { MasterService } from "../../services/master.service";
import { ShiftService } from "../../services/shift.service";
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DriverService } from "app/services/driver.service";
import {Observable} from 'rxjs';
import { pdfTiqueteTurnosTemplate } from 'app/templates/pdf-export/tiquete-turno';
import { PDF } from 'app/utils/pdf';
import {map, startWith} from 'rxjs/operators';
import { NgSelectConfig } from "@ng-select/ng-select";

@Component({
  selector: 'app-form-shift',
  templateUrl: './form-shift.component.html',
  styleUrls: ['./form-shift.component.css']
})

export class FormShiftComponent implements OnInit {

  
  Form: FormGroup;
  FormClient: FormGroup;
  FormCreate: FormGroup;
  selectedCar = '';
  @ViewChild('content') myModal;
  @ViewChild('contentCreate') contentCreate;
  public typeCreate = 0;
  public typeCreateTitle = '';
  public drivers = [];
  public linesT = [];
  public typesC = [];
  public clients = [];
  public yards = [];
  public submitted = false;
  public user: any;
  shift = {
    dayShift: '',
    client: {},
    driver: {},
    shiftClassId: '',
    containers: [],
    date: '',
    price: 0,
  };
  public showContainers = false;
  public selectedDriver = false;
  public containers = [];
  filteredOptions: Observable<any[]>;
  

  constructor(private formBuilder: FormBuilder, 
    private driverService: DriverService, 
    private masterService: MasterService, 
    private TsService: ToastrService, 
    private modalService: NgbModal,
    private pdf: PDF,
    private config: NgSelectConfig,
    private shiftService: ShiftService, 
    private spinner: NgxSpinnerService) {
    this.config.notFoundText = 'No se encontraron resultados';
    this.config.appendTo = 'body';

    this.Form = this.formBuilder.group({
      name: ['', [Validators.required]],
      documentId: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(11)]],
      phone: ['', [Validators.required]],
      email: ['', [this.settings.type === '2' ? Validators.required : Validators.nullValidator]],
      placa: ['', [Validators.required, Validators.minLength(6)]],
      container: ['', [Validators.required]],
      containerType: ['0', [Validators.required, Validators.min(1)]],
      container2: ['', []],
      containerType2: ['0', []],
      shiftDate: ['', []],
      transportLine: ['0', [Validators.required, Validators.min(1)]],
      clientId: ['0', [Validators.required, Validators.min(1)]],
      limitTime: ['', [Validators.required]],
      patio: ['0', [Validators.required, Validators.min(1)]],
      observations: ['', []],
    })

    this.FormClient = this.formBuilder.group({
      nit: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(11)]],
      name: ['', [Validators.required]],
      email: [''],
      phone: ['', [Validators.required]]
    })

    this.FormCreate = this.formBuilder.group({
      code: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  @Input() settings = {
    title: "",
    belongs: "",
    type: "",
    identification:""
  }

  onSubmit(){
    this.spinner.show();
    this.submitted = true;
    let driver = {
      name: this.Form.controls.name.value,
      type: this.settings.type,
      phone: this.Form.controls.phone.value,
      placa_vehicle: this.Form.controls.placa.value,
      email: this.Form.controls.email.value,
      documentId: this.Form.controls.documentId.value
    }
    if (!this.selectedDriver) {
      this.driverService.post(driver).subscribe(async (res:any) =>{
        if (this.Form.controls.container2.value.length > 0) {
          let container = {
            container: this.Form.controls.container.value,
            typeCode: this.Form.controls.containerType.value
          }
          let container2 = {
            container: this.Form.controls.container2.value,
            typeCode: this.Form.controls.containerType2.value
          }
          this.containers.push(container);
          this.containers.push(container2);
          this.createShift(driver);
        } else {
          let container = {
            container: this.Form.controls.container.value,
            typeCode: this.Form.controls.containerType.value
          }
          this.containers.push(container);
          this.createShift(driver);
        }
      });
    } else {
      if (this.Form.controls.container2.value.length > 0) {
          let container = {
            container: this.Form.controls.container.value,
            typeCode: this.Form.controls.containerType.value
          }
          let container2 = {
            container: this.Form.controls.container2.value,
            typeCode: this.Form.controls.containerType2.value
          }
          this.containers.push(container);
          this.containers.push(container2);
          this.createShift(driver);
      } else {
        let container = {
          container: this.Form.controls.container.value,
          typeCode: this.Form.controls.containerType.value
        }
        this.containers.push(container);
        this.createShift(driver);
      }
    }
  }

  createShift(driver: any){
    let shift = {
      type: this.settings.type,
      driver: driver,
      shiftDate: this.Form.controls.shiftDate.value,
      transportLine: this.Form.controls.transportLine.value,
      clientId: this.Form.controls.clientId.value,
      limitTime: this.Form.controls.limitTime.value,
      patio: this.Form.controls.patio.value,
      containers: this.containers,
      user: this.user.id,
      observations: this.Form.controls.observations.value
    }
    this.shiftService.post(shift).subscribe((res:any) => {
      this.spinner.hide();
      this.shift = res.shift;
      this.containers = [];
      this.submitted = false;
      this.TsService.success('Enturnamiento registrado!');
      this.Form.reset();
      this.toggleModal();
    }, (error: any) => {
      this.spinner.hide();
      console.log(error);
      this.submitted = false;
      this.TsService.error('Enturnamiento no registrado!');

    });
  }

  onSearch(){
    if (this.Form.controls.documentId.value.length > 2) {
      this.driverService.search(this.Form.controls.documentId.value, this.settings.type).subscribe((res:any) => {
        this.drivers = res;
      });
    } else if (this.Form.controls.documentId.value.length === 0) {
      this.drivers.splice(0, this.drivers.length);
    }
  }

  getLines(){
    this.spinner.show();
    this.masterService.getLines().subscribe((res:any) => {
      this.linesT = res;
    })
  }

  getTypes(){
    this.masterService.getTypes().subscribe((res:any) => {
      this.typesC = res;
    })
  }

  getYards(){
    this.masterService.getYards().subscribe((res:any) => {
      this.yards = res;
    })
  }

  getClients(){
    this.masterService.getClients().subscribe((res:any) => {
      this.clients = res;
      this.spinner.hide();
    })
  }

  create(key){    
    this.typeCreate = key;
    switch (key) {
      case 1:
        this.typeCreateTitle = 'Cliente';
        break;
      case 2:
        this.typeCreateTitle = 'Patio';
        break;
      case 3:
        this.typeCreateTitle = 'Linea transportadora';
        break;
      default:
        break;
    }
    this.modalService.open(this.contentCreate);
  }

  save(){
    this.spinner.show();
    console.log(this.typeCreate);
    switch (this.typeCreate) {
      case 1:
        this.masterService.createClient(this.FormClient.value).subscribe((res:any) =>{
          this.getClients();
          this.FormClient.reset();
          this.spinner.hide();
        });
        break;
      case 2:
        this.masterService.createYard(this.FormCreate.value).subscribe((res:any) =>{
          this.getYards();
          this.FormCreate.reset();
          this.spinner.hide();
        });
        break;
      case 3:
        this.masterService.createLine(this.FormCreate.value).subscribe((res:any) =>{
          this.getLines();
          this.FormCreate.reset();
          this.spinner.hide();
        });
        break;
    
      default:
        break;
    }
  }

  selectDriver(driver:any){    
    if (this.settings.type !== '2') {
      this.Form.controls.documentId.setValue(driver.identification);
      this.Form.controls.name.setValue(driver.name);
      this.Form.controls.phone.setValue(driver.phone);
      this.Form.controls.placa.setValue(driver.vehicle_plate);
    } else {
      this.Form.controls.documentId.setValue(driver.identification);
      this.Form.controls.name.setValue(driver.name);
      this.Form.controls.phone.setValue(driver.phone);
      this.Form.controls.email.setValue(driver.email);
    }
    this.selectedDriver = true;
    this.drivers.splice(0, this.drivers.length);
  }

  selectType(e:any){
    if (e === "OS20" || e === "RF20" || e === "OP20" || e === "Dry20" || e === "ISO20 Pies" || e === "Flt20" || e === "BLK20") {
      this.showContainers = true;
    } else {
      this.showContainers = false;
    }
  }

  ngOnInit(): void {
    this.getLines();
    this.getTypes();
    this.getYards();
    this.getClients();
    let date = new Date().toDateString();
    this.Form.controls.shiftDate.setValue(date);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.filteredOptions = this.Form.controls.transportLine.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.linesT.slice())
      );
  }

  async genPdf(){
    this.spinner.show();
    const docDefinition = await pdfTiqueteTurnosTemplate(this.shift)
    this.pdf.exportAsPDFFile(docDefinition, "Tiquete");
    this.spinner.hide();
  }

  displayFn(line): string {
    return line && line.desciption ? line.desciption : '';
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();

    return this.linesT.filter(option => option.desciption.toLowerCase().includes(filterValue));
  }

  toggleModal(){
    this.modalService.open(this.myModal);
  }
}
