import { Injectable } from '@angular/core';
import { ConfigService } from './config.service'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  readonly URL_API = this.config.getConfig().url
  constructor(private http: HttpClient, private config:ConfigService) { }

  public get(){

  }

  public search(documentId: string, type: string) {
    return this.http.get(`${this.URL_API}/conductores/buscar?documentId=${documentId}&type=${type}`);
  }

  public post(user: any) {
    return this.http.post(`${this.URL_API}/conductores`, user);
  }
}
