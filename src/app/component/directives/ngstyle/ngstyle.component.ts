import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  color = 'rgb(180, 132, 34)';
  bgc = '#fff';
  font = 'Arial';
  size = '80px';
  alignement = 'center';
  constructor() { }

  ngOnInit(): void {
  }

}
