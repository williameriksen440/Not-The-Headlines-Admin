import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './Auth/login/login.component';
import {RegisterComponent} from './Auth/register/register.component';
import {AdminComponent} from './Auth/admin/admin.component';
import {ComplaintsComponent} from './Auth/complaints/complaints.component';
import {AppRoutingModule} from './app-routing.module';
import {FacebookLoginComponent} from './Auth/facebook-login/facebook-login.component';
import {MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './Auth/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ComplaintsComponent,
    FacebookLoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
