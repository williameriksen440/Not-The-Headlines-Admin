import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from '../admin/admin/admin.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {FacebookLoginComponent} from './facebook-login/facebook-login.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        FacebookLoginComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        LayoutModule
    ]
})
export class AuthModule {
}
