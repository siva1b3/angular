import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngFor0905",
  templateUrl: "./ngFor0905.component.html",
  styleUrls: ["./ngFor0905.component.css"],
})
export class NgFor0905Component implements OnInit {
  Basicitems01 = ["item1", "item2", "item3"];
  fruits = {
    apple: { color: "red", taste: "sweet" },
    banana: { color: "yellow", taste: "sweet" },
    orange: { color: "orange", taste: "sour" },
  };

  getFruitKeys() {
    return Object.keys(this.fruits);
  }

  items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  trackByFn(index: number, item: any) {
    return item.id;
  }

  twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  userName: string | undefined = undefined;

  userNameList: string[] = [];

  submitUserName() {
    this.userNameList.push(this.userName);
    console.log(this.userNameList);
    this.userName = undefined;
  }

  constructor() {}

  ngOnInit() {}
}
