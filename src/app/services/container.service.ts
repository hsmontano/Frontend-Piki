import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  readonly URL_API = this.config.getConfig().url
  constructor(private http: HttpClient, private config:ConfigService) { }

  public get(){

  }

  public post(shift: any) {
    return this.http.post(`${this.URL_API}/contenedores`, shift);
  }
}
