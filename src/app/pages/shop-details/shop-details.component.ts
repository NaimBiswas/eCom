import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {
  productQuantity: number  = 1
  productTotalPrice: number  = 50
  productMainPrice = 50
  isFav: boolean = false
  constructor() { }
  ngOnInit(): void {
  }
  incrementQuantity  = async ()  => {
    this.productQuantity += 1
    this.productTotalPrice += this.productMainPrice
  }
  decrementQuantity  = async()  => {
    if(this.productQuantity <= 1) return;
    this.productQuantity -= 1
    this.productTotalPrice -= this.productMainPrice
  }
  addToFav = async(isFav: boolean) => {
    this.isFav = isFav
  }
  addToCart  = async () => {
    const productDetails = {
        _id: "PorductId",
        name:"Product Name", 
        quantity: this.productQuantity, 
        totalPrice: this.productTotalPrice,
        mainPrice: this.productMainPrice,
        productDescription: "Product Description",
        productImage: 'Product Image',
        productCategory: "Product Category",
        availability: "Product Availability",
        weight: "Product weight",
        color:"Product Color", 
        size: "Product Size",
        addedAt: new Date(),
    } 
    
  }
}
