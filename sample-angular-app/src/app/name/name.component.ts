import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor() { }

  @Input() fName: String;
  @Input() lName: String;
  @Input() companyName: String;
  @Output() sendDetails = new EventEmitter<Object>();

  userObject: Object = {
    fName: "Arun",
    lName: "Kumar",
    companyName: "Perficient"
  };

  sendDetailsChildMethod() {
    this.sendDetails.emit(this.userObject);
  }

  ngOnInit() {
    
  }


}
