import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Garment } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cart :Array<Garment>;
  constructor(private data :DataService , private router : Router){}

  ngOnInit(): void {
    this.cart = this.data.cart;
  }

  removeItem(index:number):void {
    this.cart.splice(index,1);
  }

  proceedToCheckout():void {
    this.router.navigate(['checkout']);
  }
}
