// back to empty code

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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App0201Module } from './app0201/app0201.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, App0201Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// App0202
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
