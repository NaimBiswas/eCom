import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'shop', component:ShopComponent},
  {path:'shopping-details', component:ShopDetailsComponent},
  {path:'shopping-cart', component:ShopingCartComponent},
  {path:'checkout', component:CheckOutComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog-details', component:BlogDetailsComponent},
  {path:'contract', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
