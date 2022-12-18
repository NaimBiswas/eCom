import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {
  public productQuantity: number = 1
  public productTotalPrice: number | undefined
  public subTotal: number | undefined = 454.98
  
  constructor(public pageService: PageService) { }

  ngOnInit(): void {
    
  }
  increment = async (price:number, quantity:number)  => {
    const {productQuantity,productTotalPrice } = await this.pageService.incrementQuantity(price, quantity)
    this.productQuantity = productQuantity
    this.productTotalPrice = productTotalPrice

  }
  decrement = async (price:number, quantity:number)  => {
    const {productQuantity,productTotalPrice} = await this.pageService.decrementQuantity(price, quantity)
    this.productQuantity = productQuantity
    this.productTotalPrice = productTotalPrice
  }
}
