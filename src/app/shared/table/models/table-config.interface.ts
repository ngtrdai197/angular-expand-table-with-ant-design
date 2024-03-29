export interface IRowData {
	id: number;
	name: string;
	dob: Date | string;
}

export interface IColumnData {
	header: string;
	fieldName: string;
}

export interface ITableData {
	tbRows: IRowData[];
	tbTotal: number;
	tbPageIndex: number;
	tbPageSize: number;
}
