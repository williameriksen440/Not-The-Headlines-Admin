import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AdminComponent} from './admin/admin/admin.component';
import {ComplaintsComponent} from './auth/complaints/complaints.component';
import {ChooseUserComponent} from './layout/choose-user/choose-user.component';


const routes: Routes = [
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},

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
