import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkuComponent } from './components/sku/sku.component';
import { AccountComponent } from './components/account/account.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { StockComponent } from './components/stock/stock.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SellComponent } from './components/sell/sell.component';

const routes: Routes = [
  { path: "", redirectTo: "entrar", pathMatch: 'full' },
  { path: "sku", component:  SkuComponent},
  { path: "account", component:  AccountComponent},
  { path: "announcement", component:  AnnouncementComponent},
  { path: "login", component:  LoginComponent},
  { path: "singup", component:  SingUpComponent},
  { path: "stock", component:  StockComponent},
  { path: "home", component:  HomePageComponent},
  { path: "dashboard", component:  DashboardComponent},
  { path: "sell", component:  SellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
