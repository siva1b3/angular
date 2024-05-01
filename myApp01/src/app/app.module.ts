// back to empty code
// 001 - initial code

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// First Component
// B001BasicComponentComponent

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { A002TheBasicsComponent } from "./A002TheBasics/A002TheBasics.component";
// import { B001BasicComponentComponent } from "./A002TheBasics/B001BasicComponent/B001BasicComponent.component";

// @NgModule({
//   declarations: [
//     AppComponent,
//     A002TheBasicsComponent,
//     B001BasicComponentComponent,
//   ],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// B002AttributeSelectorComponent

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { A002TheBasicsComponent } from "./A002TheBasics/A002TheBasics.component";
// import { B002AttributeSelectorComponent } from "./A002TheBasics/B002AttributeSelector/B002AttributeSelector.component";

// @NgModule({
//   declarations: [
//     AppComponent,
//     A002TheBasicsComponent,
//     B002AttributeSelectorComponent,
//   ],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// B003ClassSelectorComponent

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { A002TheBasicsComponent } from "./A002TheBasics/A002TheBasics.component";
// import { B003ClassSelectorComponent } from "./A002TheBasics/B003ClassSelector/B003ClassSelector.component";

// @NgModule({
//   declarations: [
//     AppComponent,
//     A002TheBasicsComponent,
//     B003ClassSelectorComponent,
//   ],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// B004OptionalAssignmentComponent

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { A002TheBasicsComponent } from "./A002TheBasics/A002TheBasics.component";
import { B004OptionalAssignmentComponent } from "./A002TheBasics/B004OptionalAssignment/B004OptionalAssignment.component";

