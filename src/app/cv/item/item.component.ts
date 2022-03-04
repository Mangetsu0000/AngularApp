import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor() { }
  @Output() itemToList = new EventEmitter<Cv>();
  ngOnInit(): void { 
  }
  itemToListEmitter (){
    if (this.cv){this.itemToList.emit(this.cv);}
  }
}
