import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "B002ServerElement",
  templateUrl: "./B002ServerElement.component.html",
  styleUrls: ["./B002ServerElement.component.css"],
})
export class B002ServerElementComponent implements OnInit {
  @Input() element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit() {}
}
