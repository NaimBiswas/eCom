import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-grid-slider',
  templateUrl: './product-grid-slider.component.html',
  styleUrls: ['./product-grid-slider.component.scss']
})
export class ProductGridSliderComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    items: 4,
    dots: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {

      0: {
        items: 1,
      },

      480: {
        items: 2,
      },

      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    }
  }
  ngOnInit(): void {
  }

}
