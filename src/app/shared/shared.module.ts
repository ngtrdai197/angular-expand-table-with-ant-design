import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

import { TableComponent } from './table/table.component';
import { TbColumnDirective } from './table/directives/tb-column.directive';
import { TbCellDirective } from './table/directives/tb-cell.directive';
import { TbHeaderDirective } from './table/directives/tb-header.directive';
import { PickValuePipe } from './table/pick-value.pipe';

const DIRECTIVES = [TbColumnDirective, TbCellDirective, TbHeaderDirective];

@NgModule({
	declarations: [TableComponent, ...DIRECTIVES, PickValuePipe],
	imports: [CommonModule, NzTableModule],
	exports: [TableComponent, ...DIRECTIVES],
})
export class SharedModule {}
