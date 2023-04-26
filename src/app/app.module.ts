import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoringComponent } from './factoring/factoring.component';
import { OperationListCoComponent } from './factoring/operation-list-co/operation-list-co.component';
import { OperationsComponent } from './factoring/operation-list-co/operations/operations.component';
import { DynamicTableComponent } from './factoring/operation-list-co/operations/dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoringComponent,
    OperationListCoComponent,
    OperationsComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
