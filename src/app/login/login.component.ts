import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {
    // username: null,
    // password: null,
  };
 

  constructor() { }

  ngOnInit(): void {
    }

  loginUser(): void {
    console.log(this.loginUser)
  }
  }

  