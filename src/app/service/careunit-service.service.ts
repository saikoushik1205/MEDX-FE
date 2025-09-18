import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CareunitServiceService {
  baseUrl: string = 'https://medx-be-d5gw.onrender.com/api/care-units';
  constructor(private http: HttpClient) {}
  newCareUnit(careUnit: any): Observable<any> {
    return this.http.post(this.baseUrl, careUnit);
  }
  getAllCareUnits(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  editUsers(id: any, careUnit: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, careUnit);
  }
  deleteCareUnit(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
