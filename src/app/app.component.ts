import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  today = Date.now();

  // Exercise 1.1
  currentUser: String = "Mr. Pink";

  // Exercise 1.2
  countInBasket: Number = 4;
  getStock() {
    return 13;
  }

  // Exercise 1.3
  now: Date;

  // Exercise 2.1
  image = {
    title: "Shiba Inu",
    url: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  };

  // Exercise 2.2
  offers = [
    { name: "Cool Sneakers", specialOffer: false },
    { name: "Hair Dryer", specialOffer: true },
    { name: "Christmas Socks", specialOffer: true },
    { name: "Dog Treats", specialOffer: false },
    { name: "Nokia 3310", specialOffer: true }
  ];

  // Exercise 2.3
  myName = "slim shady";

  // Exercise 3.1
  onClick() {
    alert("Ouch. You clicked me.");
  }

  // Exercise 4.1
  showDetails = false;

  // Exercise 4.2
  // reuse the array from Value 2.2

  // Exercise 5.1
  // reuse the value from 1.3

  // Exercise 5.2
  // array of file sizes
  fileSizes = [10, 4e5, 1.2e7, 8e9, 7e11, 5.5e13, 7.4e15, 2.9e17];

  // Constructor
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
}
