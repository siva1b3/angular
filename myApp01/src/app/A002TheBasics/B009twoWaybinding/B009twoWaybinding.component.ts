import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B009twoWaybinding",
  templateUrl: "./B009twoWaybinding.component.html",
  styleUrls: ["./B009twoWaybinding.component.css"],
})
export class B009twoWaybindingComponent implements OnInit {
  textValue: string = "";
  checkboxValue: boolean = false;
  radioValue: string = "";
  selectValue: string = "";
  textareaValue: string = "";
  dateValue: string = "";

  // Function to reset the selection
  resetSelection() {
    this.selectValue = "";
  }

  // Function to check if an option is selected
  isOptionSelected(): boolean {
    return this.selectValue !== "";
  }

  constructor() {}

  ngOnInit() {}
}
