import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { CarreteraComponent } from '../../pages/carretera/carretera.component';
import { UrbaneroComponent } from '../../pages/urbanero/urbanero.component';
import { ReposicionComponent } from '../../pages/reposicion/reposicion.component';
import { ReenturnamientoCaComponent } from 'app/pages/reenturnamiento-ca/reenturnamiento-ca.component';
import { ReenturnamientoUrComponent } from '../../pages/reenturnamiento-ur/reenturnamiento-ur.component';
import { GestionComponent } from '../../pages/gestion/gestion.component';
import { ReporteComponent } from 'app/pages/reporte/reporte.component';
import { CompanyComponent } from 'app/pages/company/company.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { AuthGuard } from 'app/auth.guard';
import { ConfiguracionComponent } from 'app/pages/configuracion/configuracion.component';
import { ClientesComponent } from 'app/pages/clientes/clientes.component';
import { DetalleGestionComponent } from 'app/pages/gestion/detalle-gestion.component';
import { ExportacionComponent } from 'app/pages/exportacion/exportacion.component';
import { ConductoresComponent } from 'app/pages/conductores/conductores.component';
/*import { HorariosComponent } from 'app/pages/horarios/horarios.component';
import { PaginatorComponent } from 'app/pages/paginator/paginator.component';
*/
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',            component: DashboardComponent,  canActivate: [AuthGuard] },
    { path: 'usuarios',             component: UserComponent, canActivate: [AuthGuard] },
    { path: 'table',                component: TableComponent ,  canActivate: [AuthGuard]},
    { path: 'typography',           component: TypographyComponent ,  canActivate: [AuthGuard]},
    { path: 'icons',                component: IconsComponent ,  canActivate: [AuthGuard]},
    { path: 'maps',                 component: MapsComponent ,  canActivate: [AuthGuard]},
    { path: 'notifications',        component: NotificationsComponent ,  canActivate: [AuthGuard]},
    { path: 'carretera',            component: CarreteraComponent ,  canActivate: [AuthGuard]},
    { path: 'exportacion',          component: ExportacionComponent ,  canActivate: [AuthGuard]},
    { path: 'urbanero',             component: UrbaneroComponent ,  canActivate: [AuthGuard]},
    { path: 'conductores',          component: ConductoresComponent ,  canActivate: [AuthGuard]},
    { path: 'reposicion',           component: ReposicionComponent ,  canActivate: [AuthGuard]},
    { path: 'reenturneCa',          component: ReenturnamientoCaComponent ,  canActivate: [AuthGuard]},
    { path: 'reenturneUr',          component: ReenturnamientoUrComponent ,  canActivate: [AuthGuard]},
    { path: 'gestion',              component: GestionComponent ,  canActivate: [AuthGuard]},
    { path: 'gestion/detalle/:id',  component: DetalleGestionComponent, canActivate: [AuthGuard]},
    { path: 'reporte',              component: ReporteComponent,  canActivate: [AuthGuard]},
    { path: 'configuracion',        component: ConfiguracionComponent ,  canActivate: [AuthGuard]},
    { path: 'clientes',             component: ClientesComponent ,  canActivate: [AuthGuard]},
    { path: 'empresas',             component: CompanyComponent, canActivate: [AuthGuard]}
/*
    { path: 'paginator/page/:page', component: PaginatorComponent}
*/
];
