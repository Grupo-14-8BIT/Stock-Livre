import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StockComponent } from './components/stock/stock.component';
import { SkuComponent } from './components/sku/sku.component';
import { AccountComponent } from './components/account/account.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { LoginComponent } from './components/login/login.component';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { AddAccountComponent } from './components/layout/add-account/add-account.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SellComponent } from './components/sell/sell.component';
import { AddskuComponent } from './components/sku/addSku/addsku.component';
import { StockAddComponent } from './components/stock/stock-add/stock-add.component';
import { StockShowComponent } from './components/stock/stock-show/stock-show.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StockEditarComponent } from './components/stock/stock-editar/stock-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuComponent,
    StockComponent,
    AccountComponent,
    AnnouncementComponent,
    LoginComponent,
    SideBarComponent,
    FooterComponent,
    HomePageComponent,
    AddAccountComponent,
    DashboardComponent,
    SellComponent,
    AddskuComponent,
    StockAddComponent,
    StockShowComponent,
    SignUpComponent,
    StockEditarComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  NgbModule,
  ReactiveFormsModule,
],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
