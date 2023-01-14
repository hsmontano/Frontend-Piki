import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly URL_API = this.config.getConfig().url
  constructor(private http: HttpClient, private config:ConfigService) { }

  public getEmpresas(){
    return this.http.get(`${this.URL_API}/empresas`);
  }

  public newCompany(company: any) {
    return this.http.post(`${this.URL_API}/empresas`, company);
  }

  public updateCompany( id: any, company: any ){
    return this.http.put(`${this.URL_API}/empresas/`+id, company);
  }
  deleteCompany( id: String ){
    return this.http.delete(this.URL_API + '/empresas/eliminar/'+id );
  }
}
