import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  product: ProductModel = new ProductModel(0, '', '');
  
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      if(param['id']) {
        this.productService.getProduct(param['id']).subscribe(product => {
          if(!!product) {
            this.product = product;
          }
          
        });
      } else {
        this.product = new ProductModel(0, '', '');
      }
    });
  }

  saveProduct() {
    if (this.product.id === 0) {
      this.productService.addProduct(this.product).subscribe(product => {
        this.product = product;
      });
    } else if (this.product.id >= 1) {
      this.productService.updateProduct(this.product).subscribe(product => {
        this.product = product;
      });
    }  
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product).subscribe();
  }

  quitter() {
    this.router.navigate(['/list']);
  }

}
