/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Component }                from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
    templateUrl: './public/views/login/login.page.html',
    styleUrls: [
        './public/assets/plugins/iCheck/square/blue.css'
    ]
})


export class LoginComponent {



    constructor() {
        console.log("test naja");
        console.log($('input'));
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    }

}