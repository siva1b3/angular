import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B005stringInterpolation",
  templateUrl: "./B005stringInterpolation.component.html",
  styleUrls: ["./B005stringInterpolation.component.css"],
})
export class B005stringInterpolationComponent implements OnInit {
  serverComponet: serverCompoment = {
    name: "Siva",
    age: 27,
    recentPurchase: "LapTop",
  };

  constructor() {}

  ngOnInit() {}
}

type serverCompoment = {
  name: string;
  age: number;
  recentPurchase: string;
};
