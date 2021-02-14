import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { routedComponents, HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
  ],
  providers: []
})
export class HomeModule { }
