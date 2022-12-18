import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcum-section',
  templateUrl: './breadcum-section.component.html',
  styleUrls: ['./breadcum-section.component.scss']
})
export class BreadcumSectionComponent implements OnInit {
@Input()
  breadCumTitle: String | undefined = "Shop"
  @Input()
  topTitle: String | undefined = "Shop"
  constructor() { }

  ngOnInit(): void {
  }

}
