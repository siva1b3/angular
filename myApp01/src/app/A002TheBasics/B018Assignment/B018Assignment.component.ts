import { Component, OnInit } from "@angular/core";

@Component({
  selector: "B018Assignment",
  templateUrl: "./B018Assignment.component.html",
  styleUrls: ["./B018Assignment.component.css"],
})
export class B018AssignmentComponent implements OnInit {
  componentData: componentdataType = {
    isParagraphVisible: true,
    timeValuesList: [],
  };

  changeState: changeState = {
    timevalue: "",
    toggleState: undefined,
  };

  toggleParagraphVisibility() {
    this.changeState.timevalue = new Date().toLocaleString();
    this.changeState.toggleState = this.componentData.isParagraphVisible;
    this.componentData.timeValuesList.push({ ...this.changeState });
    console.log(this.componentData.timeValuesList);
    this.componentData.isParagraphVisible =
      !this.componentData.isParagraphVisible;
    return this.componentData.isParagraphVisible;
  }

  listOfTimeValues() {
    return this.componentData.timeValuesList;
  }

  emptyList() {
    return this.componentData.timeValuesList.length === 0;
  }

  constructor() {}

  ngOnInit() {}
}

interface componentdataType {
  isParagraphVisible: boolean;
  timeValuesList: changeState[];
}

interface changeState {
  timevalue: string;
  toggleState?: boolean;
}
