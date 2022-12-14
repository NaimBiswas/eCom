import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  @Input()
  perGridView: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
