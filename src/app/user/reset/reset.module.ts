import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/modules/material.module';
import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ResetRoutingModule,
  ],
  declarations: [
    ResetComponent,
  ]
})
export class ResetModule { }
