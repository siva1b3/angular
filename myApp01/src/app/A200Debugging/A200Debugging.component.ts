import { Component, OnInit } from "@angular/core";

@Component({
  selector: "A200Debugging",
  templateUrl: "./A200Debugging.component.html",
  styleUrls: ["./A200Debugging.component.css"],
})
export class A200DebuggingComponent implements OnInit {
  servers = [];

  onAddServer() {
    this.servers.push("Another Server");
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }

  constructor() {}

  ngOnInit() {}
}
