import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { GoogleApiService } from 'src/app/service/google-api.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;

  filterItem = [];

  constructor(private cartService: CartService,
    private readonly googleApi: GoogleApiService,
    private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.cartService.getProduct().
      subscribe(res => {
        this.totalItem = res.length;
      })
  }

  logOut() {
    this.googleApi.signOut();
  }

}
