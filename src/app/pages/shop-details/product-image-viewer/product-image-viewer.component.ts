import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image-viewer',
  templateUrl: './product-image-viewer.component.html',
  styleUrls: ['./product-image-viewer.component.scss']
})
export class ProductImageViewerComponent implements OnInit {

  constructor() {
    (<any>$("select")).niceSelect();
    $('.product__details__pic__slider img').on('click', function () {
      var imgurl = $(this).data('imgbigurl');
      var bigImg = $('.product__details__pic__item--large').attr('src');
      if (imgurl != bigImg) {
          $('.product__details__pic__item--large').attr({
              src: imgurl
          });
      }
    });
    (<any>$(".product__details__pic__slider")).owlCarousel({
      loop: true,
      margin: 20,
      items: 4,
      dots: true,
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true
    });
   }
  
  ngOnInit(): void {

  }

}
