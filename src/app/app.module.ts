import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StockComponent } from './components/stock/stock.component';
import { SkuComponent } from './components/sku/sku.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AddAccountComponent } from './components/layout/add-account/add-account.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AddskuComponent } from './components/sku/addSku/addsku.component';
import { StockAddComponent } from './components/stock/stock-add/stock-add.component';
import { StockShowComponent } from './components/stock/stock-show/stock-show.component';


@NgModule({
  declarations: [
    AppComponent,
    SkuComponent,
    StockComponent,
    AccountComponent,
    LoginComponent,
    SingUpComponent,
    SideBarComponent,
    FooterComponent,
    AddAccountComponent,
    AddskuComponent,
    StockAddComponent,
    StockShowComponent
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
