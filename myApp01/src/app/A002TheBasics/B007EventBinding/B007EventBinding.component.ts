import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B007EventBinding",
  templateUrl: "./B007EventBinding.component.html",
  styleUrls: ["./B007EventBinding.component.css"],
})
export class B007EventBindingComponent implements OnInit {
  message: string = "";
  clicked: boolean = false;
  hovered: boolean = false;
  mouseOver: boolean = false;
  mouseOut: boolean = false;

  handleClick(): void {
    this.message = "Button clicked!";
    this.clicked = true;
    this.hovered = this.mouseOver = this.mouseOut = false;
  }

  handleMouseEnter(): void {
    this.message = "Mouse entered the button!";
    this.hovered = true;
    this.clicked = this.mouseOver = this.mouseOut = false;
  }

  handleMouseLeave(): void {
    this.message = "Mouse left the button!";
    this.hovered = false;
    this.clicked = this.mouseOver = this.mouseOut = false;
  }

  handleMouseOver(): void {
    this.message = "Mouse is over the button!";
    this.mouseOver = true;
    this.clicked = this.hovered = this.mouseOut = false;
  }

  handleMouseOut(): void {
    this.message = "Mouse moved out from the button!";
    this.mouseOut = true;
    this.clicked = this.hovered = this.mouseOver = false;
  }
  constructor() {}

  ngOnInit() {}
}
