import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkuComponent } from './components/sku/sku.component';
import { StockComponent } from './components/stock/stock.component';
import { AccountComponent } from './components/account/account.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { AddskuComponent } from './components/sku/addSku/addsku.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SkuComponent,
    StockComponent,
    AccountComponent,
    AnnouncementComponent,
    LoginComponent,
    SingUpComponent,
    SideBarComponent,
    FooterComponent,
    HomePageComponent,
    AddskuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
