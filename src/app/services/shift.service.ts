import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  readonly URL_API = this.config.getConfig().url + '/turnos';
  constructor(private http: HttpClient, private config:ConfigService) { }

  public getWithType(type: string){
    return this.http.get(`${this.URL_API}/tipo/`+type);
  }

  public get(){
    return this.http.get(`${this.URL_API}/`);
  }

  public getShift(id: String){
    return this.http.get(`${this.URL_API}/${id}`);
  }

  public cancel(shift: any, id: string){
    return this.http.delete(`${this.URL_API}/${id}?obvs=${shift.obvs}`);
  }

  public getMoney(){
    return this.http.get(`${this.URL_API}/money`);
  }

  public post(shift: any) {
    return this.http.post(`${this.URL_API}/`, shift);
  }

  public postMoney(moeny: any) {
    return this.http.post(`${this.URL_API}/money`, moeny);
  }

  public postReShifted(id: string, shift: any) {
    return this.http.put(`${this.URL_API}/${id}`, shift);
  }

  public getFilter(filter){
    return this.http.post(`${this.URL_API}/getFilter`, filter);
  }

}
