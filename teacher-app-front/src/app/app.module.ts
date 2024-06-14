import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./view/header/header.component";
import {FooterComponent} from "./view/footer/footer.component";
import {TeacherAddComponent} from "./view/teacher-add/teacher-add.component";
import {ContentComponent} from "./view/content/content.component";
import {FormsModule} from "@angular/forms";
import {TeacherListComponent} from "./view/teacher-list/teacher-list.component";
import {AppRoutingModule} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    TeacherAddComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TeacherListComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
