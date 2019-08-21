import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AdminComponent} from './admin/admin.component';
import {LayoutModule} from '../layout/layout.module';
import {ComplaintsComponent} from './complaints/complaints.component';


@NgModule({
    declarations: [
        AdminComponent,
        ComplaintsComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        LayoutModule
    ]
})
export class AdminModule {
}
