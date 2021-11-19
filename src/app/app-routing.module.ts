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

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-home', component: HomeComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'user-base', component: BaseComponent },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-bookmarks', component: UserBookmarksComponent },
  { path: 'user-appointments', component: UserAppointmentsComponent },
  { path: '', component: StartPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
