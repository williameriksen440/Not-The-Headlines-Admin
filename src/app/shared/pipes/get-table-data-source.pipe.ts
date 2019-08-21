import {Pipe, PipeTransform} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Pipe({
    name: 'getTableDataSource'
})
export class GetTableDataSourcePipe implements PipeTransform {

    transform(dt: any, args?: any): any {
        return new MatTableDataSource(dt);
    }

}
