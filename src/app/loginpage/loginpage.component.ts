import { Component,OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  // data="Your perfect banking partner"
  // placeh="your acno"
  uname:any
  passw:any

  constructor(private ad:DataService) {

  }
    ngOnInit():void{
     
    }
    login(){
      // alert(this.uname)
      // alert(this.ad.sdata)
      alert(this.ad.checkData())
      
    }
    
}
