import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../utility.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  wrapper = false;
  constructor(private utilityService:UtilityService) { }

  ngOnInit() {
    this.utilityService.sidebar.subscribe(data=>{
      setTimeout(()=>{
        this.wrapper = data;
      },0)
    })
  }


}
