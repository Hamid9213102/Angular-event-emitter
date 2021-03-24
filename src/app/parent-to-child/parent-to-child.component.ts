import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss']
})
export class ParentToChildComponent implements OnInit {
  @Input() namesArry;
  constructor() { }

  ngOnInit(): void {
  }

}
