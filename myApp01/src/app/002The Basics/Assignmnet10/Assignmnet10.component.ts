import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-Assignmnet10",
  templateUrl: "./Assignmnet10.component.html",
  styleUrls: ["./Assignmnet10.component.css"],
})
export class Assignmnet10Component implements OnInit {
  componentData: ComponentData;

  toggleParagraphVisibility() {
    this.componentData.isParagraphVisible =
      !this.componentData.isParagraphVisible;
  }

  isParagraphVisible() {
    return this.componentData.isParagraphVisible;
  }

  addNameToList() {
    if (this.componentData.newName) {
      this.componentData.ListData.list.push(this.componentData.newName);
      this.componentData.newName = undefined;
    }
    console.log(this.componentData);
  }

  constructor() {
    this.componentData = {
      isParagraphVisible: false,
      ListData: {
        list: [],
        hasDuplicates: false,
        duplicateItems: [],
      },
      newName: "",
    };
    console.log(this.componentData);
  }

  ngOnInit() {}
}

interface ComponentData {
  isParagraphVisible: boolean;
  newName: string;
  ListData: {
    list: string[];
    hasDuplicates: boolean;
    duplicateItems: string[];
  };
}
