import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	AfterContentInit,
	QueryList,
	ContentChildren,
	HostBinding,
	Output,
	EventEmitter,
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
	@Input() public tbRows!: IRowData[];
	@Input() tbTotal!: number;
	@Input() tbPageIndex!: number;
	@Input() tbPageSize!: number;
	@Output() tbPageIndexChanged = new EventEmitter<number>();
	@Output() tbPageSizeChanged = new EventEmitter<number>();
	@Input() tbLoading: boolean = false;
	@Input() tbFrontPagination: boolean = false;
	@Input() tbPagaSizeOptions: number[] = [2, 10, 20, 30, 40];
	@Input() tbShowSizeChanger: boolean = true;

	@ContentChildren(TbColumnDirective) columns!: QueryList<TbColumnDirective>;
	@HostBinding('class') classes = 'block m-4';

	constructor() {}

	ngOnInit(): void {}

	ngAfterContentInit(): void {
		console.log(this.columns);
	}
}
