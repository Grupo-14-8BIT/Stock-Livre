import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';
import { AppComponent } from 'src/app/app.component';
import eventService from 'src/app/event.service';
import { Router } from '@angular/router';

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


    openAddAccountModal(): void {
        this.accountService.autorizaAccount().subscribe({
          next: (response: string) => {
            // Use the string response here
            // For example, you could assign it to a variable or open a modal with the URL
            this.authorizationUrl = response;
            // If you want to open the URL in a new window, you can use:
            window.open(this.authorizationUrl, '_blank');
          },
          error: (error: any) => {
            console.error('Error during account authorization:', error);
            // Handle the error here
          }
        });
      }
      

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
    }


    addOrUpdateAccount(): void {
        if (this.selectedAccountForEdit) {
            // Logic to update the existing account
            const index = this.accounts.findIndex(acc => acc.id === this.selectedAccountForEdit?.id);
            if (index !== -1) {
                this.accounts[index] = { ...this.newAccount };
            }
        } else {
            // Add new account logic
            const newId = this.accounts.length > 0 ? Math.max(...this.accounts.map(acc => acc.id ?? 0)) + 1 : 1;
            this.newAccount.id = newId;
            this.accounts.push(this.newAccount);
        }
        this.resetModal();
    }

    editAccount(id: number): void {
        this.selectedAccountForEdit = this.accounts.find(acc => acc.id === id) ?? null;
        if (this.selectedAccountForEdit) {
            this.newAccount = { ...this.selectedAccountForEdit };
        }
        this.showAddAccount = true;
    }

    deleteAccount(accountId: number): void {
        this.accounts = this.accounts.filter(account => account.id !== accountId);
    }

    resetModal() {
        this.showAddAccount = false;
        this.selectedAccountForEdit = null;
        this.newAccount = new Account(); 
    }
}
