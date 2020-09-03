import { Injectable } from '@angular/core';
import { Observable, throwError, identity  } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { TokenResponse } from '../Models/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class TokensService {

  private url = 'http://localhost:9000/token';
  constructor(private http: HttpClient) { }

  getToken(email: string): Observable<TokenResponse> {
    alert();
    return this.http.get<TokenResponse>(this.url + '?identity=' + email).pipe(
      retry(2),
      catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    alert('An error occured\nStatus code' + error.status + '\nerror message:' + error.message);
    console.log(error);

    return throwError(error);
  }
}
