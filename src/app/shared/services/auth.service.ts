import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/settings';

// JWT helper
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) {
    }

    /**
     * Authenticates a user
     * @param data
     */
    login(data) {
        return this.http.post(`${API_URL}api/user/login`, data);
    }

    /**
     * Checks to see if user logged in/ token expired
     */
    loggedIn() {
        return !this.jwtHelper.isTokenExpired();
    }
}
