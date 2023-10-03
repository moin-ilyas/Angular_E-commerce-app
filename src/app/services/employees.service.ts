import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employeesRestURL : string = 'assets/emp.json' ;
  constructor(private httpClient : HttpClient){}

  getEmployeesInfo(){
    return this.httpClient.get(this.employeesRestURL)

  //   return [
  //     {"empId":101,"empName":"Fred","empSal":30000,"empDesig":"Analyst"},   
  //     {"empId":102,"empName":"John","empSal":20000,"empDesig":"Associate Analyst"},
  //     {"empId":103,"empName":"Mike","empSal":25000,"empDesig":"Manager"},
  //     {"empId":104,"empName":"Sam","empSal":35000,"empDesig":"Consultant"},
  //     {"empId":105,"empName":"Peter","empSal":40000,"empDesig":"Senior Manager"}
  //  ]
  }
}
