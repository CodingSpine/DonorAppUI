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
import { LoginService } from '../services/login/login.service';
import { AuthService } from '../services/auth/auth.service';

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
        forgotPassword: false,
        isRegisteredUser: false,
        incorrectCredentials: false
    }

    login(guest: Guest): void {
        console.log(guest);
        this.loginService.login(guest).subscribe((response) => {
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

    // tryLogin(guest: Guest): void {
    //     if (loginForm.invalid === true) {
    //         return;
    //     }
    //     else {
    //         this.login(guest);
    //     }
    // }

    forgotPassword(): void {
        this.guest.forgotPassword = true;
        var mainForm = document.getElementById('mainloginform');
        mainForm.classList.remove('activeform');
        mainForm.classList.add('inactiveform');

        var forgotPasswordForm = document.getElementById('forgotpasswordform');
        forgotPasswordForm.classList.remove('inactiveform');
        forgotPasswordForm.classList.add('activeform');
    }

    backToLogin(): void {
        this.guest.forgotPassword = false;
    }

    generateNewPassword(): void {

    }

    get diagnostic() { return JSON.stringify(this.guest); }
    constructor(public authService: AuthService, public loginService: LoginService, public router: Router) {

    }

    ngOnInit() {
    }

}
