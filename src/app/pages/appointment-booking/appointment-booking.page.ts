import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import Appointment from 'src/app/Appointment';


@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.page.html',
  styleUrls: ['./appointment-booking.page.scss'],
})
export class AppointmentBookingPage implements OnInit {

  constructor(private dataService:  DataServiceService, private route: ActivatedRoute) { }

  appAgent: string
  appDate
      appOHIP
    appEmail
    appPhone
    appTime
    

  ngOnInit() {
    this.appAgent = this.route.snapshot.params.appAgent

  }

  //calling the add method
  appointmentAdd(){
    let appointment: Appointment =
        {appDate: this.appDate, appTime: this.appTime, appOHIP: this.appOHIP, appEmail: this.appEmail, appPhone: this.appPhone, appAgent: this.appAgent};
        this.dataService.addDataToLS(appointment)
    
    
  }
}
