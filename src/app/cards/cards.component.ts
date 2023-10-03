import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  searchText: string=''
  productsData : any =[];
  showData: any;
  
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    
    this.productsService.getProductInfo().subscribe(res=> this.productsData=res)
    // this.productsData=this.productsService.getProductInfo();
  }

  
// products= [
//     {"prodId":501,"prodTitle":"Headset","prodPrice":500,"prodImage": "../assets/images/images.jfif"},   
//     {"prodId":502,"prodTitle":"PowerBank","prodPrice":700,"prodImage": "../assets/images/images.jfif"},
//     {"prodId":503,"prodTitle":"USB","prodPrice":300,"prodImage": "../assets/images/images.jfif"},
//     {"prodId":504,"prodTitle":"Cable","prodPrice":400,"prodImage": "../assets/images/images.jfif"},
//     {"prodId":505,"prodTitle":"Pendrive","prodPrice":600,"prodImage": "../assets/images/images.jfif"},
//     {"prodId":506,"prodTitle":"UPS","prodPrice":400,"prodImage": "../assets/images/images.jfif"}
//  ]

      // SORT DATA FUNCTION TO SORT BY ID, PRICE &   PRODUCT-NAME 
    order:boolean;
      sortID(){
    if(this.order){
      let newarr=this.productsData.sort((a,b) => a.prodId - b.prodId)
      this.productsData=newarr;
    }
    else{
      let newarr=this.productsData.sort((a,b) => b.prodId - a.prodId)
      this.productsData=newarr;
    }

    this.order = !this.order;
   }

     sortPrice(){
      if(this.order){
        let newarr=this.productsData.sort((a,b) => a.prodPrice - b.prodPrice)
        this.productsData=newarr;
      }
      else{
        let newarr=this.productsData.sort((a,b) => b.prodPrice - a.prodPrice )
        this.productsData=newarr;
      }
  
      this.order = !this.order;
     }

     isDesc:boolean;
     sortName(property){
        this.isDesc=!this.isDesc;

        let direction =this.isDesc ? 1:-1;

        this.showData.sort(function(a,b){
          if(a[property] < b[property]){
            return -1 * direction;
          }
          else if(a[property] > b[property]){
            return 1 * direction;
          }
          else {
            return 0;
          }
        });
     }
}
