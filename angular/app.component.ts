import { Component } from '@angular/core';

// import variable global
import globols = require('./app.globals');

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`
    //templateUrl: 'public/views/login/login-form.component.html',
})
export class AppComponent {

}
