import { Component } from '@angular/core';
import { IRowData } from './shared/table/models/table-config.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-expand-table-with-ant-design';
	public rows: IRowData[] = [
		{ id: 1, name: 'Nguyen Huy', dob: new Date('06-24-1991') },
		{ id: 2, name: 'Nguyen Duyen', dob: new Date('11-01-1994') },
		{ id: 3, name: 'Nguyen Dai', dob: new Date('01-29-1997') },
		{ id: 4, name: 'Nguyen Loc', dob: new Date('02-03-2000') },
	];
}
