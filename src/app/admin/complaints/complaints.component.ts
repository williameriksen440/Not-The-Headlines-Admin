import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ComplaintsService} from '../../shared/services/complaints.service';

@Component({
    selector: 'app-complaints',
    templateUrl: './complaints.component.html',
    styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

    columns;
    complaints: Observable<any>;

    constructor(
        private complaintsService: ComplaintsService
    ) {
    }

    ngOnInit() {
        this.complaints = this.complaintsService.get();
    }

}
