import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  viewType: string = 'col-lg-4'
  constructor() { }

  ngOnInit(): void {
  }

}
