import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';
import { AppComponent } from 'src/app/app.component';
import eventService from 'src/app/event.service';

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

    token! : string;

    ngOnInit(): void {

        this.accountService.getAllAccounts().subscribe((data : Account[])  => {
            this.accounts = data;
        }, (error: any) => {
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
