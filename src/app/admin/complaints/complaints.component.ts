import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ComplaintsService} from '../../shared/services/complaints.service';
import {SubjectService} from '../../shared/services/subject.service';

@Component({
    selector: 'app-complaints',
    templateUrl: './complaints.component.html',
    styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

    columns = ['extractedTitle', 'link', 'category', 'type', 'actions'];
    complaints;

    constructor(
        private complaintsService: ComplaintsService,
        private subject: SubjectService
    ) {
    }

    ngOnInit() {
        this.getComplaints({});
    }

    changeComplaintsType(type) {
        this.getComplaints(type ? {type} : {});
    }

    getComplaints(params) {
        this.complaintsService.get(params).subscribe(dt => {
            this.complaints = dt;
            this.subject.setTableData(dt);
        });
    }

}
