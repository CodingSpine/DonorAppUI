import { Injectable } from '@angular/core';
import { Guest } from '../shared/guestUser';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders,
        HttpResponse, HttpErrorResponse } from '@angular/common/http';

const headers = new HttpHeaders(
    {
    'Content-Type': 'application/json'
    });

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {

    }
    isLoggedIn = false;

  // store the URL so we can redirect after logging in
    redirectUrl = '/dashboard';

    login(guest: Guest): Observable<HttpResponse<{}>> {
    return  this.http.post('http://localhost:3000/login/login',
                        {
                            username: guest.userID,
                            password: guest.password
                        },
                        {
                            headers: headers,
                            observe: 'response'
                        })
                        .pipe(
                              catchError(this.handleError)
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

    logout(): void {
    this.isLoggedIn = false;
    }

    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error.err}`);
        }
        // return an observable with a user-facing error message
        return throwError(error.error);
    };


}
