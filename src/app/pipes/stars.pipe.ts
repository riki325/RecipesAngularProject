import { NgFor } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if (value == true)
      return "../../assets/icons/star (2).png";
    else
      return "../../assets/icons/star (1).png";
  }

}