@NgModule({
  declarations: [
    AppComponent,
    A002TheBasicsComponent,
    B004OptionalAssignmentComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// server0301
// 004 0301

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { server0301Component } from './server0301/server0301.component';
// @NgModule({
//   declarations: [AppComponent, server0301Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// server0302
// 004 0302

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppComponent } from './app.component';
// import { server0301Component } from "./002The Basics/server0301/server0301.component"
// import { Server0302Component } from "./002The Basics/server0302/server0302.component";
//
// @NgModule({
//   declarations: [AppComponent, server0301Component, Server0302Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
//   exports: [
//     server0301Component
//   ]
// })
// export class AppModule {}

// AttributeSelector04

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { AttributeSelector04Component } from './002The Basics/attribute-selector04/attribute-selector04.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AttributeSelector04Component,
//   ],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// ClassSelector05Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";
//
// import { AppComponent } from "./app.component";
// import { ClassSelector05Component } from "./002The Basics/class-selector05/class-selector05.component";
// @NgModule({
//   declarations: [AppComponent, ClassSelector05Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// Documnet06Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";
//
// import { AppComponent } from "./app.component";
// import { Documnet06Component } from './002The Basics/documnet06/documnet06.component';
// @NgModule({
//   declarations: [AppComponent, Documnet06Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// StringInterpolation07Component

// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
//
// import {AppComponent} from "./app.component";
// import {StringInterpolation07Component} from './002The Basics/string-interpolation07/string-interpolation07.component';
//
// @NgModule({
//   declarations: [AppComponent, StringInterpolation07Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {
// }

// PropertyBinding0701Component

// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
//
// import {AppComponent} from "./app.component";
// import {PropertyBinding0701Component} from './002The Basics/property-binding0701/property-binding0701.component';
//
// @NgModule({
//   declarations: [AppComponent, PropertyBinding0701Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {
// }

// EventBinding0702Component

// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
//
// import {AppComponent} from "./app.component";
// import {EventBinding0702Component} from './002The Basics/event-binding0702/event-binding0702.component';
//
// @NgModule({
//   declarations: [AppComponent, EventBinding0702Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {
// }

// PassingData0703Component

// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
//
// import {AppComponent} from "./app.component";
// import {PassingData0703Component} from './002The Basics/passing-data0703/passing-data0703.component';
//
// @NgModule({
//   declarations: [AppComponent, PassingData0703Component],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {
// }

// TwoWayBinding08Component

// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
//
// import {AppComponent} from "./app.component";
// import {TwoWayBinding08Component} from './002The Basics/two-way-binding08/two-way-binding08.component';
// import {FormsModule} from "@angular/forms";
//
// @NgModule({
//   declarations: [AppComponent, TwoWayBinding08Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {
// }

// CombiningAllTypesOfBindings0802Component

// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
//
// import {AppComponent} from "./app.component";
// import {FormsModule} from "@angular/forms";
// import {
//   CombiningAllTypesOfBindings0802Component
// } from './002The Basics/combining-alltypes-of-bindings0802/combining-all-types-of-bindings0802.component';
//
// @NgModule({
//   declarations: [AppComponent, CombiningAllTypesOfBindings0802Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {
// }

// Assignment0803Component

// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
//
// import {AppComponent} from "./app.component";
// import {FormsModule} from "@angular/forms";
// import {Assignment0803Component} from './002The Basics/assignment0803/assignment0803.component';
//
// @NgModule({
//   declarations: [AppComponent, Assignment0803Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {
// }

// Directive09Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { Directive09Component } from "./002The Basics/directive09/directive09.component";

// @NgModule({
//   declarations: [AppComponent, Directive09Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// NgifDirective0901Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { NgifDirective0901Component } from "./002The Basics/NgifDirective0901/NgifDirective0901.component";

// @NgModule({
//   declarations: [AppComponent, NgifDirective0901Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// NgIfThenElse0902Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { NgIfThenElse0902Component } from "./002The Basics/ngIfThenElse0902/ngIfThenElse0902.component";

// @NgModule({
//   declarations: [AppComponent, NgIfThenElse0902Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// NgSwitch0903Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { NgSwitch0903Component } from "./002The Basics/ngSwitch0903/ngSwitch0903.component";

// @NgModule({
//   declarations: [AppComponent, NgSwitch0903Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// NgStyleAndngClass0904Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { NgStyleAndngClass0904Component } from "./002The Basics/ngStyleAndngClass0904/ngStyleAndngClass0904.component";

// @NgModule({
//   declarations: [AppComponent, NgStyleAndngClass0904Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// NgFor0905Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { NgFor0905Component } from "./002The Basics/ngFor0905/ngFor0905.component";

// @NgModule({
//   declarations: [AppComponent, NgFor0905Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// Assignmnet10Component

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { Assignmnet10Component } from "./002The Basics/Assignmnet10/Assignmnet10.component";

// @NgModule({
//   declarations: [AppComponent, Assignmnet10Component],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// A003CourseProjectComponent

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { A003CourseProjectComponent } from "./A003CourseProject/A003CourseProject.component";
// import { B001HeaderComponetComponent } from "./A003CourseProject/B001HeaderComponet/B001HeaderComponet.component";
// import { B002ShoppingListComponent } from "./A003CourseProject/B002ShoppingList/B002ShoppingList.component";
// import { B003RecipeBookComponent } from "./A003CourseProject/B003RecipeBook/B003RecipeBook.component";

// @NgModule({
//   declarations: [
//     AppComponent,
//     A003CourseProjectComponent,
//     B001HeaderComponetComponent,
//     B002ShoppingListComponent,
//     B003RecipeBookComponent,
//   ],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// A004debuggingComponent

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { A004debuggingComponent } from "./A004debugging/A004debugging.component";

// @NgModule({
//   declarations: [AppComponent, A004debuggingComponent],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// A005DatabindingDeepDiveComponent

// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { FormsModule } from "@angular/forms";
// import { A005DatabindingDeepDiveComponent } from "./A005DatabindingDeepDive/A005DatabindingDeepDive.component";
// import { B001CockpitComponent } from "./A005DatabindingDeepDive/B001Cockpit/B001Cockpit.component";
// import { B002ServerElementComponent } from "./A005DatabindingDeepDive/B002ServerElement/B002ServerElement.component";

// @NgModule({
//   declarations: [
//     AppComponent,
//     A005DatabindingDeepDiveComponent,
//     B001CockpitComponent,
//     B002ServerElementComponent,
//   ],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
