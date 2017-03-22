import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms'; // use form

// app
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app.routing.module'; // use route

// module, route
import { LoginRoutingModule }      from './app/login/login-routing.module';
import { RegisterRoutingModule }   from './app/register/register-routing.module';
import { ForgotPasswordRoutingModule }   from './app/forgot_password/forgot-password-routing.module';

// component
import { PageNotFoundComponent }   from './app/errors/not-found.component'; // page not found!
import { LoginComponent }          from './app/login/login.component';
import { RegisterComponent }          from './app/register/register.component';
import { ForgotPasswordComponent }          from './app/forgot_password/forgot-password.component';
import {TestFormComponent} from "./app/testform/testform.component";


// import { DialogService }           from './services/dialog.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // use form
        // HeroesModule,
        LoginRoutingModule,
        RegisterRoutingModule,
        ForgotPasswordRoutingModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        PageNotFoundComponent,

        // test form
        TestFormComponent
    ],
    providers: [
        // DialogService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

