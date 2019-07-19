import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AdminComponent} from './admin/admin/admin.component';
import {ComplaintsComponent} from './auth/complaints/complaints.component';
import {AppRoutingModule} from './app-routing.module';
import {FacebookLoginComponent} from './auth/facebook-login/facebook-login.component';
import {
    ErrorStateMatcher,
    ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './layout/header/header.component';
import {ChooseUserComponent} from './layout/choose-user/choose-user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './shared/helpers/http.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {LayoutModule} from './layout/layout.module';
import {HomeComponent} from './auth/home/home.component';
import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtModule} from '@auth0/angular-jwt';


// Token getter for JWT module
export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        AppComponent,
        ComplaintsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        LayoutModule,
        ToastrModule.forRoot({
            preventDuplicates: true
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:3000', '68.183.36.96:80', 'secretsouth.ie', '68.183.36.96'],
                blacklistedRoutes: ['localhost:3000/auth/', '68.183.36.96:80/auth/', 'secretsouth.ie/auth/', '68.183.36.96/auth/']
            }
        }),
    ],
    providers: [{
        provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher
    },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        JwtHelperService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
