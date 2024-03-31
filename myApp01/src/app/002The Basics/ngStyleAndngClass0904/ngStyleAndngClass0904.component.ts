import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngStyleAndngClass0904",
  templateUrl: "./ngStyleAndngClass0904.component.html",
  styleUrls: ["./ngStyleAndngClass0904.component.css"],
})
export class NgStyleAndngClass0904Component implements OnInit {
  isActive: boolean = false;
  isDisabled: boolean = false;
  isError: boolean = false;
  products: any[] = [
    {
      name: "Product 1",
      category: "Electronics",
      stock: 10,
      price: 50,
      rating: 4,
    },
    {
      name: "Product 2",
      category: "Clothing",
      stock: 5,
      price: 100,
      rating: 3,
    },
    { name: "Product 3", category: "Books", stock: 0, price: 150, rating: 5 },
  ];

  // Function to determine if a product is in stock
  isInStock(stock: number): boolean {
    return stock > 0;
  }

  isHighlighted: boolean = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  isHovered: boolean = false;

  onHover() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  getClass(): string {
    return "sefwedwf";
  }

  stylesObject = {
    color: "black",
    fontSize: "16px",
  };

  // Method to update stylesObject based on user interaction
  updateUserStyles() {
    this.stylesObject.color = "blue";
    this.stylesObject.fontSize = "20px";
  }

  // Method to update stylesObject based on component data changes
  updateStylesBasedOnData(data: any) {
    if (data.someCondition) {
      this.stylesObject.color = "red";
    } else {
      this.stylesObject.color = "green";
    }
  }

  toggleActiveState() {
    this.isActive = !this.isActive;
  }

  toggleErrorState() {
    this.isError = !this.isError;
  }

  getRatingColor(rating: number): string {
    if (rating >= 4) {
      return "green"; // High ratings get a green background
    } else if (rating >= 2) {
      return "yellow"; // Moderate ratings get a yellow background
    } else {
      return "red"; // Low ratings get a red background
    }
  }

  getRatingTextColor(rating: number): string {
    return rating >= 3 ? "black" : "white"; // Adjust text color based on rating
  }

  // Method returning an object literal
  getClassObject(): any {
    return {
      active: this.isActive01(),
      error: this.isError01(),
    };
  }

  // Method returning a string of space-separated classes
  getClassString(): string {
    let classes = "";
    if (this.isActive01()) {
      classes += "active ";
    }
    if (this.isError01()) {
      classes += "error ";
    }
    return classes.trim();
  }

  classesToApply: string[] = ["class1", "class2", "class3"];

  // Method to toggle a class in the array
  toggleClass(className: string): void {
    const index = this.classesToApply.indexOf(className);
    if (index !== -1) {
      this.classesToApply.splice(index, 1); // Remove class if already present
    } else {
      this.classesToApply.push(className); // Add class if not present
    }
  }

  // Example methods to determine class conditions
  isActive01(): boolean {
    // Your logic to determine if the 'active' class should be applied
    return true; // Example: Always return true for demonstration
  }

  isError01(): boolean {
    // Your logic to determine if the 'error' class should be applied
    return false; // Example: Always return false for demonstration
  }

  constructor() {}

  ngOnInit() {}
}
