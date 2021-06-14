import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	AfterContentInit,
	QueryList,
	ContentChildren,
} from '@angular/core';
import { IRowData } from './models/table-config.interface';
import { TbColumnDirective } from './directives/tb-column.directive';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, AfterContentInit {
	@Input() public rows!: IRowData[];
	@ContentChildren(TbColumnDirective) columns!: QueryList<TbColumnDirective>;
	constructor() {}

	ngOnInit(): void {}

	ngAfterContentInit(): void {
		console.log(this.columns);
	}
}
