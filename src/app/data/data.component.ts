import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Output() parentFunction:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  sendData(){
    let data={name:"ali",age:22}
    this.parentFunction.emit(data)
  }

}
