import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B016NgStyle",
  templateUrl: "./B016NgStyle.component.html",
  styleUrls: ["./B016NgStyle.component.css"],
})
export class B016NgStyleComponent implements OnInit {
  // Basic Syntax

  isError = true;

  toggleError() {
    this.isError = !this.isError;
  }

  stylesObject() {
    return {
      color: this.isError ? "red" : "black",
      "font-weight": this.isError ? "bold" : "normal",
    };
  }

  // object syntax

  styleDataObject = {
    "font-size": "20px",
    color: "blue",
    "background-color": "lightgray",
  };

  styleObject() {
    return this.styleDataObject;
  }

  // Array syntax
  styleIndex = 0;

  stylesArray = [
    { "font-size": "16px", color: "black" },
    { "font-size": "20px", color: "blue" },
    { "font-size": "24px", color: "green" },
  ];

  cycleStyleIndex(currentIndex, arrayLength) {
    return (currentIndex + 1) % arrayLength;
  }

  handleButtonClick() {
    this.styleIndex = this.cycleStyleIndex(
      this.styleIndex,
      this.stylesArray.length
    );
  }

  getStylesBasedOnStyleIndex() {
    return this.stylesArray[this.styleIndex];
  }

  // conditinal styles

  showError = true;

  stylePostiveErrorState = {
    border: "2px solid red",
    "background-color": "lightpink",
  };

  styleNegativeErrorState = {
    border: "2px solid green",
    "background-color": "lightgreen",
  };

  changeConditionClick() {
    this.showError = !this.showError;
    return this.showError;
  }

  getstylePostiveErrorState() {
    return this.stylePostiveErrorState;
  }

  getstyleNegativeErrorState() {
    return this.styleNegativeErrorState;
  }

  errorStatePostive() {
    return this.showError;
  }

  errorStateNegative() {
    return !this.showError;
  }

  //  Dynamic Styling

  isActive = false;

  getDynamicBackgroundColor() {
    return this.isActive ? "lightgreen" : "lightgray";
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  constructor() {}

  ngOnInit() {}
}
