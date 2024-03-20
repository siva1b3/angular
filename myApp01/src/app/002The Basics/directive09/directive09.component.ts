import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[app-directive09]",
})
export class Directive09Component {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "green";
    // Changes the color of the text to green when the directive is applied
  }
}
