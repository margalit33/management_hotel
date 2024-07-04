import { Component } from '@angular/core';
import { TreatmentService } from '../services/treatment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TreatmentsComponent {
  treatments: any[] = [];
  treatmentData: any = {
    treatment_type: '',
    description: '',
    client: ''
  };

  constructor(private treatmentService: TreatmentService) { }

  ngOnInit(): void {
    this.treatmentService.getTreatments().subscribe(
      data => {
        this.treatments = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  orderTreatment(): void {
    this.treatmentService.orderTreatment(this.treatmentData).subscribe(
      response => {
        console.log(response);
        this.treatments.push(response);
      },
      error => {
        console.error(error);
      }
    );
  }
}

