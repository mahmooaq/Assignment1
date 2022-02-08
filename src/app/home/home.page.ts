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
  deletedAppointment: Appointment
  emailID: string
  flag: boolean = false
  appAgent: string

  constructor(private dataService: DataServiceService) {
    
    //loading data from local storage
    this.dataService.loadDataToLS()
  }

  //fetching data from LocalStorage
  loadAppointment() {
    this.dataService.loadDataToLS()
    this.appList = this.dataService.fetchDataFromLS()
    // console.log(this.appList + "this is coming from appList")
    // console.log("this is coming from fetch data from LS", this.dataService.fetchDataFromLS());
    
  }
  // confirming the appointment to be deleted
  confirmToDeleteAppt(index:string){
    console.log(index, "this is the confrim delete appt")
    this.emailID = index
    this.flag = true
  }

  delete(emailID){
      this.dataService.removeData(emailID)
      console.log("email id deleted", emailID);    
      
      this.appList = this.dataService.fetchDataFromLS()  
      console.log("Deleted");    
      this.flag = false
      
  }
  cancel(){
    this.emailID = ""
    this.flag = false

  }

  
}
