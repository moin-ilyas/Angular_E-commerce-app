import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  prodURL : string ='assets/prod.json'
  constructor(private httpClient : HttpClient) { }

  getProductInfo(){
    return this.httpClient.get(this.prodURL);

      
  //   return [
  //     {"prodId":501,"prodTitle":"Headset","prodPrice":500,"prodImage": "../assets/images/images.jfif"},   
  //     {"prodId":502,"prodTitle":"PowerBank","prodPrice":700,"prodImage": "../assets/images/images.jfif"},
  //     {"prodId":503,"prodTitle":"USB","prodPrice":300,"prodImage": "../assets/images/images.jfif"},
  //     {"prodId":504,"prodTitle":"Cable","prodPrice":400,"prodImage": "../assets/images/images.jfif"},
  //     {"prodId":505,"prodTitle":"Pendrive","prodPrice":600,"prodImage": "../assets/images/images.jfif"},
  //     {"prodId":506,"prodTitle":"UPS","prodPrice":400,"prodImage": "../assets/images/images.jfif"}
  //  ]
  }
}
