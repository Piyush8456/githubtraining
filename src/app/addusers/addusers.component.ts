import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  users=[]

  AddUsers(usr){
    this.users.push({
      name:usr.value
    })};

    RemoveUser(list){
      this.users.splice(list,1)
    }
  

}
