import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "customPipe" })
export class CustomPipe implements PipeTransform {
  transform(value: number, parameter?: any): any {
    return "";
  }
}
