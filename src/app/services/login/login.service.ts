import { Injectable } from '@angular/core';
import { Guest } from '../../shared/guestUser';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders,
        HttpResponse } from '@angular/common/http';
import { serviceErrorHandler } from '../../shared/serviceErrorHandler';
import { baseURL } from '../../shared/baseurl';

const headers = new HttpHeaders(
    {
    'Content-Type': 'application/json'
    });

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private serviceErrorHandler: serviceErrorHandler) { }

    login(guest: Guest): Observable<HttpResponse<any>> {
        return  this.http.post( baseURL + 'login/login',
                            {
                                username: guest.userID,
                                password: guest.password
                            },
                            {
                                headers: headers,
                                observe: 'response'
                            })
                            .pipe(
                                  catchError(this.serviceErrorHandler.handleError)
                              );
                            // .subscribe(response => {
                            // this.isLoggedIn = true;
                            // guest.isRegisteredUser = true;
                            // // Here, resp is of type HttpResponse<MyJsonData>.
                            // // You can inspect its headers:
                            // console.log(response.headers);
                            // // And access the body directly, which is typed as MyJsonData as requested.
                            // console.log(response);
                            // return of(guest);
                            // },err => {
                            //     console.log(err);
                            //     catchError(this.handleError('login', []));
                            //     // tap(heroes => this.log(`fetched heroes`)),  perform logging once you have a proper logger
                            //     return of(guest);
                            // });
    }

    logout() {
        return this.http.get( baseURL + 'login/logout')
                .pipe(catchError(this.serviceErrorHandler.handleError));
    }


}
