import { Pipe, PipeTransform } from '@angular/core';
import { Obj } from './obj';

@Pipe({
  name: 'impureFilter',
  pure: false
})
export class ImpureFilterPipe implements PipeTransform {

  transform(value: Array<Obj>): Array<Obj> {
    return value.filter((obj: Obj) => obj.show);
  }

}
