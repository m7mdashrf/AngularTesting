import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  Discount:DiscountOffers = 0;
  storeName:string="";
  storeLogo:string="";
  ProductList:IProduct = {
    ID: 1, Name: "Phone", Quantity: 5, Price: 20, Img: "path"};
  CategoryList:ICategory= { ID: 1, Name: "Mobile"};
  ClientName: string="";
  IsPurshased: boolean=false;


  ngOnInit(): void {
  }

}
