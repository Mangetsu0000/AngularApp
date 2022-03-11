import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Cv} from "../model/cv";
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Input() cv: Cv | null = null;
  @Output() listToCv =  new EventEmitter<Cv>();
  
  constructor(private cvService: CvService) { 
    
  }

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }


  getcv (cv: Cv){
    console.log(cv);
    this.listToCv.emit(cv);
  }
}
