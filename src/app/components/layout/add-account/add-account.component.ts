import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent {
  account = {
    name: '',
    refresh_token: ''
  };
  @Input() carro: any;
  constructor() { }

  saveAccount() {
    if (this.account.name && this.account.refresh_token) {
      // Now you can use this.account which has properties 'name' and 'refresh_token'
      console.log(this.account);
    }
    
  }
}
