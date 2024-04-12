import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-A005DatabindingDeepDive",
  templateUrl: "./A005DatabindingDeepDive.component.html",
  styleUrls: ["./A005DatabindingDeepDive.component.css"],
})
export class A005DatabindingDeepDiveComponent implements OnInit {
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
