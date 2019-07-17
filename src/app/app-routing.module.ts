import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './Auth/login/login.component';
import {RegisterComponent} from './Auth/register/register.component';
import {AdminComponent} from './Auth/admin/admin.component';
import {ComplaintsComponent} from './Auth/complaints/complaints.component';
import {ChooseUserComponent} from './layout/choose-user/choose-user.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'complaints',
    component: ComplaintsComponent
  },
  {
    path: 'choose',
    component: ChooseUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
