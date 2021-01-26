import { Component } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <span>My name is... {{ name }}!</span>
  `
})
export class HelloComponent {
  // Exercise 2.3 add the @Input() decorator to the variable to expose it
  // and enable property binding
  name: string;
}
