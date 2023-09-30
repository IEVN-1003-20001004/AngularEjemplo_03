import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductosFilterPipe } from './productos/productos-filter.pipe';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sumas2Component } from './calculos/sumas2/sumas2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductosFilterPipe,
    OperasBasComponent,
    Sumas2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
