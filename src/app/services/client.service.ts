import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly URL_API = this.config.getConfig().url + '/clientes';

  constructor(
    private http: HttpClient, 
    private config: ConfigService
  ) { }

  public getAllReport(){
    return this.http.get(`${this.URL_API}/getAllReport`);
  }
}
