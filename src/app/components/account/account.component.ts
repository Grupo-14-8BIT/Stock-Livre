import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';
import { AppComponent } from 'src/app/app.component';
import eventService from 'src/app/event.service';
import { Router } from '@angular/router';
import { Autoriza } from './autoriza';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    accounts: Account[] = [];
    newAccount: Account = new Account();
    showAddAccount: boolean = false;
    selectedAccountForEdit: Account | null = null;
    token! : string;
    authorizationUrl: string | null = null;

    carroSelecionadoParaEdicao: any;
    constructor(private accountService: AccountService, private router: Router) { }
    redirect!: string;
      
    ngOnInit(): void {
        this.loadAllAccounts();
        console.log(this.accounts);
    }

    loadAllAccounts(): void {

        this.accountService.getAllAccounts().subscribe((data : Account[])  => {
            this.accounts = data;
        }, (error: any) => {
            console.error('Error fetching all accounts:', error);
        });

        this.accountService.createAccount().subscribe((data : any) =>
        { 

            const logouObj = JSON.parse( JSON.stringify(data));
             let dpsElimino  = logouObj.redirect;
            
            this.redirect = dpsElimino;
            console.log("LINK ADICONAR CONTA" + this.redirect);
        });
    }



 

    deleteAccount(accountId: number) {
      this.accountService.deleteAccount(accountId).subscribe();
      alert("Conta desvinculada");

      this.accounts = [];
      this.accountService.getAllAccounts().subscribe((data : Account[])  => {
        this.accounts = data;
    }, (error: any) => {
        console.error('Error fetching all accounts:', error);
    });
    }
}
