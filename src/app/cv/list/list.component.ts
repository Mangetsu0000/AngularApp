import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Input() cv: Cv | null = null;
  @Output() listToCv =  new EventEmitter<Cv>();
  
  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'Nicolay', 'Dimitrov', 'Btc scammer', 'suck.jpg', '1234', 25),
      new Cv(2, 'Bori', 'Potato', 'Marverlous potato', 'potato.jpg', '111', 20),
      new Cv(3, 'Mouelhi', 'Fakhri', 'Web Dev', 'me.jpg', '123456', 24),
    
    ];
  }
  getcv (cv: Cv){
    console.log(cv);
    this.listToCv.emit(cv);
  }
}
