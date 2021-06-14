import { ContentChild, Directive, Input } from '@angular/core';
import { TbCellDirective } from './tb-cell.directive';
import { TbHeaderDirective } from './tb-header.directive';

@Directive({
	selector: 'app-tb-column',
})
export class TbColumnDirective {
	@Input() header!: string;
	@Input() fieldName!: string;
	@ContentChild(TbCellDirective) tbCell!: TbCellDirective;
	@ContentChild(TbHeaderDirective) tbHeader!: TbHeaderDirective;
	constructor() {}
}
