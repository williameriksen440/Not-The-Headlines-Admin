import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CONFIRM_DIALOG_SETTINGS, MAT_TABLE_PAGINATION_VALUES, SPINNER_DIAMETER} from '../../constants/settings';
import {GetTableDataSourcePipe} from '../../pipes/get-table-data-source.pipe';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-mat-table',
    templateUrl: './mat-reusable-table.component.html',
    styleUrls: ['./mat-reusable-table.component.scss']
})
export class MatReusableTableComponent implements OnInit, OnDestroy {

    @Input() dataObs;
    @Input() cols;
    // @Input() item;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns;
    spinnerDiameter = SPINNER_DIAMETER;
    paginationValues = MAT_TABLE_PAGINATION_VALUES;
    dataSource;
    filteredData;
    subscriptions: Subscription[] = [];

    constructor(
        private dataSrc: GetTableDataSourcePipe,
        private dialog: MatDialog,
        public router: Router,
        private toastr: ToastrService,
        public auth: AuthService
    ) {
    }

    ngOnInit() {

        // this.item = this.item.replace(/_/g, '-');
        this.displayedColumns = this.cols;
        this.getData(this.dataObs);
    }

    getData(dataObs, remove = false) {


        this.subscriptions.push(dataObs.subscribe(dt => {
            if (dt.hasOwnProperty('result')) {
                dt = dt['result'];
            }

            // Saving data with sorting and pagination
            this.dataSource = this.dataSrc.transform(dt);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

            if (remove) {
                // this.toastr.success(`The  ${this.item.replace(/_/g, ' ')} info has been removed successfully.`, 'Removed!');
            }

            // Adjusting sort setting here
            this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {

                // Numeric values sorting
                if (sortHeaderId === 'max_people' || sortHeaderId === 'min_people') {
                    data[sortHeaderId] = +data[sortHeaderId];
                    // Non case-sensitive sorting
                } else {
                    if (typeof data[sortHeaderId] === 'string') {
                        return data[sortHeaderId].toLocaleLowerCase();
                    }
                }

                return data[sortHeaderId];
            };


        }));
    }

    /**
     * Handles searching
     * @param filterValue search term for filtering table values
     */
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.filteredData = this.dataSource.filteredData;
        // console.log(this.dataSource)
    }


    /**
     * Handles column names normal appearance
     * @param col current column name
     * @returns column normalized name
     */
    normalizeColName(col): string {
        col = `${col[0].toUpperCase()}${col.slice(1)}`;
        return col.replace(/_/g, ' ');
    }

    /**
     * Removes a data row
     * @param row current row data object
     */
    remove(row) {
        // Setting dialog properties
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, CONFIRM_DIALOG_SETTINGS);

        // Post-confirming actions
        this.subscriptions.push(dialogRef.afterClosed().subscribe(
            result => {
                // if (result) {
                //     this.getData(this[`_${this.item.replace(/-/g, '_')}`].remove({id: row.id}), true);
                // }
            }
        ));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
