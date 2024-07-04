import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { OrdersComponent } from './orders/orders.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ContactComponent } from './contact/contact.component';
import { TreatmentsComponent } from './treatments/treatments.component';

export const routes: Routes = [
  { path: '', component: RoomListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'treatments', component: TreatmentsComponent }
];






