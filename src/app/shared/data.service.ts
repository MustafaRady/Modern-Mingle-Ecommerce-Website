import { Injectable } from '@angular/core';
import { Garment } from '../models/product';
import {Observable} from 'rxjs';
import { from, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(
  //   private storage: AngularFireStorage,
  //   private http:HttpClient
  // ) { }

   cart:Array<Garment> = [];

  // addToCart(garment:Garment): void {
  //   this.cart.push(garment);
  // }



  // generateHexColor = () => {
  //   return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`;
  // }

  // categories = ['Top', 'T-Shirt', 'Blouse', 'Tank Top', 'Dress', 'Pants', 'Jacket', 'Coat'];
  // materials = ['Cotton', 'Polyester', 'Silk', 'Satin', 'Wool', 'Denim', 'Leather', 'Linen'];
  // brands = ['Fashion Co', 'Basic Wear', 'Office Chic', 'Active Wear', 'Glamour Gown', 'Home Comfort', 'Denim Couture', 'Winter Wear'];

  // sizesArray = [
  //   ['S', 'M', 'L', 'XL'],
  //   ['M', 'L'],
  //   ['S', 'M', 'L'],
  //   ['S', 'M'],
  //   ['M', 'L', 'XL'],
  //   ['S', 'L'],
  //   ['M', 'XL'],
  //   ['S', 'M', 'L', 'XL', 'XXL']
  // ];

  // getRandomSizes = () => this.sizesArray[Math.floor(Math.random() * this.sizesArray.length)];
  // getRandomMaterial = () => {
  //   let materials  :string[] =[];
  //   materials.push(this.materials[Math.floor(Math.random() * this.materials.length)])
  //   return materials
  // };
  // getRandomBrand = () => this.brands[Math.floor(Math.random() * this.brands.length)];
  // getRandomStock = () => Math.random() > 0.5;
  

  // sampleGarments: Garment[] = Array.from({ length: 35 }, (_, i) => {
  //   const id = (i + 1).toString();
  //   const category = this.categories[i % this.categories.length];
  //   const sizes = this.getRandomSizes();
  //   const rating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
  //   const colors = Array.from({ length: 3 }, this.generateHexColor); // Array of 3 random colors
  //   const path= i<9?`../../assets/images/clothes/garment${i}.png`:`../../assets/images/clothes/garment${i}.jpg`;
   
  //   return {
  //     id,
  //     name: `Garment ${id}`,
  //     path,
  //     price: 100 + i * 10,
  //     description: `This is a detailed description for Garment ${id}. It is designed to provide both comfort and style. Made from high-quality materials, this garment is perfect for various occasions.`,
  //     subDescription: `A stylish and comfortable ${category}. Perfect for casual or formal occasions.`,
  //     category,
  //     sizes,
  //     colors,
  //     materials: this.getRandomMaterial(),
  //     brand: this.getRandomBrand(),
  //     inStock: this.getRandomStock(),
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     rating,
  //   };
  // });

  // topSellers: Garment[] = Array.from({ length: 4 }, (_, i) => {
  //   const id = (i + 1).toString();
  //   const category = this.categories[i % this.categories.length];
  //   const sizes = this.getRandomSizes();
  //   const rating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
  //   const colors = Array.from({ length: 3 }, this.generateHexColor); // Array of 3 random colors

  //   return {
  //     id,
  //     name: `Garment ${id}`,
  //     path: `../../assets/images/clothes/top${i}.jpg`,
  //     price: 100 + i * 10,
  //     description: `This is a detailed description for Garment ${id}. It is designed to provide both comfort and style. Made from high-quality materials, this garment is perfect for various occasions.`,
  //     subDescription: `A stylish and comfortable ${category}. Perfect for casual or formal occasions.`,
  //     category,
  //     sizes,
  //     colors,
  //     materials: this.getRandomMaterial(),
  //     brand: this.getRandomBrand(),
  //     inStock: this.getRandomStock(),
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     rating
  //   };
  // });


 

  

}
