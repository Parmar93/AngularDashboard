import { Component, OnInit, } from '@angular/core';
import { UtilityService } from '../../../../utility.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  showSidebar = false;
  constructor(private utilityService:UtilityService) { }

  ngOnInit() {
    this.utilityService.sidebar.subscribe(data=>{
      setTimeout(()=>{
        this.showSidebar = data;
      },0)
    })
  }

}
