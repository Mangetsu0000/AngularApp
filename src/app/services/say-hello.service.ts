import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {
  constructor() { }
  hello(n1: any, n2: any, n3: any){
    alert(`Hello ${n1}, ${n2}, and ${n3}.`)

  }
}
