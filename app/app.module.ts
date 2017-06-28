import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { ComponentOne } from "./componentOne/componentOne";
import { ComponentTwo } from "./componentTwo/componentTwo";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ComponentTwo, ComponentOne],
    bootstrap: [AppComponent]
})
export class AppModule { }
