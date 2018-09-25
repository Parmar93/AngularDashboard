import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/modules/material.module';
import { ForgotComponent } from './forgot.component';
import { ForgotRoutingModule } from './forgot-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ForgotRoutingModule
  ],
  declarations: [
    ForgotComponent
  ]
})
export class ForgotModule { }













