import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        public router: Router,
        private auth: AuthService
    ) {
    }

    ngOnInit() {
    }

    logout() {
        localStorage.setItem('token', '');
        this.router.navigate(['/']);
    }
}
