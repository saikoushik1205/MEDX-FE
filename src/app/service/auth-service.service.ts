import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl = 'https://medx-be-d5gw.onrender.com/api';
  constructor(private http: HttpClient) {}

  login(newUser: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, newUser);
  }
}
