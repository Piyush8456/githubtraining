import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() selectedPro:boolean=false;
  @Input() selectedProduct:string;
  @Output() addedProduct:any= new EventEmitter();

  addToCart(){
    this.addedProduct.emit(this.selectedProduct);
  }

}
