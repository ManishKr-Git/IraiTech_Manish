import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {

  }
  findMissing(x) {
    if (x % 2 == 0) {
      alert(x * x - 1)
    }
    else {
      alert(x * x + 1)
    }
  }


}
