import { Component, Input, OnInit } from '@angular/core';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(private sayHelloService : SayHelloService) { }

  
  ngOnInit(): void {
    // this.sayHelloService.hello("Nikolay", "Potato", "Fakhri");
  }
  getcv (cv: Cv){
    console.log(cv);
  }
  listToCvUpdater (cv: Cv){ 
    this.cv=cv;
  }
}
