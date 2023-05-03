import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  data="Your perfect banking partner"
  placeh="your acno"
  
  constructor() {}
    ngOnInit():void{
     
    }
    login(){
      alert("Login is clicked");
      
    }
    unameChange(event:any){
      console.log(event.target.value);
      

    }
}
