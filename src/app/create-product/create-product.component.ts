import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{

  product: Product = new Product();

  constructor(

    private productService: ProductService,
    private router: Router

  ) { }
  addForm!: FormGroup;
  ngOnInit(): void {
   
    this.addForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      typeProduct: new FormControl('', [
        Validators.required
      ])
      
    });
  }

  annuler() {
    this.router.navigateByUrl('/products')
  }

  onSubmit(){
    this.addForm;
  }
  addProduct(){

    let data = {
      name : this.addForm.value.name,
      typeProduct : this.addForm.value.typeProduct
      
    }

     console.log(data);
     this.product = <Product>data;
    this.productService
    .addProduct(this.product)
    .subscribe(data=>{
      console.log(JSON.stringify("Produit ajoute"))
      this.router.navigateByUrl('/products')
    }, 
    error=>{console.log(error)})
  }

}
