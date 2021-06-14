import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[appTableCell]',
})
export class TbCellDirective {
	constructor(public template: TemplateRef<unknown>) {}
}
