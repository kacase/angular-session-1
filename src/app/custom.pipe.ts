import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "customPipe" })
export class CustomPipe implements PipeTransform {
  transform(value: number, parameter?: any): any {
    // 5.2 Implement logic here to return the correct string
    // use value as the number of bytes
    // use parameter as the number of decimals to display
    return "";
  }
}
