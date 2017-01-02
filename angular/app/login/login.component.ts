import { Component }                from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

// CommonJS style - working with "require"
import $ = require('jquery');


@Component({
    templateUrl: './public/views/login/login.page.html',
    styleUrls: [
        './public/assets/plugins/iCheck/square/blue.css'
    ]
})


export class LoginComponent {



    constructor() {
        console.log("test naja");
        $('input').index();
    }

}