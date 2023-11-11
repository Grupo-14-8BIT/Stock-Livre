import { Account } from "../account/account";

export class Stock {
    id!: number;
    nome!: string; 
    contaid!: number;
    access_token!: string;
    refresh_token!: string;
    expires!: Date;
    usuario: any;  
    account!:Account;
    stockContent!:any;
    show!: boolean;
}
