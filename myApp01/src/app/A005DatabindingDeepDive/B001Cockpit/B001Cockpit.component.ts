import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B001Cockpit",
  templateUrl: "./B001Cockpit.component.html",
  styleUrls: ["./B001Cockpit.component.css"],
})
export class B001CockpitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";
  constructor() {}

  ngOnInit() {}

  onAddServer() {
    // this.serverElements.push({
    //   type: "server",
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: "blueprint",
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }
}
