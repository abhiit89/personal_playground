import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import { HighlightPipe } from './highlight.pipe';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    HighlightedTextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [HighlightPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
