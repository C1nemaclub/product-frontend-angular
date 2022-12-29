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
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
