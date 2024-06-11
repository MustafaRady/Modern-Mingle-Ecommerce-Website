import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService.service';
import { Garment } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  isLoading=false;
  products : Garment[] = [];
  groupedProducts: { [key: string]: Garment[] } = {};
  categories:String[] = [];

  constructor(
    private productService : ProductService,
    private route : Router
  ){}

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getAll().subscribe(
      (products: Garment[]) => {
        this.products = products;
        console.log(this.products);
        this.isLoading=false
        this.getProductsByGroup()
      },error=>{
        console.error('Error fetching products: ',error);
      }
    )
  }

  getProductsByGroup() {
    const categories = this.products.map(product=>product.category)
    const uniqueCategories = Array.from(new Set(categories))
    this.categories = uniqueCategories;
  
  
       this.groupedProducts = this.products.reduce((acc, product) => {
        const category = product.category || 'Uncategorized'; // Handle undefined categories
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(product);
        return acc;
      }, {} as { [key: string]: Garment[] });
  

      console.log(this.groupedProducts);


    }
  
    chunkArray(array: any[], size: number): any[][] {
      return array.reduce(
        (acc, _, i) => 
          (i % size ? acc : [...acc, array.slice(i, i + size)])
        ,[]);
    }

    navigate(productId:string){
      this.route.navigate(['product' ,productId])

    }

    
}
