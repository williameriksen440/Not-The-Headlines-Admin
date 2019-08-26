import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {MatReusableTableComponent} from './components/mat-reusable-table/mat-reusable-table.component';
import {GetTableDataSourcePipe} from './pipes/get-table-data-source.pipe';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {GetUrlBasePipe} from './pipes/get-url-base.pipe';

@NgModule({
    declarations: [
        MatReusableTableComponent,
        GetTableDataSourcePipe,
        ConfirmationDialogComponent,
        GetUrlBasePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatReusableTableComponent,
        GetUrlBasePipe
    ]
})
export class SharedModule {
}
