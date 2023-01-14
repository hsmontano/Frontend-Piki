import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  readonly URL_API = this.config.getConfig().url
  constructor(private http: HttpClient, private config:ConfigService) { }

  public getRole(){
    return this.http.get(`${this.URL_API}/roles`);
  }

  public newRole(role: any) {
    return this.http.post(`${this.URL_API}/roles`, role);
  }

  public updateRole( id: any, role: any ){
    return this.http.put(`${this.URL_API}/roles/`+id, role);
  }
  deleteRole( id: String ){
    return this.http.delete(this.URL_API + '/roles/eliminar/'+id );
  }
}
