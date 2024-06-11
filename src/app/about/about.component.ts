import { Component } from '@angular/core';
import { Founder } from './founder';
import { Testimonial } from './testimonial';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  founders:Array<Founder>=[
    {
      name:"John Doe",
      imgPath:"../../assets/images/aboutUs/founders/img1.png"
    },
    {
      name:"Jane Doe",
      imgPath:"../../assets/images/aboutUs/founders/img2.png"
    },
    {
      name:"John Smith",
      imgPath:"../../assets/images/aboutUs/founders/img3.png"
    },
    {
      name:"Jane Smith",
      imgPath:"../../assets/images/aboutUs/founders/img4.png"
    }
  ]

  testimonials:Array<Testimonial>=[
    {
      name:"John Smith",
      imgPath:"../../assets/images/aboutUs/testimonials/img.png",
      details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Jane Smith",
      imgPath:"../../assets/images/aboutUs/testimonials/img2.png",
      details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"John Doe",
      imgPath:"../../assets/images/aboutUs/testimonials/img3.png",
      details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    
  ]
}
