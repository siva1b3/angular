import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B008PassingDataHtmlToTs",
  templateUrl: "./B008PassingDataHtmlToTs.component.html",
  styleUrls: ["./B008PassingDataHtmlToTs.component.css"],
})
export class B008PassingDataHtmlToTsComponent implements OnInit {
  userName: string | undefined = undefined;

  constructor() {}

  onInput(event: Event): void {
    console.log(event);
    // Guard clause to check if the event target exists
    if (!event || !event.target) {
      console.error("Event or event target is undefined.");
      return;
    }

    const inputElement = event.target as HTMLInputElement;

    // Guard clause to check if the event target is an input element
    if (!(inputElement instanceof HTMLInputElement)) {
      console.error("Event target is not an input element.");
      return;
    }

    // Guard clause to check if the input value is empty
    const inputValue = inputElement.value.trim();
    if (!inputValue) {
      this.userName = "";
      return;
    }

    // If all guard clauses pass, assign the input value to userName
    this.userName = inputValue;
  }

  ngOnInit() {}
}
