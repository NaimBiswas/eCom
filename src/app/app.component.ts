import { Component } from '@angular/core';
import { 
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  Router,
  NavigationCancel,
  NavigationError,} from '@angular/router'
import { filter, take } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecom-frontend';
}
