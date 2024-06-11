import { Component, OnInit } from '@angular/core';
import { Garment } from '../models/product';
import { Services } from '../models/services';
import { Router } from '@angular/router';
import { ProductService } from '../services/productService.service';
import { WhatsappService } from '../shared/whatsapp.service';
import { first } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router :Router ,
     private productService :ProductService,
    ){}

  products:Garment[]= [];
  isLoading:boolean = false;
  topSellers:Garment[] = [];
 

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getAll().subscribe(
      (data: Garment[]) => {
        this.products = data;
        this.isLoading = false;
        this.products= this.products.slice(0,5);
      },
      error => {
        console.error('Error fetching products: ', error);
      }
    );  
  
    this.productService.getAll().subscribe(
      (data: Garment[]) => {
        let firstIndex = Math.floor(Math.random()*26)
        this.topSellers = data.slice(firstIndex,firstIndex+4);
      },
      error => {
        console.error('Error fetching top sellers: ', error);
      }
    );
    
  }


    services: Array<Services> = [
      {
        title: "24/7 Customer Support",
        img: "../../assets/images/services/service1.png",
        description: "Our dedicated support team is available around the clock to assist you with any inquiries."
      },
      {
        title: "Free Local Shipping",
        img: "../../assets/images/services/service2.png",
        description: "Enjoy free shipping on all orders within Lebanon above $50."
      },
      {
        title: "100% Secure Payments",
        img:"../../assets/images/services/service3.png",
        description: "Your transactions are protected with advanced 256-bit encryption technology."
      },
      {
        title: "30-Day Return Policy",
        img: "../../assets/images/services/service4.png",
        description: "Return any item within 30 days for a hassle-free exchange or refund."
      }
    ]
    



  navigate( productId :string){
    this.router.navigate(['/product',productId]);
    
  }
}
