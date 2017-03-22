import {Component, OnInit, ElementRef}                from '@angular/core';

declare var jQuery:any;

@Component({
    templateUrl: './public/views/login/login-form.component.html',
})


export class LoginComponent implements OnInit {


    constructor(private _elRef:ElementRef) { // form builder simplify form initialization

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