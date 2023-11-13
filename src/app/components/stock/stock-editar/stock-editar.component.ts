import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Stock } from '../stock';
import { AccountService } from '../../account/account.service';
import { Account } from '../../account/account';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-editar',
  templateUrl: './stock-editar.component.html',
  styleUrls: ['./stock-editar.component.scss']
})
export class StockEditarComponent implements OnInit{
  Stock: Stock | null = null;
  accounts!: Account[];

  accountService = inject(AccountService);
  stockService = inject(AccountService);
  
    @Input() stock!: Stock;
    @Output() close = new EventEmitter<void>();
  
  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe((data : Account[])  => {
      this.accounts = data;
      console.log(this.accounts);
  }, (error: any) => {
      console.error('Error fetching all accounts:', error);
  });  
  this.submitForm();
}


  stockForm = new FormGroup({
    stockNome: new FormControl ("teste"),
     stockConta: new FormControl(),
  });


  closeModal() {
    this.close.emit();
  }

  updateStock() {
    console.log("teste");
    
    this.closeModal();
  }
  
  submitForm() {
    console.log("making update");
    const stock_dto = {
      nome:this.stockForm.value.stockNome,
      conta:this.stockForm.value.stockConta,
    }
    // this.stockService.addNewStock(stock_dto).subscribe((data : any ) =>
    // {
      
    //   eventService.emit("addStock", data);
    //   console.log("Estoque adicionado" + data);

    // })
    this.stockForm.reset();
  }
}
