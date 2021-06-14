import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

import { TableComponent } from './table/table.component';
import { TbColumnDirective } from './table/directives/tb-column.directive';
import { TbCellDirective } from './table/directives/tb-cell.directive';
import { TbHeaderDirective } from './table/directives/tb-header.directive';
import { PickValuePipe } from './table/pick-value.pipe';

const DIRECTIVES = [TbColumnDirective, TbCellDirective, TbHeaderDirective];
const COMPONENTS = [TableComponent];
const PIPES = [PickValuePipe];

const DELEXS = [...COMPONENTS, ...DIRECTIVES, ...PIPES];

@NgModule({
	declarations: DELEXS,
	imports: [CommonModule, NzTableModule],
	exports: DELEXS,
})
export class SharedModule {}
