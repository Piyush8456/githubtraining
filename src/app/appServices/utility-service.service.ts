import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }

  messageServices(){
    alert("selected");
  }
  product=[
    {name:"laptop", id:"001"},
    {name:"Mobile", id:"002"},
    {name:"Tv", id:"003"},
    {name:"Refrigerator", id:"004"}
  ]
}
