import { Component } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <span>My name is... {{ name }}!</span>
  `
})
export class HelloComponent {
  // Exercise 2.3 add the @Input() decorator to the variable to expose it
  // Tip: you might need to import Input before you are able to use it.
  //      as input, like Component, resides in @angular/core, you can just add it
  // and enable property binding
  name: string;
}
