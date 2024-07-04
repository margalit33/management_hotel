import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  orderTreatment(treatmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/order_treatment/`, treatmentData);
  }

  getTreatments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/view_orders/`);
  }
}



