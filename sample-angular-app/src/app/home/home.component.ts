import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  companyName: String = "Perficient";
  userString: String;

  sendDetailsParentMethod($event){
    this.userString = $event.fName + " " + $event.lName + " " +$event.companyName;
  }

  ngOnInit() {
  }

}
