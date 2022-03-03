import { Injectable } from '@angular/core';
import { IProduct } from '../shared-classesand-types/Iproduct';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  productList: IProduct[] ;

  constructor() {
    this.productList =
    [
      { ID: 1, Name: 'Samsung', Quantity: 2, Price: 150, Img: '' },
      { ID: 2, Name: 'Hawawi', Quantity: 3, Price: 1000, Img: '' },
      { ID: 3, Name: 'Microsoft', Quantity: 1, Price: 200, Img: '' },
    ]
  }

  GetAllProducts() {
    return this.productList;
  }

  GetProductById($id:number){
    if(this.productList[$id] == undefined){
      return null;
    }
    else{
      return this.productList[$id]
    }
  }
}
