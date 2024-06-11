import { Component, Input, OnInit, Output } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];
  selectedStock: Stock | null = null;
  // selectedStockForEdition: Stock;
  showAddStock: boolean = false;
  showId!: number;
  show!:boolean;
  stockId!: number;
  stock!:Stock;
  



  
  constructor(private stockService: StockService) { }


  tratarAdd(){
    this.carregarLista();
  }

  ngOnInit(): void {
    this.carregarLista();
    
  } 


  carregarLista(){
    this.stockService.getAllStock().subscribe((data : Stock[])  => {
      this.stocks = data;
      console.log(this.stock);
  }, (error: any) => {
      console.error('Error fetching all accounts:', error);
  }); 
  }
  

  deleteStock(stockId: number) {
    this.stockService.deleteStock(stockId).subscribe((data:any) => {

      console.log("DELETE STOCK");
      alert("stock desvinculado");

  }, (error: any) => {
  

    });


    this.stocks = [];  
    this.stockService.getAllStock().subscribe((data : Stock[])  => {
      console.log("ate aqui ta ok");
      this.stocks = data;
  }, (error: any) => {
      console.error('Error fetching all accounts:', error);
  });
}

editarStock(stock : Stock){

  this.stock = stock;


}
  // async addNewStock(stock: Stock): Promise<void> {
  //   // Crie um objeto FormData para armazenar os dados do novo estoque.
  //   const formData = new FormData();
  //   formData.append('nome', stock.nome);
  //   // formData.append('conta_id', stock.conta_id);
  //   formData.append('usuario', stock.usuario);

  //   // Faça uma solicitação POST para a API de backend para adicionar o novo estoque.
  //   const response = await fetch('/api/stocks', {
  //     method: 'POST',
  //     body: formData
  //   });

  //   // Verifique se a solicitação foi bem-sucedida.
  //   if (response.status === 201) {
  //     // O novo estoque foi adicionado com sucesso.
  //     // Atualize a tabela de estoques para refletir a mudança.
  //   } else {
  //     // Ocorreu um erro ao adicionar o novo estoque.
  //     // Exiba uma mensagem de erro para o usuário.
  //   }
  // }


   editStock(stock: Stock): void {
     console.log(`Edit Stock with ID: ${stock.id}`);
   }


  //  deleteStock(id: number) {
  //   this.stockService.deleteStock(id).subscribe();
  //   alert("stock desvinculado");

  //   this.stock = [];  
  //   this.stockService.getAllStock().subscribe((data : Stock[])  => {
  //     this.stock = data;

  // }, (error: any) => {
  //     console.error('Error fetching all accounts:', error);
  // });
  // }
}