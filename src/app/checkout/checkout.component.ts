import { Component, OnInit } from '@angular/core';
import { Garment } from '../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import namer from 'color-namer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  showPopup: boolean = false;
  popupMessage: string = '';

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
            let name = namer(params['color']).basic[0].name
            this.productInfo.color=name;
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
      "--Full Name: "+message.fullName+"\n"+
      "--Address: "+message.address+"\n"+
      "--City: "+message.city+"\n"+
      "--Color: "+message.color+"\n"+
      "--Order: " + message.order + "\n" +
      "--Sub Total: "+message.subTotal+" $";

      // const shopOwnerNumber = '#######'; // Shop owner's WhatsApp number in international format without '+'
      // const encodedMessage = encodeURIComponent(messageToSent);
      // const url = `https://wa.me/${shopOwnerNumber}?text=${encodedMessage}`;
      // this.error ='';
      // window.open(url, '_blank');
      this.popupMessage = messageToSent

      // Show the popup
      this.showPopup = true;
    }
    else{
      
      this.error = "Please fill all the fields!";
    }
  }

  closePopup(): void {
    // Hide the popup
    this.showPopup = false;
  }
}
