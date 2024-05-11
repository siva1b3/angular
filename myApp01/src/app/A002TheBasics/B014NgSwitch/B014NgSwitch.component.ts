import { Component, OnInit } from "@angular/core";
import { retry } from "rxjs";

@Component({
  selector: "B014NgSwitch",
  templateUrl: "./B014NgSwitch.component.html",
  styleUrls: ["./B014NgSwitch.component.css"],
})
export class B014NgSwitchComponent implements OnInit {
  color: string = "";
  onColorSelection(event: Event) {
    const elemennt = event.target as HTMLSelectElement;
    this.color = elemennt.value;
  }

  hasSelectedOption() {
    return this.color !== "";
  }

  getSelectedColor() {
    return this.color;
  }

  resetOptions() {
    this.color = "";
  }

  constructor() {}

  ngOnInit() {}
}
