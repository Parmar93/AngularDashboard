import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  selectedValue: string;

  constructor() { }

  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // this.dataSource.sort = this.sort;
  }
  numbers: Display[] = [
    {value: 'display-0', viewValue: '10'},
    {value: 'dispaly-1', viewValue: '20'},
    {value: 'display-2', viewValue: '30'}
  ];
 
  displayedColumns: string[] = ['position', 'user_id', 'name', 'email_id', 'pets', 'mobile_no', 'service_request', 'payment', 'status', 'action'];
  dataSource = ELEMENT_DATA;

}


export interface Display {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  position: number;
  user_id: number;
  name: string;
  email_id: string;
  pets: number;
  mobile_no: number;
  service_request: number;
  payment: string;
  status: string;
  action: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, user_id: 123, name: 'Peter Parker', email_id: 'peterparker@gmail.com', pets: 2, mobile_no: 1234567890, service_request: 10, payment: '$300', status: 'Active', action: ''},
  {position: 2, user_id: 123, name: 'Peter Parker', email_id: 'peterparker@gmail.com', pets: 2, mobile_no: 1234567890, service_request: 10, payment: '$300', status: 'Active', action: ''},
  {position: 3, user_id: 123, name: 'Peter Parker', email_id: 'peterparker@gmail.com', pets: 2, mobile_no: 1234567890, service_request: 10, payment: '$300', status: 'Active', action: ''},
  {position: 4, user_id: 123, name: 'Peter Parker', email_id: 'peterparker@gmail.com', pets: 2, mobile_no: 1234567890, service_request: 10, payment: '$300', status: 'Active', action: ''},
  {position: 5, user_id: 123, name: 'Peter Parker', email_id: 'peterparker@gmail.com', pets: 2, mobile_no: 1234567890, service_request: 10, payment: '$300', status: 'Active', action: ''},
  
];




