import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  buttonText = 'Delete';
  buttonColor = 'red';
  editColor = 'dodgerblue';
  editText = 'Edit';
  @Output() handleDelete = new EventEmitter();
  @Output() handleEdit = new EventEmitter();
  @Input() product: any;

  handleClick(product: Product) {
    this.handleDelete.emit(product);
  }

  handleEditClick(product: Product) {
    this.handleEdit.emit(product);
  }

  ngOnInit() {}
}
