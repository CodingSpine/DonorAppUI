import { Component, OnInit } from '@angular/core';
import { Guest } from '../shared/guestUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    guest: Guest = {
        userID: "",
        password: "",
        forgotPassword: false
    }

    login(guest: Guest): void {
        console.log(guest);
    }
    constructor() { }

    ngOnInit() {
    }

}
