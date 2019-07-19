import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {ChooseUserComponent} from './choose-user/choose-user.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        HeaderComponent,
        ChooseUserComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        HeaderComponent,
        ChooseUserComponent
    ]
})
export class LayoutModule {
}
