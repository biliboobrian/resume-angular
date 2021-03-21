import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertHtmlTag'
})
export class ConvertHtmlTagPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
  }

}
