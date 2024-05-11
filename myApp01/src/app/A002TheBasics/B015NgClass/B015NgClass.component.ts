import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B015NgClass",
  templateUrl: "./B015NgClass.component.html",
  styleUrls: ["./B015NgClass.component.css"],
})
export class B015NgClassComponent implements OnInit {
  serverObject: ServerObject = {
    isActive: true,
    isLarge: true,
  };

  // basic syntax

  toggleActive(): void {
    this.serverObject.isActive = !this.serverObject.isActive;
    console.log(this.serverObject);
  }

  toggleLarge(): void {
    this.serverObject.isLarge = !this.serverObject.isLarge;
    console.log(this.serverObject);
  }

  // dynamically apply a CSS class using string interpolation

  dynamicClass: string = "initial";

  toggleDynamicClass(): void {
    this.dynamicClass =
      this.dynamicClass === "initial" ? "modified" : "initial";
    console.log(this.serverObject);
  }

  // array syntax

  isActive: boolean = false;
  isHighlighted: boolean = false;

  getClassList() {
    return [
      "base-class",
      this.isActive ? "active" : "",
      this.isHighlighted ? "highlight" : "",
    ];
  }

  toggleClasses() {
    this.isActive = !this.isActive;
    this.isHighlighted = !this.isHighlighted;
  }

  constructor() {}

  ngOnInit() {}
}

interface ServerObject {
  isActive: boolean;
  isLarge: boolean;
}
