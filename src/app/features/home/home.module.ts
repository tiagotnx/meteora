import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
