import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() size: number = 50;

  @Input() cv: Cv | null = null;

  @Output() itemToList = new EventEmitter<Cv>();
  
  constructor() { }
  
  ngOnInit(): void { 
  }
  itemToListEmitter (){
    if (this.cv){this.itemToList.emit(this.cv);}
  }
}
