import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  productQuantity: number  = 1
  productTotalPrice: number  = 50
  productMainPrice = 50
  constructor() { }
  incrementQuantity  = async (price:number, quantity:number)  => {
    this.productMainPrice = price
    this.productQuantity = quantity
    this.productQuantity += 1
    this.productTotalPrice += this.productMainPrice 
    return {productQuantity: this.productQuantity,productTotalPrice: this.productTotalPrice }
  }
  decrementQuantity  = async(price:number, quantity:number)  => {
    this.productMainPrice = price
    this.productQuantity = quantity 
    if(this.productQuantity <= 1) return {productQuantity: this.productQuantity, productTotalPrice: this.productTotalPrice };
    this.productQuantity -= 1
    this.productTotalPrice -= this.productMainPrice
    return {productQuantity: this.productQuantity, productTotalPrice: this.productTotalPrice }
  }
}
