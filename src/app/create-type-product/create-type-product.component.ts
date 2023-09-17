import { Component } from '@angular/core';
import { TypeProduct } from '../type-product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-type-product',
  templateUrl: './create-type-product.component.html',
  styleUrls: ['./create-type-product.component.css']
})
export class CreateTypeProductComponent {
   typeProduct: TypeProduct = new TypeProduct() ;
 



  constructor(

    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService

  ) { }
  addForm!: FormGroup;
  ngOnInit(): void {
   
    this.addForm = new FormGroup({
      name: new FormControl('', [
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

  addTypeProduct() {
    this.productService.addTypeProduct(this.typeProduct)
      .subscribe(data => {
        this.toastr.success('Opération réussie', 'Succès');
        this.router.navigateByUrl('/products');
      },
      error=>{
        this.toastr.error('Operation echouée', 'erreur');
      }
      );
  }
  

}
