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

// App0201 module
// 002 - 0201
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { App0201Module } from './app0201/app0201.module';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, App0201Module],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// App0202 use only component instead of module
// 003 - 0202
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { App0202Component } from './app0202/app0202.component';

// @NgModule({
//   declarations: [AppComponent, App0202Component],
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { server0301Component } from './server0301/server0301.component';
import { Server0302Component } from './server0302/server0302.component';
import { AttributeSelector04Component } from './attribute-selector04/attribute-selector04.component';

@NgModule({
  declarations: [AppComponent, server0301Component, Server0302Component, AttributeSelector04Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
