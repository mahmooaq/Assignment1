import { Time } from "@angular/common";

export default interface Appointment{
    appDate: Date
    appTime:Time
    appOHIP:number
    appEmail:string
    appPhone:number
    appAgent:string
}