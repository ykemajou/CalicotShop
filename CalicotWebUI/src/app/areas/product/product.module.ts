import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, ProductRoutingModule } from './product-routing.module';
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [routedComponents],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductModule { }
