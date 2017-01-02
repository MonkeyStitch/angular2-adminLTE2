import { Component } from '@angular/core';

import globols = require('./globals');

@Component({
    selector: 'my-app',
    templateUrl: 'public/view/blank/blank.component.html'
})
export class AppComponent {

    show = globols.url

}
