import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeProduct } from '../type-product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  currentProduct!: Product;
  typeProducts: TypeProduct[]=[];
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  editForm!: FormGroup;
  ngOnInit(): void {

    this.currentProduct=this.productService.currentProduct;
    this.findAllTypeProducts();
    // Default Form
    this.editForm = new FormGroup({
      name: new FormControl('', [
        
      ]),
      typeProduct: new FormControl('', [
        
      ])
  
    });

    this.editForm.patchValue({
      
      name: this.currentProduct.name,
      typeProduct: this.currentProduct.typeProduct.id_type
      
    })
  }
  annuler(){
    this.router.navigateByUrl('/products')
  }
  onSubmit(){
    console.log(this.currentProduct);

  }
  updateProduct(){
    let data={
      name: this.editForm.value.name,
      typeProduct: this.editForm.value.typeProduct.id_type
      
    }
    console.log(this.currentProduct);
    this.productService
    .updateProduct(this.currentProduct.id, this.currentProduct)
    .subscribe(data=>{
      this.toastr.success('Opération réussie', 'Succès');
      this.router.navigateByUrl('/products');
    // }, error=>{
    //   console.log(error)
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



