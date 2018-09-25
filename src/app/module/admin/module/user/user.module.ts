import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../shared/modules/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule
  ],
  declarations: [
    UserManagementComponent,
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
