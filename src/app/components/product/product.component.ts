import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { GoogleApiService } from 'src/app/service/google-api.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  value: number = 0;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 200
  }
  filter = false;
  price = false;
  shipping = false;

  public productList: any[];
  public totalItem: number = 0;
  public products: any = [];

  totalLength: any;
  currentPage: number = 1;

  constructor(private apiService: ApiService,
    private productService: ProductsService,
    private cartService: CartService,
    private readonly router: Router,
    private googleApi: GoogleApiService) { }

  ngOnInit() {
    // this.apiService.getProduct()
    //   .subscribe(res =>
    //     this.productList = res.products)
    this.productList = this.productService.getItems();
    this.products = this.productList.slice();
    this.productList.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price })
    })
    this.cartService.getProduct().
      subscribe(res => {
        this.totalItem = res.length;
      })

  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }

  onFilter() {
    this.filter = !this.filter;
  }

  onPrice() {
    this.price = !this.price;
  }

  onShipping() {
    this.shipping = !this.shipping
  }

  logOut() {
    this.googleApi.signOut();
  }
}


