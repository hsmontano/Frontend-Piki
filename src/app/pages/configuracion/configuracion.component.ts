import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'app/services/config.service';
import { MasterService } from 'app/services/master.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  containerYards : any[] = [];
  transLines: any[] = [];
  containerTypes: any[] = [];
  @ViewChild('content') myModal;
  public shiftClasses = [];
  step = '0';
  type = '';

  constructor(
    private formBuilder: FormBuilder, 
    private masterService: MasterService, 
    private TsService: ToastrService, 
    private modalService: NgbModal, 
    private appService: ConfigService,
    private spinner: NgxSpinnerService) { 
      this.appService.ee.subscribe((opt:any) => {
        if (opt.type === 'step') {
          this.select('0');
        } else if(opt.type === 'openModal'){
          this.toggleModal(opt.item, opt.accion);
        } else if(opt.type === 'update'){
          this.toggleModal(opt.item, opt.accion);
        } else if(opt.type === 'create'){
          this.toggleModal({}, opt.accion);
        } else if(opt.type === 'delete'){
          this.toggleModal(opt.item, opt.accion);
        }
      });

      this.stepOneForm = this.formBuilder.group({
        id: ['', []],
        name: ['', [Validators.required]],
        price: ['', [Validators.required]]
      })

      this.stepTwoForm = this.formBuilder.group({
        id: ['', []],
        code: ['', [Validators.required]],
        description: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    this.getClassShifts();
    this.getContainerTypes();
    this.getTransLines();
    this.getContainerYards();
  }

  public getClassShifts(ok = null){
    this.spinner.show();
    this.masterService.getClassShifts().subscribe((res:any) =>{
      this.shiftClasses = res;
      this.spinner.hide();
      if (ok) {
        this.modalService.dismissAll();
      }
      console.log(res);
      
    });
  }

  public getContainerYards(ok = null){
    this.spinner.show();
    this.masterService.getYards().subscribe((res:any) =>{
      this.containerYards = res;
      this.spinner.hide();
      if (ok) {
        this.appService.toggleStep({
          type: 'items',
          item: this.containerYards
        });
        this.modalService.dismissAll();
      }
    });
  }

  public getTransLines(ok = null){
    this.spinner.show();
    this.masterService.getLines().subscribe((res:any) =>{
      this.transLines = res;
      this.spinner.hide();
      if (ok) {
        this.appService.toggleStep({
          type: 'items',
          item: this.transLines
        });
        this.modalService.dismissAll();
      }
    });
  }

  public getContainerTypes(ok = null){
    this.spinner.show();
    this.masterService.getTypes().subscribe((res:any) =>{
      this.containerTypes = res;
      this.spinner.hide();
      if (ok) {
        this.appService.toggleStep({
          type: 'items',
          item: this.containerTypes
        });
        this.modalService.dismissAll();
      }
    });
  }

  public select(step):void {
    this.step = step;
  }

  update(){
    this.spinner.show();
    switch (this.step) {
      case '1':
        try {
          this.masterService.updateClassShifts(this.stepOneForm.controls.id.value, this.stepOneForm.value).subscribe( async (res:any) =>{
            await this.getClassShifts(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        
        break;
      case '2':
        try {
          this.masterService.updateYard(this.stepTwoForm.controls.id.value, this.stepTwoForm.value).subscribe( async (res:any) =>{
            this.getContainerYards(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        
        break;
      case '3':
        try {
          this.masterService.updateLine(this.stepTwoForm.controls.id.value, this.stepTwoForm.value).subscribe( async (res:any) =>{
            this.getTransLines(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        
        break;
      case '4':
        try {
          this.masterService.updateType(this.stepTwoForm.controls.id.value, this.stepTwoForm.value).subscribe( async (res:any) =>{
            this.getContainerTypes(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        
        break;
    
      default:
        break;
    }
  }

  create(){
    this.spinner.show();
    switch (this.step) {
      case '1':
        try {
          this.masterService.createClassShifts(this.stepOneForm.value).subscribe( async (res:any) =>{
            this.getClassShifts(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
            this.TsService.error(error.message);
            this.spinner.hide();
        }
        break;
      case '2':
        try {
          this.masterService.createYard(this.stepTwoForm.value).subscribe( async (res:any) =>{
            this.getContainerYards(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
            this.TsService.error(error.message);
            this.spinner.hide();
        }
        break;
      case '3':
        try {
          this.masterService.createLine(this.stepTwoForm.value).subscribe( async (res:any) =>{
            this.getTransLines(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
            this.TsService.error(error.message);
            this.spinner.hide();
        }
        break;
      case '4':
        try {
          this.masterService.createType(this.stepTwoForm.value).subscribe( async (res:any) =>{
            this.getContainerTypes(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
            this.TsService.error(error.message);
            this.spinner.hide();
        }
        break;
    
      default:
        break;
    }
  }

  delete(){
    this.spinner.show();
    switch (this.step) {
      case '1':
        try {
          this.masterService.deleteClassShifts(this.stepOneForm.controls.id.value).subscribe( async (res:any) =>{
            this.getClassShifts(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        break;
      case '2':
        try {
          this.masterService.deleteYard(this.stepTwoForm.controls.id.value).subscribe( async (res:any) =>{
            this.getContainerYards(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        break;
      case '3':
        try {
          this.masterService.deleteLine(this.stepTwoForm.controls.id.value).subscribe( async (res:any) =>{
            this.getTransLines(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        break;
      case '4':
        try {
          this.masterService.deleteType(this.stepTwoForm.controls.id.value).subscribe( async (res:any) =>{
            this.getContainerTypes(true);
            this.stepOneForm.reset();
            this.stepTwoForm.reset();
            this.TsService.success(res.message);
          })
        } catch (error) {
          this.TsService.error(error.message);
          this.spinner.hide();
        }
        break;
    
      default:
        break;
    }
  }

  toggleModal(item, step){
    this.stepOneForm.reset();
    this.stepTwoForm.reset();
    this.type = step;
    if (this.type === 'updateOne') {
      this.stepOneForm.controls.id.setValue(item.id);
      this.stepOneForm.controls.name.setValue(item.name);
      this.stepOneForm.controls.price.setValue(item.price);
    }
    if (this.type === 'updateTwo') {
      this.stepTwoForm.controls.id.setValue(item.id);
      this.stepTwoForm.controls.code.setValue(item.code);
      this.stepTwoForm.controls.description.setValue(item.description);
    }
    if (this.type === 'deleteOne') {
      this.stepOneForm.controls.id.setValue(item.id);
      this.stepOneForm.controls.name.setValue(item.name);
    }
    if (this.type === 'deleteTwo') {
      this.stepTwoForm.controls.id.setValue(item.id);
      this.stepTwoForm.controls.description.setValue(item.description);
    }
    if (this.type === 'createTwo') {
      this.stepTwoForm.controls.code.setValue(null);
      this.stepTwoForm.controls.description.setValue(null);
    }
    if (this.type === 'createOne') {
      this.stepTwoForm.controls.code.setValue(null);
      this.stepTwoForm.controls.description.setValue(null);
    }
    this.modalService.open(this.myModal);
  }
}
