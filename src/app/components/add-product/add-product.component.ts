import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  buttonColor = 'green';
  buttonText = 'Add Product';

  @Input() name: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
  @Input() price: number = 0;
  @Input() id?: number = 0;
  @Input() isEditing: boolean = false;

  @Output() onAddProduct = new EventEmitter();

  ngOnInit() {}
  ngOnChanges() {
    this.isEditing
      ? (this.buttonText = 'Edit Product')
      : (this.buttonText = 'Add Product');
  }

  onSubmit() {
    const newTask: Product = {
      name: this.name,
      description: this.description,
      category: this.category,
      price: this.price,
    };
    if (this.isEditing) {
      newTask.id = this.id;
    }

    if (newTask) {
      this.onAddProduct.emit(newTask);
    }
    this.name = '';
    this.description = '';
    this.category = '';
    this.price = 0;
  }
}
