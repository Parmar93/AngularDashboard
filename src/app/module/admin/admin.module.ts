import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/modules/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UserModule } from './module/user/user.module';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { ModalDialogComponent } from './component/modal-dialog/modal-dialog.component';
import { FilterComponent } from './component/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    UserModule
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, DashboardComponent, BreadcrumbComponent, ModalDialogComponent, FilterComponent],  
})
export class AdminModule { }

