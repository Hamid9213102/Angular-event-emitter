import { Component, Input, OnInit, Output } from '@angular/core';
import { getMaxListeners } from 'process';
import { from } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { CryptoService } from './crypto.service';
import {FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import{FormControl,FormControlName,Validator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value="Ahmad";
    sendData(getvalue:any){
      this.value=getvalue
    }
  userForm= new FormGroup(
    {
      email : new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  )
  @Output() firstName;
  color: any;
  getName(name: string) {
    alert(name);
    console.log()
  }
  currentVal = ""
  getVal(val) {
    console.log(val);
    this.currentVal = val;
  }
  cars = [];
  constructor(
    private cryptoService: CryptoService,

  ) {
    
    console.log("from child", this.firstName);
  }
  ngOnInit() {
    //this.firstName = "Mr.Jhon"
    this.color = 'blue';
    this.getwhicals();
  }
  getwhicals(){
    this.cars = this.cryptoService.getMyItems();
  }
  data = [
    {
      name: "ali",
      age: 23,
      gmail: 'ali@gmail.com'
    },
    {
      name: "ahmad",
      age: 33,
      gmail: 'ahmad@gmail.com'
    },
    {
      name: "raza",
      age: 43,
      gmail: 'raza@gmail.com'
    }
  ]
  getUserVal(value) {
    console.log(value);
  }
  pikColor = "orange"
  error = false
  changeColor() {
    this.pikColor = 'gray'
  }
  entername="Ali"
  parentData=""
  transferData(){
    this.parentData = this.entername;
    console.log("Hello", this.value);
    console.log("Hello", this.parentData);

  }
}
