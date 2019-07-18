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
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher, MatTableModule, MatCheckboxModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './layout/header/header.component';
import {ChooseUserComponent} from './layout/choose-user/choose-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ComplaintsComponent,
    HeaderComponent,
    ChooseUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [{
    provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
