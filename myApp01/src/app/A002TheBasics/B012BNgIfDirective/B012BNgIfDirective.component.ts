import { Component } from "@angular/core";

@Component({
  selector: "B012BNgIfDirective",
  templateUrl: "./B012BNgIfDirective.component.html",
  styleUrls: ["./B012BNgIfDirective.component.css"],
})
export class B012BNgIfDirectiveComponent {
  server: serverStateObject = {
    serverName: undefined,
    isNewServer: true,
    inEditingState: false,
    isServerNameSubmmittedAtLeastOnce: false,
    oldServerName: undefined,
  };

  serverName = this.server.serverName;

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
