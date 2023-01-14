import { Injectable } from '@angular/core';
import { ConfigService } from './config.service'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
  readonly URL_API = this.config.getConfig().url
  constructor(private http: HttpClient, private config:ConfigService) { }


  /* Resources to lines of transport */
  public getLines(){
    return this.http.get(`${this.URL_API}/lineas`);
  }

  public createLine(line:any){
    return this.http.post(`${this.URL_API}/lineas`, line);
  }

  public updateLine(id: string, line:any){
    return this.http.put(`${this.URL_API}/lineas/${id}`, line);
  }

  public deleteLine(id: string){
    return this.http.delete(`${this.URL_API}/lineas/${id}`);
  }

  /* Resources to clients */
  public getClients(){
    return this.http.get(`${this.URL_API}/clientes`);
  }

  public createClient(client:any){
    return this.http.post(`${this.URL_API}/clientes`, client);
  }

  public updateClient(id: string, client:any){
    return this.http.put(`${this.URL_API}/clientes/${id}`, client);
  }

  public deleteClient(id: string){
    return this.http.delete(`${this.URL_API}/clientes/${id}`);
  }

  /* Resources to drivers */
  public getDrivers(){
    return this.http.get(`${this.URL_API}/conductores`);
  }

  public createDriver(driver:any){
    return this.http.post(`${this.URL_API}/conductores`, driver);
  }

  public updateDriver(id: string, driver:any){
    return this.http.put(`${this.URL_API}/conductores/${id}`, driver);
  }

  public deleteDriver(id: string){
    return this.http.delete(`${this.URL_API}/conductores/${id}`);
  }

  /* Resources to types of containers */
  public getTypes(){
    return this.http.get(`${this.URL_API}/tipos`);
  }

  public createType(type:any){
    return this.http.post(`${this.URL_API}/tipos`, type);
  }

  public updateType(id: string, type:any){
    return this.http.put(`${this.URL_API}/tipos/${id}`, type);
  }

  public deleteType(id: string){
    return this.http.delete(`${this.URL_API}/tipos/${id}`);
  }


  public getContainers(){
    return this.http.get(`${this.URL_API}/contenedores`);
  }


  /* Resources to yards of containers */
  public getYards(){
    return this.http.get(`${this.URL_API}/patios`);
  }

  public createYard(yard: any){
    return this.http.post(`${this.URL_API}/patios`, yard);
  }

  public updateYard(id:string, yard:any){
    return this.http.put(`${this.URL_API}/patios/${id}`, yard);
  }

  public deleteYard(id: string){
    return this.http.delete(`${this.URL_API}/patios/${id}`);
  }


  /* Resources to classes of shift */
  public getClassShifts(){
    return this.http.get(`${this.URL_API}/clases-turnos`);
  }

  public createClassShifts(shiftClass: any){
    return this.http.post(`${this.URL_API}/clases-turnos`, shiftClass);
  }

  public updateClassShifts(id: string, shiftClass: any){
    return this.http.put(`${this.URL_API}/clases-turnos/${id}`, shiftClass);
  }

  public deleteClassShifts(id: string){
    return this.http.delete(`${this.URL_API}/clases-turnos/${id}`);
  }
}
