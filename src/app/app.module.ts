import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/common---/header/header.component';
import { WrapperComponent } from './pages/common---/wrapper/wrapper.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SigninComponent } from './pages/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Interceptor } from './Lateral/interceptor';
import { Server } from './Lateral/Server';

// --- material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/User/home/home.component';
import { FooterComponent } from './pages/User/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './pages/User/profile/profile.component';
import { BaseComponent } from './pages/User/base/base.component';
import { UserSearchComponent } from './pages/User/user-search/user-search.component';
import { UserAppointmentsComponent } from './pages/User/user-appointments/user-appointments.component';
import { UserBookmarksComponent } from './pages/User/user-bookmarks/user-bookmarks.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
// import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SecureInnerPagesGuard } from './Lateral/Guard/secure-inner-pages.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { DataPackage, DialogDataExample } from './Material/Dialog/dialog';
import { AuthGuard } from './Lateral/Guard/auth.guard';
import { DIALOG_HEAD, DIALOG_TITLE, DIALOG_CONTENT } from './Material/Dialog/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TestComponent } from './test/test.component';
// import { DataService } from './services/data-ser.service';
import { ChildComponent } from './test/child/child.component';
import { NumberService } from './test/number-service.service';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { HubService } from './chat/hub.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    StartPageComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    BaseComponent,
    UserSearchComponent,
    UserAppointmentsComponent,
    UserBookmarksComponent,
    EmailConfirmationComponent,
    DialogDataExample,
    TestComponent,
    ChildComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // ---material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    Server,
    NumberService,
    HubService,
    // DataService,
    FooterComponent,
    [Server, AuthGuard, SecureInnerPagesGuard],
    DialogDataExample,
    { provide: DIALOG_HEAD, useValue: "My Wonderful head" },
    { provide: DIALOG_TITLE, useValue: "My Wonderful Title" },
    { provide: DIALOG_CONTENT, useValue: "My Wonderful content" }




  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Material icon library
// https://fonts.google.com/icons?selected=Material+Icons