import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/settings';

@Injectable({
    providedIn: 'root'
})
export class ComplaintsService {

    constructor(
        private http: HttpClient
    ) {
    }

    get() {
        return this.http.get(`${API_URL}api/complaints/get`);
    }


}
