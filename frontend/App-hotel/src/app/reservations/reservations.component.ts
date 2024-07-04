import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule
  ]
})
export class ReservationsComponent {
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(
      data => {
        this.reservations = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  cancelReservation(reservationId: number): void {
    this.reservationService.cancelReservation(reservationId).subscribe(
      response => {
        console.log(response);
        this.reservations = this.reservations.filter(reservation => reservation.id !== reservationId);
      },
      error => {
        console.error(error);
      }
    );
  }
}

