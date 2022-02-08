import { Injectable } from '@angular/core';
import Appointment from './Appointment';
import {AppointmentData} from 'src/assets/Data/AppointmentData';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


  AppointmentData: Appointment[] = AppointmentData
  //Load data to Ls

  loadDataToLS(){
    
    for (let index = 0; index < AppointmentData.length; index++) {
        localStorage.setItem(this.AppointmentData[index].appEmail,JSON.stringify(this.AppointmentData[index]))
    }
  }

  //fetch data from LS

  fetchDataFromLS(){
    let app = []

    for (let index = 0; index < localStorage.length; index++) {
      app.push( JSON.parse(localStorage.getItem(localStorage.key(index))));
      console.log("THis is coming form Dataservice fetch data from LS", localStorage.getItem(localStorage.key(index)));
      
 }
  return app
      
    
  }

  //Delete Data from LS
  removeData(key:string) {
      localStorage.removeItem(key);
  } 
  
  //Add Data to LS
  addDataToLS(app: Appointment){
    localStorage.setItem(app.appEmail, JSON.stringify(app))
  }


}
