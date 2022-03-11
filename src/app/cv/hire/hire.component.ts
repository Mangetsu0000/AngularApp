import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {
  hired:Cv[]=[]
  constructor(private hireService : HireService) { }

  ngOnInit(): void {
    this.hired = this.hireService.getHired();
  }

}
