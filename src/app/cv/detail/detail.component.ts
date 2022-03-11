import {Component, Input, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Cv} from "../model/cv";
import { CvService } from '../services/cv.service';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor(private hireService : HireService,
              private toastrService: ToastrService) { }
  ngOnInit(): void {
  }
  hire(){
    if(this.cv){
      if(this.hireService.hire(this.cv)){ // we checked if cv is not empty because this.cv can not be a parameter while it's null 
        this.hireService.hire(this.cv);
        this.toastrService.success(`${this.cv.firstname} ${this.cv.name} has been hired`)
      }
      else{this.toastrService.warning(`${this.cv.firstname} ${this.cv.name} has already been hired`)}
      }
    }
    
}
