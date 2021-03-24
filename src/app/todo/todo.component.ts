import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  array = [20,43,44, 100, 200, 500];
  arrays = [43,55,43,54,33,5,12];
  name="Hamid";
  myarray = ["hamid","Ali","Raza"];
  istrue: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onShow(event){
    this.istrue = !this.istrue;
    console.log(event)
  }

}
