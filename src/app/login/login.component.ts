import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Guest } from '../shared/guestUser';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
    guest: Guest = {
        userID: "",
        password: "",
        forgotPassword: false
    }

    login(guest: Guest): void {
        console.log(guest);
        // if login successful do #loginForm.reset in html
    }

    get diagnostic() { return JSON.stringify(this.guest); }
    constructor() { }

    ngOnInit() {
    }

}
