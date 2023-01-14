import { Pipe, PipeTransform } from '@angular/core';
import { ShiftManagement } from 'app/model/ShiftManagement';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(shifts: ShiftManagement[], searchValue:string): ShiftManagement[] {
    
    if (!shifts || !searchValue) {
      return shifts;
    }
    return shifts.filter(shift => shift.driver.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                           shift.containerYard.code.toLowerCase().includes(searchValue.toLowerCase()) ||
                           shift.containers[0].code.toLowerCase().includes(searchValue.toLowerCase()) ||
                           shift.driver.identification.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

}
