import { Component } from "@angular/core";

@Component({
  selector: "app-NgifDirective0901",
  templateUrl: "./NgifDirective0901.component.html",
  styleUrls: ["./NgifDirective0901.component.css"],
})
export class NgifDirective0901Component {
  server: serverStateObject = {
    serverName: undefined,
    isNewServer: true,
    inEditingState: false,
    isServerNameSubmmittedAtLeastOnce: false,
    oldServerName: undefined,
  };

  onInputEdited(): void {
    const { isServerNameSubmmittedAtLeastOnce } = this.server;
    const editingState = isServerNameSubmmittedAtLeastOnce ? true : false;
    this.server = {
      ...this.server,
      isNewServer: true,
      inEditingState: editingState,
    };
  }

  onClickSubmitButton(): void {
    const { serverName: serverNameAtThisInstant } = this.server;
    this.server = {
      ...this.server,
      isNewServer: false,
      inEditingState: false,
      isServerNameSubmmittedAtLeastOnce: true,
      oldServerName: serverNameAtThisInstant,
    };
  }

  onClickResetButton(): void {
    this.server = {
      ...this.server,
      serverName: undefined,
      isNewServer: true,
      inEditingState: false,
      isServerNameSubmmittedAtLeastOnce: false,
      oldServerName: undefined,
    };
  }

  shouldDisplaySubmitButton(): boolean {
    return this.server.isNewServer;
  }

  shouldDisplayResetButton(): boolean {
    return !this.server.isNewServer;
  }

  shouldDisplayServerName(): boolean {
    return !this.server.isNewServer && !this.server.inEditingState;
  }

  shouldDisplayNoServerName(): boolean {
    return this.server.isNewServer && !this.server.inEditingState;
  }

  shouldDisplayToEditServerName(): boolean {
    return this.server.inEditingState;
  }

  constructor() {}
}

type serverStateObject = {
  serverName?: string;
  isNewServer?: boolean;
  inEditingState?: boolean;
  isServerNameSubmmittedAtLeastOnce?: boolean;
  oldServerName?: string;
};
