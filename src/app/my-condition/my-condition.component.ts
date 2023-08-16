import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-condition',
  templateUrl: './my-condition.component.html',
  styleUrls: ['./my-condition.component.scss']
})
export class MyConditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  visibility:boolean=false;

  visibilityOn(){
    this.visibility=true;
  }

  product:string="";

  selectProduct:string;

  selectItems(val){
    this.selectProduct=val.target.value

  }

  Item=[
    {itemImg : '', name: "shirt", id: "item1", price:500},
    {itemImg : '', name: "T-shirt", id: "item2", price:300},
    {itemImg : '', name: "pent", id: "item3", price:400},
    {itemImg : '', name: "Trawser", id: "item4", price:200},
    
  ]
}
