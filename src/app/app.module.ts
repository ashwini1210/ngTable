import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    Ng2TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
