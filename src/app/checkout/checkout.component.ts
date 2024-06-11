import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Garment } from '../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WhatsappService } from '../shared/whatsapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  orders:Array<Garment>;
  subTotal:number = 0;
  form :any; 
  product:Garment;
  
  
  constructor(
    private route: ActivatedRoute,
  ){

    this.form = new FormGroup({
        fullName:new FormControl(''),
        address:new FormControl(),
        city:new FormControl(),
      }
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params)=>{
        if(params['product']){
          this.product = JSON.parse(params['product']);
          this.orders = [this.product];
          this.subTotal = this.product.price;
          console.log(this.product)
        }
      }
    )
    
  }


  onSubmit():void {
    console.log(this.form.value);
    const message = {
      fullName: this.form.value.fullName,
      address: this.form.value.address,
      city: this.form.value.city,
      order: this.orders,
      subTotal: this.subTotal
    }

    let messageToSent = 
    "Full Name: "+message.fullName+"\n"+
    "Address: "+message.address+"\n"+
    "City: "+message.city+"\n"+
    "Order: " + 
    message.order.map((item)=>item.name).join(", ") + "\n" +
    "Sub Total: "+message.subTotal+" $";

    const shopOwnerNumber = '96170705763'; // Shop owner's WhatsApp number in international format without '+'
    const encodedMessage = encodeURIComponent(messageToSent);
    const url = `https://wa.me/${shopOwnerNumber}?text=${encodedMessage}`;
    console.log(url)
    window.open(url, '_blank');
  }
}
