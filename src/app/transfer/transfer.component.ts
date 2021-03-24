import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  name="";
  parentFunction(data){
    console.log(data);
    this.name=data.name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
