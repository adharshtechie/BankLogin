import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  data="Your perfect banking partner"
  placeh="your acno"
  uname:any
  passw:any

  constructor() {}
    ngOnInit():void{
     
    }
    login(a:any,b:any){
      this.uname=a.value
      this.passw=b.value
      alert("Login is clicked");
      console.log(this.uname,this.passw);
      
    }
    // unameChange(event:any){
    //   console.log(event.target.value);
      

    // }
}
