import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sdata="data services"

  constructor() { }
  checkData(){
    return "Hello adharsh"
  }
}
