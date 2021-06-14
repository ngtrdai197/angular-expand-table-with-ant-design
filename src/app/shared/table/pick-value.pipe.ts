import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pickValue',
})
export class PickValuePipe implements PipeTransform {
	transform(singleData: Record<string, any>, fieldName: string): unknown {
		if (!singleData) return '';
		return singleData[fieldName];
	}
}
