import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  selectedPro:boolean=false;
  selectedProduct:string;
  addedProduct:any;

  onSelectProduct(product) {
    
      this.selectedPro=true;
      this.selectedProduct=product;
  }
  onAddedProduct(event){
    this.addedProduct =event
  }

}
