import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ClassSelector05Component } from "./002The Basics/class-selector05/class-selector05.component";
import {AppModule} from "./app.module";


@NgModule({
    declarations: [AppComponent, ClassSelector05Component],
  imports: [BrowserModule, AppModule, AppModule, AppModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
