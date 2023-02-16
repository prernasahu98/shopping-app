import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems: any = [];
  public grandTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().
      subscribe(res => {
        this.cartItems = res;
        this.grandTotal = this.cartService.getTotalPrice();
        this.grandTotal = Number(this.grandTotal.toFixed(2));
      })
  }

  removeFromCart(item: any) {
    this.cartService.removeCartItem(item);
  }

  clearCart() {
    this.cartService.removeAll();
  }

  addItem(item: any) {
    this.cartService.addItem(item)
  }

  removeItem(item: any) {
    this.cartService.removeItem(item)
  }
}
