import { Component, OnInit } from "@angular/core";

@Component({
  selector: "A005DatabindingDeepDive",
  templateUrl: "./A005DatabindingDeepDive.component.html",
  styleUrls: ["./A005DatabindingDeepDive.component.css"],
})
export class A005DatabindingDeepDiveComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  serverElements = [
    { type: "server", name: "TestServer", content: "just a test" },
  ];
}
