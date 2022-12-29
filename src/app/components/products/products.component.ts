import { Component } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private productService: ProductService) {}

  products: Product[] = [];

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.products = this.products.filter((item) => {
        return item.id !== product.id;
      });
    });
  }

  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe((product) => {
      this.products.push(product);
    });
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      if (products.length > 0) {
        this.products = products;
      } else {
        this.products = [];
      }
    });
  }
}
