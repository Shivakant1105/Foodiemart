import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StarRatingModule } from 'angular-star-rating';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { SearchComponent } from './components/pages/search/search.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TagComponent } from './components/pages/tag/tag.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodPageComponent,
    SearchComponent,
    CartPageComponent,
    TagComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
StarRatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
