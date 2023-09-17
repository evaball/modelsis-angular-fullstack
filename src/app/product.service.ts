import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(`${this.BASE_URL}/product/add`, product
    , { headers, responseType: 'text'});
  }

  findAllProduct(){
    return this.http.get(`${this.BASE_URL}/product/all`);
  }

  updateProduct(id: number, product: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.BASE_URL}/product/update/${id}`, product
    , { headers, responseType: 'text'  }
    );
  }

  addTypeProduct(typeProduct: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.BASE_URL}/typeProduct`, typeProduct
    , { headers, responseType: 'text'});
  }

  findAllTypeProduct(){
    return this.http.get(`${this.BASE_URL}/type/all`);
  }

}
