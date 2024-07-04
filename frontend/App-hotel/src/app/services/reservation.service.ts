import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  makeReservation(reservation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/make_reservation/`, reservation);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/view_reservations/`);
  }

  cancelReservation(reservationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cancel_reservation/${reservationId}/`);
  }
}

