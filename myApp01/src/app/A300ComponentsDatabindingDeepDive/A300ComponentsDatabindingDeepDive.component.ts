import { Component, OnInit } from "@angular/core";

@Component({
  selector: "A300ComponentsDatabindingDeepDive",
  templateUrl: "./A300ComponentsDatabindingDeepDive.component.html",
  styleUrls: ["./A300ComponentsDatabindingDeepDive.component.css"],
})
export class A300ComponentsDatabindingDeepDiveComponent implements OnInit {
  serverElements = [];
  newServerName = "";
  newServerContent = "";

  onAddServer() {
    this.serverElements.push({
      type: "server",
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: "blueprint",
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  constructor() {}

  ngOnInit() {}
}
