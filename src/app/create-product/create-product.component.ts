import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeProduct } from '../type-product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{

  product: Product = new Product();
  typeProducts: TypeProduct[]=[];
  typeProductId!: number;
  productName!: string;



  constructor(

    private productService: ProductService,
    private router: Router

  ) { }
  addForm!: FormGroup;
  ngOnInit(): void {
   
    this.findAllTypeProducts();
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
    let data={
      "name": this.productName,
        "typeProduct": {
          "id_type": this.typeProductId
      }
    
    }
    this.productService
    .addProduct(data)
    .subscribe(data=>{
      console.log(JSON.stringify("Produit ajoute"))
      this.router.navigateByUrl('/products')
    }, 
    error=>{console.log(error)})
  }

  findAllTypeProducts(){
    this.productService
    .findAllTypeProduct()
    .subscribe(data=>{
      this.typeProducts=<TypeProduct[]>data;
      console.log(data);
    })
  }

}
