import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/productService.service';
import { DataService } from './shared/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-first-app';


  constructor(private productService: ProductService, private dataService:DataService){}

  ngOnInit(): void {

    // console.log(this.dataService.sampleGarments)
    
    // this.dataService.sampleGarments.forEach(
    //   (product)=>{
    //     this.productService.add(product).subscribe(
    //       (data)=>{
    //         console.log(product)
    //       },error=>{}
    //     )
    //   }
    // )

    

//    this.productService.deleteAll().subscribe();
  }
}
