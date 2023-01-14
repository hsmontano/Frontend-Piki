import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from 'app/services/config.service';

@Component({
    selector: 'table-mat-component',
    moduleId: module.id,
    templateUrl: 'tableMat.component.html'
})

export class TableMatComponent implements OnInit{
    
  displayedColumns: string[] = ['code','description','select'];
  public items: MatTableDataSource<any>;

  @Input() 
  itemsIn: any[];

  @Input() 
  title: string;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public shiftClasses = [];

  constructor(private paginatorIn: MatPaginatorIntl, private appService: ConfigService) {
    this.paginatorIn.itemsPerPageLabel = 'items por pagina'; 
    this.appService.ee.subscribe((opt:any) => {
      if (opt.type === 'items') {
        this.items = new MatTableDataSource(opt.item);
      }
    });
  }

  ngOnInit(): void {
    this.items = new MatTableDataSource(this.itemsIn);
    
    this.items.paginator = this.paginator;
    this.items.sort = this.sort; 
  }

  backConfig(){
    this.appService.toggleStep({
      type: 'step'
    }); 
  }

  delete(item: any){
    this.appService.toggleStep({
      type: 'delete',
      item: item,
      accion: 'deleteTwo'
    });
    
  }

  create(item: any){
    this.appService.toggleStep({
      type: 'create',
      accion: 'createTwo'
    });
  }

  update(item: any){
    this.appService.toggleStep({
      type: 'update',
      item: item,
      accion: 'updateTwo'
    });
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.items.filter = filterValue.trim().toLowerCase();
      if (this.items.paginator) {
      this.items.paginator.firstPage();
      }
  }

}
