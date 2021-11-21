import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SigninComponent } from './Pages/signin/signin.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/User/home/home.component';
import { ProfileComponent } from './pages/User/profile/profile.component';
import { UserSearchComponent } from './pages/User/user-search/user-search.component';
import { UserAppointmentsComponent } from './pages/User/user-appointments/user-appointments.component';
import { UserBookmarksComponent } from './pages/User/user-bookmarks/user-bookmarks.component';
import { BaseComponent } from './pages/User/base/base.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { RegisterDoneComponent } from './pages/register-done/register-done.component';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { Guard } from './Lateral/Guard';
import { AuthGuard } from './auth.guard';
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-home', component: HomeComponent ,  canActivate:[AuthGuard]},
  { path: 'user-profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'user-base', component: BaseComponent ,  canActivate:[AuthGuard]},
  { path: 'user-search', component: UserSearchComponent ,  canActivate:[AuthGuard]},
  { path: 'user-bookmarks', component: UserBookmarksComponent,  canActivate:[AuthGuard] },
  { path: 'user-appointments', component: UserAppointmentsComponent ,  canActivate:[AuthGuard]},
  { path: 'email-confirmation/:ac', component: EmailConfirmationComponent },
  { path: 'register-done', component: RegisterDoneComponent },
  { path: '', component: StartPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
