import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { MarkdownModule } from "ngx-markdown";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { CustomPipe } from "./custom.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  declarations: [AppComponent, HelloComponent, CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
