import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BedsServiceService {
  baseUrl = 'https://medx-be-d5gw.onrender.com/api/care-units';
  constructor(private http: HttpClient) {}
  newBed(careUnitId: any, bed: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${careUnitId}/beds`, bed);
  }
  getAllBeds(careUnitId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${careUnitId}/beds`);
  }
  editBed(careUnitId: any, bed: any, bedId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${careUnitId}/beds/${bedId}`, bed);
  }
  deleteBed(careUnitId: any, bedId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${careUnitId}/beds/${bedId}`);
  }
}
