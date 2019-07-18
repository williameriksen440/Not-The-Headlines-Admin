import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', email: 'hydrogen@gmail.com'}
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selected = 'option2';

  constructor() {
  }

  ngOnInit() {
  }

  displayedColumns: string[] = ['select', 'name', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }
}
