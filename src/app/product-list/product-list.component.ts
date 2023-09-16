import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { TypeProduct } from '../type-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[]=[];
  currentDate: Date = new Date();
  currentProduct!: Product;


  constructor( private productService: ProductService){

  }

  ngOnInit(): void {
    this.findAllProducts();
    this.currentProduct=this.productService.currentProduct;
      
  }


  
  updateProduct(product: Product){
    console.log(product);
    this.productService.currentProduct=product;
  }
  findAllProducts(){
    this.productService
    .findAllProduct()
    .subscribe(data=>{
    this.products=<Product[]>data;
      console.log(data);
    })
  }
}
