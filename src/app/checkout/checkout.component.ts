import { Component, OnInit } from '@angular/core';
import { Garment } from '../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  error:string = "";
  order:Garment;
  subTotal:number = 0;
  form :any; 
  product:Garment;
  productInfo:{
    color:string,
    size:string
  }={ color: '', size: '' };
  
  
  constructor(
    private route: ActivatedRoute,
  ){

    this.form = new FormGroup({
        fullName:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required),
        city:new FormControl('',Validators.required),
      }
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params)=>{
        if(params['product']){
          this.product = JSON.parse(params['product']);
          this.order = this.product;
          this.subTotal = this.product.price;
          console.log(this.product)
        }
        if(params['color']){
          console.log(params['color'])
            this.productInfo.color=params['color'];
        }
        if(params['size']){
            this.productInfo.size=params['size'];
        }
      }
    )
    
    
  }


  onSubmit():void {

    if(this.form.valid){
      const message = {
        fullName: this.form.value.fullName,
        address: this.form.value.address,
        city: this.form.value.city,
        order: this.order.name,
        subTotal: this.subTotal,
        color:this.productInfo.color,
        size:this.productInfo.size
      } 
      let messageToSent = 
      "Full Name: "+message.fullName+"\n"+
      "Address: "+message.address+"\n"+
      "City: "+message.city+"\n"+
      "Order: " + message.order + "\n" +
      "Sub Total: "+message.subTotal+" $";

      const shopOwnerNumber = '+96176771908'; // Shop owner's WhatsApp number in international format without '+'
      const encodedMessage = encodeURIComponent(messageToSent);
      const url = `https://wa.me/${shopOwnerNumber}?text=${encodedMessage}`;
      this.error ='';
      window.open(url, '_blank');
    }
    else{
      
      this.error = "Please fill all the fields!";
    }
  }
}
