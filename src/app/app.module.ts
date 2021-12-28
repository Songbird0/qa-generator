import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopichandlerComponent } from './topichandler/topichandler.component';
import { TopicComponent } from './topic/topic.component';
import { QaComponent } from './qa/qa.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopichandlerComponent,
    TopicComponent,
    QaComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
