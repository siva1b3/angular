import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B017NgFor",
  templateUrl: "./B017NgFor.component.html",
  styleUrls: ["./B017NgFor.component.css"],
})
export class B017NgForComponent implements OnInit {
  Basicitems01 = ["item1", "item2", "item3"];

  fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" },
    { name: "Grapes", color: "Purple" },
  ];

  products: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
  ];
  addToCart(product: Product) {
    // Simulate adding to cart logic
    console.log(
      `${product.name.toLocaleUpperCase()} with the price of ${
        product.price
      } was added to cart!`
    );
  }

  trackByProductId(index: number, product: Product) {
    return product.id; // Track by unique product ID
  }

  updateProductPrice(product: Product) {
    // Simulate price update
    product.price = product.price + 10;
    // Modify price directly (avoid full array reassignment)
  }

  inventoryItems: InventoryItem[] = [
    {
      id: 1,
      itemName: "Laptop",
      price: 1000,
      displayPrice: 1000,
      inStock: true,
    },
    { id: 2, itemName: "Phone", price: 500, displayPrice: 500, inStock: true },
    {
      id: 3,
      itemName: "Headphones",
      price: 100,
      displayPrice: 100,
      inStock: true,
    },
  ];

  trackByItem(index: number, item: InventoryItem) {
    return { id: item.id, inStock: item.inStock }; // Track by ID and stock status
  }

  toggleStock(item: InventoryItem) {
    item.inStock = !item.inStock;
    // Simulate potential price update based on availability (optional)
    if (!item.inStock) {
      item.displayPrice = item.price * 0.9; // Apply discount on unavailability
    } else {
      item.displayPrice = item.price;
    }
  }

  mainTest(product) {
    console.log(product);
  }

  userName: string | undefined = undefined;

  userNameList: string[] = [];

  submitUserName() {
    this.userNameList.push(this.userName);
    console.log(this.userNameList);
    this.userName = undefined;
  }

  constructor() {}

  ngOnInit() {}
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface InventoryItem {
  id: number;
  itemName: string;
  price: number;
  displayPrice: any;
  inStock: boolean;
}
