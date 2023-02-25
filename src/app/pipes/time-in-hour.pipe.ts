import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeInHour'
})
export class TimeInHourPipe implements PipeTransform {

  transform(value: number): string {
let res=""
if(value/60>1){
res="שעות:"+Math.floor(value/60) +" "
value %= 60;
}
if (value != 0)
  res += "דקות:" + value;
   return res;
  }

}
