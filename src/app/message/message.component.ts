import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message;
  @Output()
  postMessageEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.message={
      value:"this is my message i like to post this"
    };
  }
 handleClick() {
  this.postMessageEvent.emit(this.message)
 }
}
