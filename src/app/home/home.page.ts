import { Component } from '@angular/core';
import Appointment from '../Appointment';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  appList: Appointment[]

  constructor(private dataService: DataServiceService) {
    
    //loading data from local storage
    this.dataService.loadDataToLS()
  }

  //fetching data from LocalStorage
  loadAppointment() {
    this.dataService.loadDataToLS()
    this.appList = this.dataService.fetchDataFromLS()
    console.log(this.appList + "this is coming from appList")
    console.log("this is coming from fetch data from LS", this.dataService.fetchDataFromLS());
    
  }


  
}
