import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employess:any[] =[];
  constructor(public _employeeService :  EmployeeService) { }


  getEmployes(){
    this._employeeService.getEmployees().subscribe(data => this.employess = data);

}
ngOnInit() {
  // this._employeeService.getEmployees().subscribe(data => this.employess = data);
  
}
}