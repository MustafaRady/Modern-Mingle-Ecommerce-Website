import { Component, Input, OnInit } from '@angular/core';
import { Garment } from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() product:Garment;

  constructor() { }

  ngOnInit(): void {
    console.log("card ")
  }


  
  

}
