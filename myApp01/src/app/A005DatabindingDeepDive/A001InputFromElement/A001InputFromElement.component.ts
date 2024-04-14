import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-A001InputFromElement",
  templateUrl: "./A001InputFromElement.component.html",
  styleUrls: ["./A001InputFromElement.component.css"],
})
export class A001InputFromElementComponent implements OnInit {
  @Input() serverElements;
  @Input() newServerName;
  @Input() newServerContent;

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
