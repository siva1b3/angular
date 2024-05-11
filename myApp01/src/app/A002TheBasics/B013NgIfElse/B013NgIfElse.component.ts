import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B013NgIfElse",
  templateUrl: "./B013NgIfElse.component.html",
  styleUrls: ["./B013NgIfElse.component.css"],
})
export class B013NgIfElseComponent implements OnInit {
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

  checkAge(): boolean {
    return this.serverComponet.age >= 18 && this.serverComponet.age <= 25;
  }

  constructor() {}

  ngOnInit() {}
}
type serverComponet = {
  isloggedIn: boolean;
  age?: number;
};
