import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-A004debugging",
  templateUrl: "./A004debugging.component.html",
  styleUrls: ["./A004debugging.component.css"],
})
export class A004debuggingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  servers = [];

  onAddServer() {
    this.servers.push("Another Server");
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}
