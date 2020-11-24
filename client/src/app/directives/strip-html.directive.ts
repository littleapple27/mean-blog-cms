import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stripTags'
})

export class StripHtmlTagsPipe implements PipeTransform {
    transform(value: any): any {
        if ((value === null) || (value === '')) {
            return '';
        } else {
            return value.replace(/<(?:.|\n)*?>/gm, ' ');
        }
    }
}