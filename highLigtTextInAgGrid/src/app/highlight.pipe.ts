import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    let updatedObject: any = {};
    let matchedKeys = Object.keys(value.messageDetails).filter((key) => key.includes(args));
    if (matchedKeys.length === 0) {
      return value;
    }
    matchedKeys.forEach((mKey) => {
      if (typeof (value.messageDetails[mKey]) === 'object') {
        updatedObject[mKey] = value.messageDetails[mKey].value;
      } else {
        if (typeof (value.messageDetails[mKey]) === 'string') {
          updatedObject[mKey] = value.messageDetails[mKey];
        }
      }
    });
    return updatedObject;
  }

}
