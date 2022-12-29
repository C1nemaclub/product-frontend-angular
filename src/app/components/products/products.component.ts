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

  name: string = '';
  category: string = '';
  description: string = '';
  price: number = 0;
  isEditing: boolean = false;
  id?: number = 0;

  products: Product[] = [];

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.products = this.products.filter((item) => {
        return item.id !== product.id;
      });
    });
  }

  addProduct(product: Product) {
    if (this.isEditing) {
      this.productService.editProduct(product).subscribe((items) => {
        let found = this.products.find((item) => item.id === product.id);
        if (found) {
          found.name = product.name;
          found.category = product.category;
          found.description = product.description;
          found.price = product.price;
        }
      });
      this.isEditing = false;
    } else {
      this.productService.addProduct(product).subscribe((product) => {
        this.products.push(product);
      });
    }
  }

  editProduct(product: Product) {
    this.name = product.name;
    this.category = product.category;
    this.description = product.description;
    this.price = product.price;
    this.id = product.id;
    this.isEditing = true;
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
