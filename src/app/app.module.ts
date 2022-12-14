import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderTopComponent } from './shared/header/header-top/header-top.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderBottomComponent } from './shared/header/header-bottom/header-bottom.component';
import { BigAddsComponent } from './shared/big-adds/big-adds.component';
import { ProductSliderComponent } from './shared/product-slider/product-slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FooterBottomComponent } from './shared/footer/footer-bottom/footer-bottom.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SmallAddComponent } from './shared/small-add/small-add.component';
import { SlidingProductsComponent } from './shared/sliding-products/sliding-products.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CategorySliderComponent } from './shared/category-slider/category-slider.component';
import { BlogPostGridComponent } from './shared/blog-post-grid/blog-post-grid.component';
import { ProductsGridComponent } from './shared/products-grid/products-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcumSectionComponent } from './shared/breadcum-section/breadcum-section.component';
import { ProductGridSliderComponent } from './shared/product-grid-slider/product-grid-slider.component';
import { ShopSideBarComponent } from './pages/shop/shop-side-bar/shop-side-bar.component';
import { PaginationsComponent } from './core/paginations/paginations.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    SideBarComponent,
    HeaderBottomComponent,
    BigAddsComponent,
    ProductSliderComponent,
    FooterComponent,
    FooterBottomComponent,
    ShopComponent,
    HomeComponent,
    ShopDetailsComponent,
    ShopingCartComponent,
    CheckOutComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent,
    SmallAddComponent,
    SlidingProductsComponent,
    LoginComponent,
    SignUpComponent,
    CategorySliderComponent,
    BlogPostGridComponent,
    ProductsGridComponent,
    BreadcumSectionComponent,
    ProductGridSliderComponent,
    ShopSideBarComponent,
    PaginationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
