import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  timestamp = new Date();

  getHour(){
    return this.timestamp.getHours();
  }

  getGreeting(){
    if(this.getHour() >= 18){
      return "Boa noite!";
    }
    else if(this.getHour() >= 12){
      return "Boa tarde!";
    }
    else if(this.getHour() >= 6){
      return "Bom dia!";
    }
    else {
      return "Vá dormir!";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}