import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms'; // use form

// app
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app.routing.module'; // use route

// module, route
import { LoginRoutingModule }      from './app/login/login-routing.module';

// component
import { PageNotFoundComponent }   from './app/errors/not-found.component'; // page not found!
import { LoginComponent }          from './app/login/login.component';
// import { HeroesModule }            from './app/heroes/heroes.module';


// import { DialogService }           from './services/dialog.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // HeroesModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    providers: [
        // DialogService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

