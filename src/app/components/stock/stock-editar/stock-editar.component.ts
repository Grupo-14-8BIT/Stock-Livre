import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Stock } from '../stock';
import { AccountService } from '../../account/account.service';
import { Account } from '../../account/account';
import { FormControl, FormGroup } from '@angular/forms';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-editar',
  templateUrl: './stock-editar.component.html',
  styleUrls: ['./stock-editar.component.scss']
})
export class StockEditarComponent implements OnInit{
  accounts!: Account[];

  // accountService = inject(AccountService);
  // stockService = inject(AccountService);
  
    @Input() stock!: Stock;
    @Output() close = new EventEmitter<void>();
  
  constructor(private accountService: AccountService, private stockService: StockService) { }


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
    console.log("mCAMINHO ERRRADO");
  
    const stockDTO = {
      nome: this.stockForm.value.stockNome,
      conta: this.stockForm.value.stockConta,
    };
  
    if (this.stock && this.stock.id) {
      this.stockService.updateStock(this.stock.id, stockDTO).subscribe(
        (response) => {
          console.log("Stock updated", response);
        },
        (error) => {
          console.error("Error updating stock", error);
        }
      );
    } else {
      console.error("Stock ID is not available");
    }
  
    this.stockForm.reset();
    this.closeModal();
  }

  byId(item1: any, item2: any) {
		if (item1 != null && item2 != null)
			return item1.id === item2.id;
		else
			return item1 === item2;
	}
  
}
