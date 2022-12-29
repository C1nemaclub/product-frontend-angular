import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  buttonColor = 'green';
  buttonText = 'Add Product';
  name: string = '';
  description: string = '';
  category: string = '';
  price: number = 0;

  @Output() onAddProduct = new EventEmitter();

  onSubmit() {
    const newTask: Product = {
      name: this.name,
      description: this.description,
      category: this.category,
      price: this.price,
    };
    if (newTask) {
      this.onAddProduct.emit(newTask);
    }
    this.name = '';
    this.description = '';
    this.category = '';
    this.price = 0;
  }
}
