import { Component, OnInit , Input} from '@angular/core';
import { EmployeesService } from '../services/employees.service'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {


  searchText: string=''
  employeeList : any =[];

  constructor(private employeesService : EmployeesService) { }

  ngOnInit(): void {
    
    this.employeesService.getEmployeesInfo().subscribe(res=> this.employeeList=res)
    // this.employeeList= this.employeesService.getEmployeesInfo();  DIRECTLY USING SERVICE
  }
  
  // BELOW TASK HAS BEEN DONE USING SERVICES 'EmployeesService'     DIRECTLY USING SERVICE
  // employees=[
  //    {"empId":101,"empName":"Fred","empSal":30000,"empDesig":"Analyst"},   
  //    {"empId":102,"empName":"John","empSal":20000,"empDesig":"Associate Analyst"},
  //    {"empId":103,"empName":"Mike","empSal":25000,"empDesig":"Manager"},
  //    {"empId":104,"empName":"Sam","empSal":35000,"empDesig":"Consultant"},
  //    {"empId":105,"empName":"Peter","empSal":40000,"empDesig":"Senior Manager"}
  // ]
}
