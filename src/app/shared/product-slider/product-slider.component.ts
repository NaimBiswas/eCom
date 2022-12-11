import { Component, OnInit } from '@angular/core';
import { OwlOptions, } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: false,
    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true
  };
  ngOnInit(): void {
  }

}
