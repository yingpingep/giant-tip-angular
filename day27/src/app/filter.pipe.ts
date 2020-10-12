import { Obj } from './obj';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Obj>): Array<Obj> {
    return value.filter((obj: Obj) => obj.show);
  }

}
