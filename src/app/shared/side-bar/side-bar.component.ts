import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input()
  isFullBarShow: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
    $('.hero__categories__all').on('click', function(){
      $('.hero__categories ul').slideToggle(400);
    });
  }

}
