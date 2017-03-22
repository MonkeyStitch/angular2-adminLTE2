"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms'); // use form
// app
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app.routing.module'); // use route
// module, route
var login_routing_module_1 = require('./app/login/login-routing.module');
var register_routing_module_1 = require('./app/register/register-routing.module');
var forgot_password_routing_module_1 = require('./app/forgot_password/forgot-password-routing.module');
// component
var not_found_component_1 = require('./app/errors/not-found.component'); // page not found!
var login_component_1 = require('./app/login/login.component');
var register_component_1 = require('./app/register/register.component');
var forgot_password_component_1 = require('./app/forgot_password/forgot-password.component');
var testform_component_1 = require("./app/testform/testform.component");
// import { DialogService }           from './services/dialog.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                // HeroesModule,
                login_routing_module_1.LoginRoutingModule,
                register_routing_module_1.RegisterRoutingModule,
                forgot_password_routing_module_1.ForgotPasswordRoutingModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                not_found_component_1.PageNotFoundComponent,
                // test form
                testform_component_1.TestFormComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map