import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-remove',
  templateUrl: './create-remove.component.html',
  styleUrls: ['./create-remove.component.scss']
})
export class CreateRemoveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  student=[
    {rno:1,name:'piyush',age:17,std:12},
    {rno:22,name:'raj', age:15, std:10},
    {rno:8,name:'jay', age:13, std:8},
    {rno:10,name:'meet', age:10, std:5},
  ]
}
