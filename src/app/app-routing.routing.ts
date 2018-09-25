import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: './user/login/login.module#LoginModule' },
  { path: 'forgot', loadChildren: './user/forgot/forgot.module#ForgotModule' },
  { path: 'reset', loadChildren: './user/reset/reset.module#ResetModule' },  
  { path: 'admin', loadChildren: './module/admin/admin.module#AdminModule' },  
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
  ),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
