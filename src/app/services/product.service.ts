import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Product';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:4000/api/v1/products';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl, options);
  }
  addProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product, options);
  }
  deleteProduct(product: Product) {
    return this.http.delete<Product>(this.apiUrl + '/' + product.id);
  }
}
