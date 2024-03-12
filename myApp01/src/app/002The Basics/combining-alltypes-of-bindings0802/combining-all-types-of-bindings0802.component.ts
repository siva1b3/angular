import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-combining-alltypes-of-bindings0802',
  templateUrl: './combining-all-types-of-bindings0802.component.html',
  styleUrls: ['./combining-all-types-of-bindings0802.component.css']
})
export class CombiningAllTypesOfBindings0802Component implements OnInit {
  isDisabled: boolean = false

  username: string | undefined = undefined
  age: number | null | undefined = 10

  constructor() {
  }

  onInput(event: Event): void {
    console.log(event)
    // Guard clause to check if the event target exists
    if (!event || !event.target) {
      console.error('Event or event target is undefined.');
      return;
    }

    const inputElement = event.target as HTMLInputElement;

    // Guard clause to check if the event target is an input element
    if (!(inputElement instanceof HTMLInputElement)) {
      console.error('Event target is not an input element.');
      return;
    }

    // Guard clause to check if the input value is empty
    const inputValue = inputElement.value.trim();
    if (!inputValue) {
      this.username = "";
      return;
    }

    // If all guard clauses pass, assign the input value to userName
    this.username = inputValue;
  }

  ngOnInit(): void {
  }

}
