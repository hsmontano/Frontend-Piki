import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CamposFilterMock } from 'app/mocks/campos-filter.mock';
import { DropdownSettingsMultipleMock, DropdownSettingsSingleMock, DropdownSettingsSingleNoSearchMock } from 'app/mocks/dropdown-settings.mock';
import { ClientService } from 'app/services/client.service';
import { LineService } from 'app/services/line.service';
import { ShiftClassService } from 'app/services/shift-class.service';
import { TypeService } from 'app/services/type.service';
import { YardService } from 'app/services/yard.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-form-filter-reportes',
  templateUrl: './form-filter-reportes.component.html',
  styles: [
  ]
})
export class FormFilterReportesComponent implements OnInit {

  @Output() filterData  = new EventEmitter<FormGroup>();
  public formFilter: FormGroup;
  public clients : any[];
  public lines : any[];
  public shiftClass : any[];
  public containerYarn : any[];
  public containerType : any[];
  public min : string;
  dropdownList = [];
  dropdownSettingsMultiple : IDropdownSettings = { };
  dropdownSettingsSingle : IDropdownSettings = { };
  dropdownSettingsSingleNoSearch : IDropdownSettings = { };

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private lineService: LineService,
    private shiftClassService: ShiftClassService,
    private yardService: YardService,
    private typeService: TypeService
  ) {
    this.formFilter = this.formBuilder.group({
      campos: [[], Validators.required],
      fechaIni: [''],
      fechaFin: [''],
      cliente: [[]],
      linea: [[]],
      patio: [[]],
      clase: [[]],
      tipoTamanioContenedor: [[]],
      titulo: ['']
    })
    
    this.f.fechaFin.disable()
    this.dropdownSettingsMultiple = DropdownSettingsMultipleMock();
    this.dropdownSettingsSingle = DropdownSettingsSingleMock();
    this.dropdownSettingsSingleNoSearch = DropdownSettingsSingleNoSearchMock();
  }

  ngOnInit(): void {
    (this.formFilter.get('fechaIni') as FormArray).valueChanges.subscribe(values => {
      if (values) {
        this.min = values
        this.f.fechaFin.enable()
      } else {
        this.f.fechaFin.setValue('')
        this.f.fechaFin.disable()
      }
    });
    this.getClients();
    this.getLines();
    this.getShiftClass();
    this.getYard();
    this.getType();
    this.dropdownList = CamposFilterMock();

    this.f.campos.setValue(this.dropdownList)
  }

  get f() {
    return this.formFilter.controls
  }

  async getClients() {
    this.clientService.getAllReport().subscribe((res: any[]) => {
      this.clients = res;
    })
  }

  async getLines() {
    this.lineService.getAllReport().subscribe((res: any[]) => {
      this.lines = res;
    })
  }

  async getShiftClass() {
    this.shiftClassService.getAllReport().subscribe((res: any[]) => {
      this.shiftClass = res;
    })
  }

  async getYard() {
    this.yardService.getAllReport().subscribe((res: any[]) => {
      this.containerYarn = res;
    })
  }

  async getType() {
    this.typeService.getAllReport().subscribe((res: any[]) => {
      this.containerType = res;
    })
  }

  filter() {
    this.filterData.emit(this.formFilter.value)
  }

}
