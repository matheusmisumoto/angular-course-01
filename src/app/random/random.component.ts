import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  getRandomNumber(){
    return Math.round(50*Math.random());
  }

  getRandomNumberList(){
    let list: number[] = [];
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    return list;
  }

  constructor() { }

  ngOnInit() {
  }

}