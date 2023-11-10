import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import eventService from 'src/app/event.service';
import { StockService } from '../stock.service';
import { Stock } from '../stock';
import { AccountService } from '../../account/account.service';
import { Account } from '../../account/account';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.scss']
})
export class StockAddComponent {

  
  @Output () addStock = new EventEmitter<Stock>();

  stockService = inject(StockService);
  accountService = inject(AccountService);

  accounts!: Account[];


  stockForm = new FormGroup({
    stockNome: new FormControl (),
     stockConta: new FormControl(),
  });

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe((data : Account[])  => {
        this.accounts = data;
        console.log(this.accounts);
    }, (error: any) => {
        console.error('Error fetching all accounts:', error);
    });
}


  submitForm() {
    const stock_dto = {
      nome:this.stockForm.value.stockNome,
      conta:this.stockForm.value.stockConta,
    }





     this.stockService.addNewStock(stock_dto).subscribe((data : any ) =>
      {
        eventService.emit("addStock", data);
        console.log("Estoque adicionado" + data);

      })

    this.stockForm.reset();


}



}
