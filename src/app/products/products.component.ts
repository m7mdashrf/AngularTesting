import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared-classesand-types/Icategory';
import { DiscountOffers } from '../shared-classesand-types/Discountoffers';
import { IProduct } from '../shared-classesand-types/Iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  Discount:DiscountOffers = 0;
  storeName : string="MAX";
  storeLogo:string="https://www.google.com/search?q=photos&tbm=isch&ved=2ahUKEwiOq4fyt6b2AhUIchQKHYYXDF8Q2-cCegQIABAA&oq=photos&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBQgAEIAEMgQIABBDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABBDOgcIIxDvAxAnOgYIABAHEB5QugxYugxg0A5oAHAAeACAAboBiAHNApIBAzAuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=9N0eYo7hFYjkUYavsPgF&bih=722&biw=1536#imgrc=9e3WAscwohxHwM";
  ProductList:IProduct = {
  ID: 1, Name: "Phone", Quantity: 5, Price: 20, Img: "path"};
  CategoryList:ICategory= { ID: 1, Name: "Mobile"};
  ClientName: string="";
  IsPurshased: boolean=false;


  ngOnInit(): void {
  }

}
