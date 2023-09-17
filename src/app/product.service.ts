import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = environment.API_ENDPOINT;
  currentProduct!: Product ;
  

  constructor(private http: HttpClient) { }

  addProduct(product: any) {
    return this.http.post(`${this.BASE_URL}/product/add`, product);
  }

  findAllProduct(){
    return this.http.get(`${this.BASE_URL}/product/all`);
  }

  updateProduct(id: number, product: any){
    return this.http.put(`${this.BASE_URL}/product/update/${id}`, product);
  }

  addTypeProduct(typeProduct: any) {
    return this.http.post(`${this.BASE_URL}/typeProduct`, typeProduct);
  }

  findAllTypeProduct(){
    return this.http.get(`${this.BASE_URL}/type/all`);
  }

}
