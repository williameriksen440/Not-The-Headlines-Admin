import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        public auth: AuthService,
        public router: Router
    ) {
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']

        });
    }

    ngOnInit() {
    }

    login() {
        if (this.loginForm.valid) {
            this.auth.login(this.loginForm.value).subscribe((dt: any) => {
                this.router.navigate(['admin/choose']);
                localStorage.setItem('token', dt.token);
            });
        }

    }

}
