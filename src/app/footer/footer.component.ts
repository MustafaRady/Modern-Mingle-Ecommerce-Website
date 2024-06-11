import { Component } from '@angular/core';
import { FooterItems } from './footer-items';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  form:any;

  constructor(
  ){

    this.form = new FormGroup({
      email : new FormControl('')
    })
  }

  click(){
    console.log('click');
  }

  links: Array<any> = [
    {
      title: "COMPANY INFO",
      links: [
        { name: "About Us", route: "/about" },
        { name: "Contact Us", route: "/contact" }
      ]
    },
    {
      title: "HELP LINKS",
      links: [
        { name: "Payments", route: "/payments" },
        { name: "Cancellation & Returns", route: "/cancellation" }
      ]
    },
    {
      title: "USEFUL LINKS",
      links: [
        { name: "Terms & Conditions", route: "/terms-conditions" },
        { name: "Privacy Policy ", route: "/privacy-policy" },
        { name: "FAQs ", route: "/faqs" }
      ]
    }
  ];
  

  payments:Array<string>=[
    "../../assets/images/services2/cash-on-delivery.png",
    "../../assets/images/services2/dollar-symbol.png",
    "../../assets/images/services2/lebanese-pound.png",
    "../../assets/images/services2/whatsapp (1).png",
  ]

  onSubmit(){
    console.log(this.form);
    
  }
}
