import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[B011CustomDirective]",
})
export class B011CustomDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, "background-color", "green");
  }
}
