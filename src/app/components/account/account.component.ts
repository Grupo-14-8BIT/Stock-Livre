import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account: any;
  accounts: Account[] = [
    {
        id: 1,
        nome: 'Michael Holz',
        contaid: 12345,
        code: 'someCode',
        access_token: 'someAccessToken',
        refresh_token: 'someRefreshToken',
        expires: new Date('04/10/2013'),
        usuario: {}
    }
  ];
  carroSelecionadoParaEdicao: any;
  constructor(private accountService: AccountService) { }
  showAddAccount: boolean = false;
  ngOnInit(): void {
      this.loadAccount();
  }

  loadAccount(): void {
      this.accountService.getAccountById(1).subscribe(data => {
          this.account = data;
      });
  }
  addOuEditarCarro(event: any) {
    // Handle the event here, implement the method logic.
}

  editAccount(accountId: number) {
      console.log(`Edit Account with ID: ${accountId}`);
  }

  deleteAccount(accountId: number) {
      console.log(`Delete Account with ID: ${accountId}`);
  }
}
