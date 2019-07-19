import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-choose-user',
    templateUrl: './choose-user.component.html',
    styleUrls: ['./choose-user.component.scss']
})
export class ChooseUserComponent implements OnInit {

    constructor(
        public router: Router
    ) {
    }

    ngOnInit() {
    }

}
