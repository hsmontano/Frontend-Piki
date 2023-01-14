import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  readonly URL_API = this.config.getConfig().url

  constructor(private http: HttpClient, private config: ConfigService) { }

  public getInfo(){
    return this.http.get(`${this.URL_API}/management`);
  }

  public getCanceled(){
    return this.http.get(`${this.URL_API}/management/canceled`);
  }

  public getShift(id: number) {
    return this.http.get(`${this.URL_API}/management/${id}`);
  }

  public createObvs(data: any, id: number){
    return this.http.put(`${this.URL_API}/management/save/${id}`, data);
  }
}
