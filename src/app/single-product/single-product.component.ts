import { Component, OnInit } from '@angular/core';
import { Garment } from '../models/product';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { ProductService } from '../services/productService.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit{
    product:Garment;
    selectedColor:string = '#FF0000';
    selectedSize:string = '';
    error:string = null;
    constructor(
      private route :ActivatedRoute,
      private productService :ProductService,
      private router : Router
    ){}

    ngOnInit(): void {
      this.getProduct();
    }

    selectColor(color:string):void {
      this.selectedColor = color;
    }

    selectSize(size:Event):void {
      const sizeSelected = size.target as HTMLSelectElement
      this.selectedSize = sizeSelected.value;
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
      if(this.selectedColor === '' || this.selectedSize === ''){
        this.error = 'Please select a color and size';
        return;
      }
      this.error=null;
      this.router.navigate(['checkout'],
        { queryParams: 
          { product: JSON.stringify(garment),
            color: this.selectedColor,
            size:this.selectedSize
          } 
        })
      
    }



    
}
