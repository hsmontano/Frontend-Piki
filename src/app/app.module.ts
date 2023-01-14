import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CompanyComponent } from './pages/company/company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from "./pages/user/user.component";
import { AuthGuard } from "./auth.guard";
import { GestionComponent } from "./pages/gestion/gestion.component";
import { SearchfilterPipe } from './pipes/searchfilter.pipe';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReporteComponent } from "./pages/reporte/reporte.component";
import { TableFilterReportesComponent } from "./views/tables/table-filter-reportes/table-filter-reportes.component";
import { FormFilterReportesComponent } from "./views/forms/form-filter-reportes/form-filter-reportes.component";
import { Excel } from "./utils/excel";
import { PDF } from "./utils/pdf";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";
import { DetalleGestionComponent } from './pages/gestion/detalle-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CompanyComponent,    
    ReporteComponent,
    TableFilterReportesComponent,
    FormFilterReportesComponent,
    LoginComponent,
    UserComponent,
    GestionComponent,
    SearchfilterPipe,
    DetalleGestionComponent
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    NgxPaginationModule,
    NgbModule,
    NavbarModule
  ],
  providers: [
    AuthGuard,
    Excel,
    PDF
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
