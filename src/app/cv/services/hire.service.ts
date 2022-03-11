import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class HireService {
  hired :Cv[] = [];
  constructor() { }

  getHired(): Cv[]{
    return this.hired;
  }

  hire(cv: Cv): boolean{
    let index = this.hired.indexOf(cv);
    if (index === -1){
      this.hired.push(cv);
      return true;
    } 
    return false;
  }
}
