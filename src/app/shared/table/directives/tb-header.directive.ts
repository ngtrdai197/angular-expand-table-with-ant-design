import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appTableHeader]'
})
export class TbHeaderDirective {

  constructor(public template: TemplateRef<unknown>) { }

}
