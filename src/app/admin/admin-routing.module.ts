import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {ChooseUserComponent} from '../layout/choose-user/choose-user.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    },
    {
        path: 'complaints',
        component: ComplaintsComponent
    },
    {
        path: 'choose',
        component: ChooseUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
