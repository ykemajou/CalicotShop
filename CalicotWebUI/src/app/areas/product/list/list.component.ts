import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  products: ProductModel[] = [];

  displayedColumns: any[] = [
    {column: 'name', libelle: 'Libelle'}, 
    {column: 'description', libelle: 'Description'},
    {column: 'price', libelle: 'Prix'}, 
    {column: 'picture', libelle: 'Image'}, ];

  columnsToDisplay: string[] = this.displayedColumns.map(m => m.column).slice();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    });
  }

  addProduct(){}

}
