import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { componenteStock } from './componenteStock';

@Component({
  selector: 'app-stock-show',
  templateUrl: './stock-show.component.html',
  styleUrls: ['./stock-show.component.scss']
})
export class StockShowComponent implements OnInit {

  component : componenteStock [] = [];
  constructor(private stockService: StockService,) { }

   @Input() id : any;

  ngOnInit(): void {
      this.stockService.showStock(this.id).subscribe((data : componenteStock[])  => {
        this.component = data;
        console.log(this.component);
    }, (error: any) => {
        console.error('Error fetching all accounts:', error);
    }); 
  } 

  }

  
