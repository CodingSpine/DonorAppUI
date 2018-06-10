import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Guest } from '../shared/guestUser';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ],
  animations: [
      trigger('forgotPasswordState', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate(100)
        ]),
        transition('* => void', [
          animate(100, style({transform: 'translateX(100%)'}))
        ])
      ])
    ]
})
export class LoginComponent implements OnInit {
    guest: Guest = {
        userID: "",
        password: "",
        forgotPassword: false,
        isRegisteredUser: false,
        incorrectCredentials: false
    }

    login(guest: Guest): void {
        console.log(guest);
        this.authService.login(guest).subscribe((response) => {
        //this.setMessage();
            //this.guest = guest;
            if (response.body.success === true) {//this.authService.isLoggedIn
                this.authService.isLoggedIn = true;
                guest.incorrectCredentials = false;
                // if login successful do #loginForm.reset in html

                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

                // Redirect the user
                this.router.navigate([redirect]);
            }
        },
        (error) => {
            console.log(error);
            guest.incorrectCredentials = true;
        });
    }

    forgotPassword(): void {
        this.guest.forgotPassword = true;
    }

    generateNewPassword(): void {

    }

    get diagnostic() { return JSON.stringify(this.guest); }
    constructor(public authService: AuthService, public router: Router) {

    }

    ngOnInit() {
    }

}
