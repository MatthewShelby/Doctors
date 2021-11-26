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
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { AuthGuard } from './Lateral/Guard/auth.guard';
// import { SecureInnerPagesGuard } from './Lateral/Guard/secure-inner-pages.guard';
// import { TestComponent } from './test/test.component';
import { ChildComponent } from './test/child/child.component';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'email-confirmation/:activeCode/:userId', component: EmailConfirmationComponent },
  { path: 'test', component: ChildComponent },
  { path: 'user-home', component: HomeComponent ,  canActivate:[AuthGuard]},
  { path: 'user-profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'user-base', component: BaseComponent ,  canActivate:[AuthGuard]},
  { path: 'user-search', component: UserSearchComponent ,  canActivate:[AuthGuard]},
  { path: 'user-bookmarks', component: UserBookmarksComponent,  canActivate:[AuthGuard] },
  { path: 'user-appointments', component: UserAppointmentsComponent ,  canActivate:[AuthGuard]},
  { path: 'chat', component: ChatPageComponent},
  // { path: 'email-confirmation:activeCode:userId', component: EmailConfirmationComponent },
 
  { path: '', component: StartPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
