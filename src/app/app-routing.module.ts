import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './security/login/login/login.component';
import { GoogleCallbackComponent } from './security/login/callback/googleCallback/google-callback/google-callback.component';
import { GithubCallbackComponent } from './security/login/callback/githubCallback/github-callback/github-callback.component';
import { AuthenticationService } from './security/authentication.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'home', component: HomeComponent, canActivate:[AuthenticationService]},
  { path: 'login', component: LoginComponent},
  { path: 'callback/google', component: GoogleCallbackComponent},
  { path: 'callback/github', component: GithubCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
