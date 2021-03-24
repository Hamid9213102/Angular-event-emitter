import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {
cars=[
  {name:'BMW',color:'red'},
  {name:'HONDA',color:'white'}
];
  constructor() { }

getMyItems()
{
  return this.cars;
}
}