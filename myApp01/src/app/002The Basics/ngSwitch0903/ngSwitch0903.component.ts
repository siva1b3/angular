import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngSwitch0903",
  templateUrl: "./ngSwitch0903.component.html",
  styleUrls: ["./ngSwitch0903.component.css"],
})
export class NgSwitch0903Component implements OnInit {
  color: string | undefined = undefined;
  selectColor(event: Event) {
    const elemennt = event.target as HTMLSelectElement;
    this.color = elemennt.value;
  }

  selectedColor() {
    return this.color;
  }

  constructor() {}

  ngOnInit() {}
}
