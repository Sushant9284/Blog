import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, input: any): any {
    if(input){
      return value.filterpipe(val=>val.indexOf(input)>=0);      
    }else{
      return value;
    }
  } 

}
