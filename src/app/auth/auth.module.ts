import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from '../admin/admin/admin.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {FacebookLoginComponent} from './facebook-login/facebook-login.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        FacebookLoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule {
}
