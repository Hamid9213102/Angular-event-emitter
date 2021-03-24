import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import{DamyDataService} from '../damy-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'My First anguarl App';
  p = "this is number list";
  @Input() parentData:string;
  @Output() public sendData = new EventEmitter<string>();
  userList:any;
  constructor(
    private damyDataService:DamyDataService
  ) { 
    
  }
    
  ngOnInit(): void {
    //this.getUserData();
  
  this.sendData.emit('Child data');
  // Get all Users service
  // getUserData(){
    // this.damyDataService.getData().subscribe(data =>{
      // this.userList = data;
    // })
  }
  

}
