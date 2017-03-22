import {Component} from "@angular/core";
import {Hero} from "./hero";

@Component({
    // moduleId: module.id,
    templateUrl: '/public/views/testform/test-form.component.html',
    styleUrls: ['/public/css/test/form.css']
})

export class TestFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    newHero() {
        this.model = new Hero(42, '', '');
    }
}

