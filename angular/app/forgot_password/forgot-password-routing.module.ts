import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ForgotPasswordComponent }      from './forgot-password.component';


const forgotPasswordRoutes: Routes = [
    { path: 'forgot-password', component: ForgotPasswordComponent }
];


@NgModule({
    imports: [
        RouterModule.forChild(forgotPasswordRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})


export class ForgotPasswordRoutingModule {}