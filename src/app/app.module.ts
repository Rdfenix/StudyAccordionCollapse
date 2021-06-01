import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapseComponent } from './collapse/collapse.component';
import { InternalListComponent } from './internal-list/internal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseComponent,
    InternalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
