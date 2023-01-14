import {
  Injectable, EventEmitter
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  ee: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public toggleModal(options: any){
    this.ee.emit(options);
  }

  public toggleModalTurno(options: any){
    this.ee.emit(options);
  }
}