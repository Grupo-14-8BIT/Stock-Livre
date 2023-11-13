import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { componenteStock } from './componenteStock';
import { FormControl, FormGroup } from '@angular/forms';
import { Sku } from '../../sku/sku';
import { SkuService } from '../../sku/sku.service';

@Component({
  selector: 'app-stock-show',
  templateUrl: './stock-show.component.html',
  styleUrls: ['./stock-show.component.scss']
})
export class StockShowComponent implements OnInit {

  component : componenteStock [] = [];
  constructor(private stockService: StockService, private skuService: SkuService) { }

   @Input() id : any;

   SkuLista : Sku[] = [];

   Component = new FormGroup({
    ComponentSku: new FormControl (),
     ComponentQuantidade: new FormControl(),
  });



  ngOnInit(): void {

    this.skuService.getAll().subscribe((data:any) => {
      this.SkuLista = data
      console.log(data)

    })

      this.stockService.showStock(this.id).subscribe((data : componenteStock[])  => {
        this.component = data;
        console.log(this.component);
    }, (error: any) => {
        console.error('Error fetching all accounts:', error);
    }); 
  } 
 
  AddComponent() {
      const ComponentBody = {
    skuSimples:this.Component.value.ComponentSku,
    quantidade_real:this.Component.value.ComponentQuantidade,
    estoque:this.id
    
  }

  console.log(ComponentBody);

  this.stockService.createStockContent(ComponentBody).subscribe((data : any) => {
    console.log(data)
    window.location.reload();
  })


  }


  }

  
