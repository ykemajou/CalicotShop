import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {   path: 'list',   component: ListComponent },
  {   path: 'detail/:id',  component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

export const routedComponents = [ListComponent, DetailComponent];
