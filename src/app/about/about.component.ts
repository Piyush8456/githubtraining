import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appServices/message.service';
import { UtilityServiceService } from '../appServices/utility-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _msgService:UtilityServiceService) { }

 products={}
  ngOnInit() {
     this.products = this._msgService.product;

  }
  
  messageBox(){
  
    this._msgService.messageServices();

    

  }

}
