// back to empty code
// 001 - initial code

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

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


import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {PassingData0703Component} from './002The Basics/passing-data0703/passing-data0703.component';

@NgModule({
  declarations: [AppComponent, PassingData0703Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
