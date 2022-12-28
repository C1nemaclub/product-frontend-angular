import { Component, Input } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: any;
  ngOnInit() {
    console.log(this.product);
  }
}
