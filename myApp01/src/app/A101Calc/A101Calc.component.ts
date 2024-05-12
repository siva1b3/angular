import { Component, OnInit } from "@angular/core";

@Component({
  selector: "A101Calc",
  templateUrl: "./A101Calc.component.html",
  styleUrls: ["./A101Calc.component.scss"],
})
export class A101CalcComponent implements OnInit {
  lastValue?: number;
  presentValue?: string;
  calculationNeeded?: string;
  value01?: number;
  value02?: number;

  state = "new";

  calculator(event) {
    const {
      type = undefined,
      value = undefined,
      symbol = undefined,
    } = { ...event };

    switch (type) {
      case "reset":
        console.log("reset button clicked");
        this.lastValue = undefined;
        this.presentValue = undefined;
        break;
      case "number":
        console.log(`Clicked the button with number ${value}`);
        if (
          (this.presentValue ? this.presentValue.includes(".") : "") &&
          value === "."
        ) {
          console.log("break");
          break;
        }
        this.presentValue =
          (this.presentValue ? this.presentValue : "") + ("" + value);
        break;
      case "changeSymbol":
        if (this.presentValue === undefined) {
          console.log("no value error");
          break;
        }
        if (
          this.presentValue.length === 0 ||
          parseInt(this.presentValue) === 0
        ) {
          console.log("zero array");
          break;
        }
        const k = this.presentValue[0];
        console.log("symbol chnaged");
        this.presentValue =
          k === "-" ? this.presentValue.substring(1) : "-" + this.presentValue;
        break;
      case "removeLast":
        if (this.presentValue === undefined) {
          console.log("no value error");
          break;
        }
        if (
          this.presentValue.length === 0 ||
          parseInt(this.presentValue) === 0
        ) {
          this.presentValue = undefined;
          console.log("zero array");
          break;
        }
        console.log("value removed");
        this.presentValue = this.presentValue.slice(0, -1);
        break;
      case "artematicOperation":
        switch (symbol) {
          case "add":
            this.lastValue = parseFloat(this.presentValue);
            this.presentValue = undefined;
            this.calculationNeeded = "add";
            break;
          case "sub":
            this.lastValue = parseFloat(this.presentValue);
            this.presentValue = undefined;
            this.calculationNeeded = "sub";
            break;
          case "multi":
            this.lastValue = parseFloat(this.presentValue);
            this.presentValue = undefined;
            this.calculationNeeded = "multi";
            break;
          case "divide":
            this.lastValue = parseFloat(this.presentValue);
            this.presentValue = undefined;
            this.calculationNeeded = "divide";
            break;
          case "mod":
            this.lastValue = parseFloat(this.presentValue);
            this.presentValue = undefined;
            this.calculationNeeded = "mod";
            break;
          case "equalto":
            if (
              this.lastValue === undefined &&
              this.calculationNeeded === undefined
            ) {
              console.log("Enter the value first");
              break;
            }
            switch (this.calculationNeeded) {
              case "add":
                const add = parseFloat(this.presentValue) + this.lastValue;
                this.presentValue = "" + add;
                this.lastValue = undefined;
                this.calculationNeeded = undefined;
                break;
              case "sub":
                const sub = this.lastValue - parseFloat(this.presentValue);
                this.presentValue = "" + sub;
                this.lastValue = undefined;
                this.calculationNeeded = undefined;
                break;
              case "multi":
                const multi = this.lastValue * parseFloat(this.presentValue);
                this.presentValue = "" + multi;
                this.lastValue = undefined;
                this.calculationNeeded = undefined;
                break;
              case "divide":
                const divide = this.lastValue / parseFloat(this.presentValue);
                this.presentValue = "" + divide;
                this.lastValue = undefined;
                this.calculationNeeded = undefined;
                break;
              case "mod":
                const mod = this.lastValue % parseFloat(this.presentValue);
                this.presentValue = "" + mod;
                this.lastValue = undefined;
                this.calculationNeeded = undefined;
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        break;
      default:
        console.log("needs proper input");
        break;
    }

    console.log(type, value, symbol);
    console.log(parseFloat(this.presentValue));
    console.log(this);
  }

  constructor() {}

  ngOnInit() {}
}
