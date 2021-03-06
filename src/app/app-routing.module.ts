import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AdminComponent} from './admin/admin/admin.component';
import {ComplaintsComponent} from './admin/complaints/complaints.component';
import {ChooseUserComponent} from './layout/choose-user/choose-user.component';
import {HomeComponent} from './auth/home/home.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {NotFoundComponent} from './auth/not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuard]
    },
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
