import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    login: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(sessionStorage.getItem('password') === this.credentials.password) {
      this.router.navigateByUrl('/home');
    }

  }

}
