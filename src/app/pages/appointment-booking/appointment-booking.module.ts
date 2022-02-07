import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentBookingPageRoutingModule } from './appointment-booking-routing.module';

import { AppointmentBookingPage } from './appointment-booking.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentBookingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AppointmentBookingPage]
})
export class AppointmentBookingPageModule {}
