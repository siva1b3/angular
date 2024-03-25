import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngIfThenElse0902",
  templateUrl: "./ngIfThenElse0902.component.html",
  styleUrls: ["./ngIfThenElse0902.component.css"],
})
export class NgIfThenElse0902Component implements OnInit {
  serverComponet: serverComponet = {
    isloggedIn: false,
    age: 10,
  };

  isLoggedIn() {
    return this.serverComponet.isloggedIn;
  }

  logout() {
    this.serverComponet.isloggedIn = false;
  }

  login() {
    this.serverComponet.isloggedIn = true;
  }

  incrementAge() {
    this.serverComponet.age++;
  }

  decrementAge() {
    this.serverComponet.age--;
  }

  constructor() {}

  ngOnInit() {}
}
type serverComponet = {
  isloggedIn: boolean;
  age?: number;
};
