import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { TesteeComponent } from './testee/testee.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    TesteeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
