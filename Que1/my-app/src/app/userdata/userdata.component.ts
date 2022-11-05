import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor() { }
  name = '';
  email = '';
  phone = '';
  addr = '';

  uname = '';
  uemail = '';
  uphone = '';
  uaddr = '';

  ngOnInit(): void {
  }

  title = "Registration"
  toggle = false;

  displayData(name: any, email: any, phone: any, addr: any) {
    this.uname = name;
    this.uemail = email;
    this.uphone = phone;
    this.uaddr = addr;
    this.toggle = true;
  }
  

}
