import { Component, OnInit } from "@angular/core";

@Component({
  selector: "A102Calculator",
  templateUrl: "./A102Calculator.component.html",
  styleUrls: ["./A102Calculator.component.css"],
})
export class A102CalculatorComponent implements OnInit {
  lastValue?: number;
  presentValue?: string;
  calculationNeeded?: string;

  constructor() {}

  ngOnInit() {}

  calculator(event) {
    const { type, value, symbol } = event || {};

    switch (type) {
      case "reset":
        this.resetCalculator();
        break;
      case "number":
        this.handleNumberClick(value);
        break;
      case "changeSymbol":
        this.changeSymbol();
        break;
      case "removeLast":
        this.removeLastDigit();
        break;
      case "artematicOperation":
        this.performArithmeticOperation(symbol);
        break;
      default:
        console.error("Invalid input type");
        break;
    }
  }

  private resetCalculator() {
    this.lastValue = undefined;
    this.presentValue = undefined;
  }

  private handleNumberClick(value: string) {
    if (this.isDecimalClicked(value)) return;
    this.presentValue = (this.presentValue || "") + value;
  }

  private isDecimalClicked(value: string): boolean {
    return value === "." && (this.presentValue || "").includes(".");
  }

  private changeSymbol() {
    if (this.presentValue === undefined) return;
    this.presentValue = this.presentValue.startsWith("-")
      ? this.presentValue.substring(1)
      : "-" + this.presentValue;
  }

  private removeLastDigit() {
    if (this.presentValue === undefined) return;
    this.presentValue = this.presentValue.slice(0, -1);
  }

  private performArithmeticOperation(symbol: string) {
    if (this.presentValue === undefined) {
      console.error("No value entered");
      return;
    }
    const currentValue = parseFloat(this.presentValue);
    if (isNaN(currentValue)) {
      console.error("Invalid input");
      return;
    }

    switch (symbol) {
      case "add":
      case "sub":
      case "multi":
      case "divide":
      case "mod":
        this.calculateResult(currentValue, symbol);
        break;
      case "equalto":
        this.calculateResult(currentValue, this.calculationNeeded);
        break;
      default:
        console.error("Invalid arithmetic operation");
        break;
    }
  }

  private calculateResult(currentValue: number, symbol: string) {
    if (this.lastValue === undefined) {
      this.lastValue = currentValue;
      this.presentValue = undefined;
      this.calculationNeeded = symbol;
      return;
    }

    switch (symbol) {
      case "add":
        this.performAddition(currentValue);
        break;
      case "sub":
        this.performSubtraction(currentValue);
        break;
      case "multi":
        this.performMultiplication(currentValue);
        break;
      case "divide":
        this.performDivision(currentValue);
        break;
      case "mod":
        this.performModulus(currentValue);
        break;
      default:
        console.error("Invalid arithmetic operation");
        break;
    }
  }

  private performAddition(currentValue: number) {
    this.presentValue = `${this.lastValue + currentValue}`;
    this.clearCalculation();
  }

  private performSubtraction(currentValue: number) {
    this.presentValue = `${this.lastValue - currentValue}`;
    this.clearCalculation();
  }

  private performMultiplication(currentValue: number) {
    this.presentValue = `${this.lastValue * currentValue}`;
    this.clearCalculation();
  }

  private performDivision(currentValue: number) {
    this.presentValue = `${this.lastValue / currentValue}`;
    this.clearCalculation();
  }

  private performModulus(currentValue: number) {
    this.presentValue = `${this.lastValue % currentValue}`;
    this.clearCalculation();
  }

  private clearCalculation() {
    this.lastValue = undefined;
    this.calculationNeeded = undefined;
  }
}
