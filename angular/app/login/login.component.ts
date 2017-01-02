import {Component, OnInit, ElementRef}                from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

declare var jQuery:any;

@Component({
    templateUrl: './public/views/login/login-form.html',
})


export class LoginComponent implements OnInit {

    constructor(private _elRef:ElementRef) {

    }

    ngOnInit(): any {
        jQuery(this._elRef.nativeElement).find('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
        jQuery('body').css({background: '#d2d6de'});
    }


}