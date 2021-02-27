import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { GmailLoginComponent } from './login/gmailLogin/gmail-login/gmail-login.component';
import { CallbackComponent } from './login/callback/callback/callback.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { GithubComponent } from './login/github/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GmailLoginComponent,
    CallbackComponent,
    LogoutComponent,
    GithubComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
