import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B010CombiningAllTypesOfBindings",
  templateUrl: "./B010CombiningAllTypesOfBindings.component.html",
  styleUrls: ["./B010CombiningAllTypesOfBindings.component.css"],
})
export class B010CombiningAllTypesOfBindingsComponent implements OnInit {
  // Properties for different types of bindings
  textValue: string = "text";
  checkboxValue: boolean = false;
  inputValue: string = "";
  outputValue: string = "";

  // Function to handle button click event
  handleClick() {
    this.outputValue = this.inputValue.toUpperCase();
  }
  constructor() {}

  ngOnInit() {}
}
