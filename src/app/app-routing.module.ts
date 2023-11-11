import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkuComponent } from './components/sku/sku.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { StockComponent } from './components/stock/stock.component';
import { StockShowComponent } from './components/stock/stock-show/stock-show.component';

const routes: Routes = [
  { path: "", redirectTo: "entrar", pathMatch: 'full' },
  { path: "sku", component:  SkuComponent},
  { path: "account", component:  AccountComponent},
  { path: "login", component:  LoginComponent},
  { path: "singup", component:  SingUpComponent},
  { path: "stock", component:  StockComponent, children: [{ path: "show", component: StockShowComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
