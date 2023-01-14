import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }         from '../../pages/dashboard/dashboard.component';
import { TableComponent }             from '../../pages/table/table.component';
import { TypographyComponent }        from '../../pages/typography/typography.component';
import { IconsComponent }             from '../../pages/icons/icons.component';
import { MapsComponent }              from '../../pages/maps/maps.component';
import { NotificationsComponent }     from '../../pages/notifications/notifications.component';
import { UpgradeComponent }           from '../../pages/upgrade/upgrade.component';
import { CarreteraComponent }         from '../../pages/carretera/carretera.component';
import { UrbaneroComponent }          from "../../pages/urbanero/urbanero.component";
import { ReposicionComponent }        from '../../pages/reposicion/reposicion.component';
import { ReenturnamientoCaComponent } from "../../pages/reenturnamiento-ca/reenturnamiento-ca.component";
import { ReenturnamientoUrComponent } from "../../pages/reenturnamiento-ur/reenturnamiento-ur.component";
import { ReporteComponent }           from "../../pages/reporte/reporte.component";

/*import { PaginatorComponent }        from "../../pages/paginator/paginator.component";
*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormShiftComponent } from 'app/components/form-shift/form-shift.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatTableModule } from '@angular/material/table';
import { TableShiftComponent } from 'app/components/table-shifts/table-shift.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfiguracionComponent } from 'app/pages/configuracion/configuracion.component';
import { TableMatComponent } from 'app/components/tableMat/tableMat.component';
import { ClientesComponent } from 'app/pages/clientes/clientes.component';
import { ExportacionComponent } from 'app/pages/exportacion/exportacion.component';
import { ConductoresComponent } from 'app/pages/conductores/conductores.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxSpinnerModule,
    MatMomentDateModule,
    NgSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  declarations: [
    DashboardComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    ClientesComponent,
    TableMatComponent,
    MapsComponent,
    NotificationsComponent,
    CarreteraComponent,
    ExportacionComponent,
    UrbaneroComponent,
    ReposicionComponent,
    TableShiftComponent,
    ConductoresComponent,
    ConfiguracionComponent,
    ReenturnamientoCaComponent,
    ReenturnamientoUrComponent,
    FormShiftComponent
  ]
})

export class AdminLayoutModule {}
