import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CommonService} from '../providers/common-service';
import { HttpClientModule } from "@angular/common/http";
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,
    ButtonModule,FormsModule,CookieModule.forRoot(),CardModule],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
