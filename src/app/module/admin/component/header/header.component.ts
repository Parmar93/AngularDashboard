import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../../utility.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private utilityService:UtilityService) { }
  sidebar = false;
  ngOnInit() {
  }
  toggleSidebar() {
    this.sidebar = !this.sidebar;
    this.utilityService.sidebar.next(this.sidebar);
  }
}
