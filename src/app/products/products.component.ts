import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared-classesand-types/Icategory';
import { DiscountOffers } from '../shared-classesand-types/Discountoffers';
import { IProduct } from '../shared-classesand-types/Iproduct';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount:any  = DiscountOffers[1];
  storeName: string;
  storeLogo: string;
  public ProductList: IProduct[];
  CategoryList: Array<ICategory>;
  ClientName: string;
  IsPurshased: boolean;


  constructor(private ProductService:ProductServiceService) {


    this.storeName= "MAX";
    this.storeLogo = "https://www.google.com/search?q=photos&tbm=isch&ved=2ahUKEwiOq4fyt6b2AhUIchQKHYYXDF8Q2-cCegQIABAA&oq=photos&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBQgAEIAEMgQIABBDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABBDOgcIIxDvAxAnOgYIABAHEB5QugxYugxg0A5oAHAAeACAAboBiAHNApIBAzAuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=9N0eYo7hFYjkUYavsPgF&bih=722&biw=1536#imgrc=9e3WAscwohxHwM";
    this.ProductList= [{
      ID: 1, Name: "Phone", Quantity: 5, Price: 20, Img: "path"
    }];
    
   
    this.IsPurshased = false;
    this.ClientName = "Mohamed";
    this.CategoryList =
      [{ ID: 1, Name: 'moblies' }
        , { ID: 2, Name: 'Cars' },
      { ID: 3, Name: 'computers' }
      ];
  }


  ngOnInit(): void {
    this.ProductList = this.renderValues();
  }

  renderValues(){
    return this.ProductService.GetAllProducts();
   } 
   
   
  check: boolean = true;
  Discountcheck() {
    if (this.Discount == 'NoDiscount') {
      this.check = false;
    }
    else {
      this.check = true;
    }
    return this.check;
  }
  checkIsPurshased(){
    if (this.IsPurshased == true){
      this.IsPurshased = false;
    }
    else{
      this.IsPurshased = true;
    }
  }

}
