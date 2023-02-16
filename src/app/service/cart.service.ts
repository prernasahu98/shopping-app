import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    if (!this.cartItemList.includes(product)) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
      console.log(this.cartItemList);
    } else {
      this.addItem(product)
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
        this.productList.next(this.cartItemList)
      }
    })
  }

  removeAll() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.productList.next(this.cartItemList)
  }

  addItem(item: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (item.id === a.id) {
        this.cartItemList[index].quantity++;
        this.productList.next(this.cartItemList)
      }
    })
  }

  removeItem(item: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (item.id === a.id) {
        this.cartItemList[index].quantity--;
        if (this.cartItemList[index].quantity === 0) {
          this.removeCartItem(item)
        }
        this.productList.next(this.cartItemList)
      }
    })
  }


}
