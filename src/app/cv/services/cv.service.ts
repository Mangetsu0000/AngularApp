import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = []

  constructor() {
    
    this.cvs = [
      new Cv(1, 'Dimitrov', 'Nicolay', 'Btc scammer', 'suck.jpg', '1234', 25),
      new Cv(2, 'Bori', 'Potato', 'Marverlous potato', 'potato.jpg', '111', 20),
      new Cv(3, 'Mouelhi', 'Fakhri', 'Web Dev', 'me.jpg', '123456', 24)
    ];

   }

  getCvs():Cv[]{
    return this.cvs;
    console.log("assss");
    
  }
}
