import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  bookTicket(ticket: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tickets/book/`, ticket);
  }

  viewTickets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickets/view/`);
  }
}

