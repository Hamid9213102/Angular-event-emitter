import { Component, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() firstName = "Hellow world";
  constructor() { }

  ngOnInit(): void {
    
    //this.firstName = "Mr.jhon"
  }

}
