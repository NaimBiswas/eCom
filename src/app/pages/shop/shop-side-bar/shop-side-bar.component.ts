import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-side-bar',
  templateUrl: './shop-side-bar.component.html',
  styleUrls: ['./shop-side-bar.component.scss']
})

export class ShopSideBarComponent implements OnInit {
  
  constructor() {
    
   }
  
  ngOnInit(): void {
    var rangeSlider = <any>$(".price-range"),
      minamount = $("#minamount"),
      maxamount = $("#maxamount"),
      minPrice = rangeSlider.data('min'),
      maxPrice = rangeSlider.data('max');
      
      rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event: any, ui: { values: string[]; }) {
          minamount.val('$' + ui.values[0]);
          maxamount.val('$' + ui.values[1]);
        }
      });
      minamount.val('$' + rangeSlider.slider("values", 0));
      maxamount.val('$' + rangeSlider.slider("values", 1));

  }

}
