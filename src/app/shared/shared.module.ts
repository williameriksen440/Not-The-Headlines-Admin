import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {MatReusableTableComponent} from './components/mat-reusable-table/mat-reusable-table.component';
import {GetTableDataSourcePipe} from './pipes/get-table-data-source.pipe';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    declarations: [
        MatReusableTableComponent,
        GetTableDataSourcePipe,
        ConfirmationDialogComponent
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
        MatReusableTableComponent
    ]
})
export class SharedModule {
}
