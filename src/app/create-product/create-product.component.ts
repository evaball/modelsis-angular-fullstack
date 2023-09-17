import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeProduct } from '../type-product';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService

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
      this.toastr.success('Opération réussie', 'Succès', {positionClass:'toast-top-right'})
      this.router.navigateByUrl('/products')
    }, 
    error=>{
      this.toastr.error('Operation echouée', 'erreur');
    }
    )
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
