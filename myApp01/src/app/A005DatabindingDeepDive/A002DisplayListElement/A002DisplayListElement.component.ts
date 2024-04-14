import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-A002DisplayListElement",
  templateUrl: "./A002DisplayListElement.component.html",
  styleUrls: ["./A002DisplayListElement.component.css"],
})
export class A002DisplayListElementComponent implements OnInit {
  @Input() element;

  constructor() {}

  ngOnInit() {}
}
