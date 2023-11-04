import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock: Stock[] = [];

  carroSelecionadoParaEdicao: any;
  constructor(private stockService: StockService) { }
  showAddStock: boolean = false;

  ngOnInit(): void {
      this.loadAllStock();
  }

  loadAllStock(): void {
      
      this.stockService.getAllStock().subscribe(data => {
          this.stock = data as Stock[];
      }, error => {
          console.error('Error fetching all accounts:', error);
      });
      console.log(this.stock);
      console.log("I will be back");
  }

  addOuEditarCarro(event: any) {
      console.log("teste");
  }

  editStock(stockId: number) {
      console.log(`Edit Stock with ID: ${stockId}`);
  }

  deleteAccount(stockId: number) {
      console.log(`Delete Stock with ID: ${stockId}`);
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

