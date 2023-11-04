import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    accounts: Account[] = [];

    carroSelecionadoParaEdicao: any;
    constructor(private accountService: AccountService) { }
    showAddAccount: boolean = false;

    ngOnInit(): void {
        this.loadAllAccounts();
    }

    loadAllAccounts(): void {
        
        this.accountService.getAllAccounts().subscribe(data => {
            this.accounts = data as Account[];
        }, error => {
            console.error('Error fetching all accounts:', error);
        });
        console.log(this.accounts);
        console.log("I will be back");
    }

    addOuEditarCarro(event: any) {
        console.log("teste");
    }

    editAccount(accountId: number) {
        console.log(`Edit Account with ID: ${accountId}`);
    }

    deleteAccount(accountId: number) {
        console.log(`Delete Account with ID: ${accountId}`);
    }
}
