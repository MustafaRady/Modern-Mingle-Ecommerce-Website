import { Component, OnInit, ViewChild } from '@angular/core';
import { Garment } from '../models/product';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { ProductService } from '../services/productService.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit{
   product:Garment;

    constructor(
      private route :ActivatedRoute,
      private productService :ProductService,
      private router : Router
    ){}

    ngOnInit(): void {
      this.getProduct();
    }

    getProduct():any {
      let productId = this.route.snapshot.paramMap.get('id')
      
      this.productService.getById(productId).subscribe(
        (product)=>{
          this.product = product ;
          console.log('Product fetched successfully!') 
          console.log(product)
        }, (error)=>{
          console.error('Error fetching product: ', error);
        }
      );
    }

    buy(garment:Garment):void {
      

      this.router.navigate(['checkout'],{ queryParams: { product: JSON.stringify(garment) } })
      
    }



    
}
