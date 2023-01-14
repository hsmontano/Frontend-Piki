import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShiftService } from 'app/services/shift.service';
import { pdfTiqueteTurnosTemplate } from 'app/templates/pdf-export/tiquete-turno';
import { PDF } from 'app/utils/pdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-table-shift',
    moduleId: module.id,
    styleUrls: ['./table-shift.component.css'],
    templateUrl: 'table-shift.component.html'
})

export class TableShiftComponent implements OnInit{

    displayedColumns: string[] = ['consec','shift','date','yard','company','nit', 'con1','con2','phone','client','observation','select'];
    shifts : MatTableDataSource<any>;
    reenturneForm: FormGroup;
    @ViewChild('content') myModal;
    @ViewChild('contentTicket') contentTicket;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    shift = {
        dayShift: '',
        client: {},
        driver: {},
        shiftClassId: '',
        containers: [],
        date: '',
        price: 0,
    };
    searchText = '';
    type = '';

    constructor(private shiftService:ShiftService,
        private paginatorIn: MatPaginatorIntl,
        private pdf: PDF,
        private modalService: NgbModal, 
        private TsService: ToastrService,
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService)
    {
        this.paginatorIn.itemsPerPageLabel = 'Turnos por pagina';      
        this.reenturneForm = this.formBuilder.group({
            id: ['', []],
            date: ['', [Validators.required]],
            observations: [''],
            type: ['']
        })  
    }

    @Input() settings = {
        title: "",
        belongs: "",
        type: "",
        identification:""
    }

    ngOnInit(){
        this.getWithType();
    }

    public getWithType(){
        this.spinner.show();
        this.shiftService.getWithType(this.settings.type).subscribe((res:any) =>{
            const shifts = [];
            for (let i = 0; i < res.length; i++) {
                const r = res[i];
                let containers = [];
                for (let j = 0; j < r.containers.length; j++) {
                    const c = r.containers[j];
                    containers.push(c.code);
                }
                shifts.push({
                    consec: r.globalShift,
                    shift: r.dayShift,
                    date: r.date,
                    yard: r.containerYard?.description,
                    company: r.driver?.name,
                    idshift: r.id,
                    class: r.shiftClassId,
                    nit: r.driver?.identification,
                    con1: containers.length > 0 ? containers[0] : 'N/A',
                    con2: containers.length > 1 ? containers[1] : 'N/A',
                    phone: r.client?.phone,
                    client: r.client?.name,
                    observation: r.obvs
                })
            }
            this.shifts = new MatTableDataSource(shifts);
            this.shifts.paginator = this.paginator;
            this.shifts.sort = this.sort;
            this.spinner.hide();
        })
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.shifts.filter = filterValue.trim().toLowerCase();
        if (this.shifts.paginator) {
            this.shifts.paginator.firstPage();
        }
    }

    update(){
        this.spinner.show();
        this.reenturneForm.controls.type.setValue(this.settings.type);
        this.shiftService.postReShifted(this.reenturneForm.controls.id.value, this.reenturneForm.value).subscribe((res:any) => {
            this.getWithType();
            this.TsService.success(res.message);
            this.shift = res.shiftUpdated;
            this.modalService.dismissAll();
            this.modalService.open(this.contentTicket);
        })
    }

    async genPdf(){
        this.spinner.show();
        const docDefinition = await pdfTiqueteTurnosTemplate(this.shift)
        this.pdf.exportAsPDFFile(docDefinition, "Tiquete");
        this.spinner.hide();
    }

    toggleModal(item){
        this.reenturneForm.controls.id.setValue(item.idshift);
        this.reenturneForm.controls.date.setValue(item.date);
        this.modalService.open(this.myModal);
    }


}
