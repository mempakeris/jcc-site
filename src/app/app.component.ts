import { BookingService } from './booking-service/booking-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: animations,
})
export class AppComponent {
  bookingState = '';
  bookingClosed = true;
  title = 'Joga Chiropractic Center';
  routerOutletReady = false;

  constructor(
    public router: Router,
    private bookingService: BookingService,
  ) {
    this.bookingService.changeEmitted.subscribe(state => {
      this.bookingState = state;
    });
  }

  animFinished() {
    this.bookingClosed = this.bookingState === 'booking-form-off';
  }

  routerOutletLoaded() {
    this.routerOutletReady = true;
  }
}
