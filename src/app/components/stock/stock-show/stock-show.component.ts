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

  component: componenteStock[] = [];
  constructor(private stockService: StockService, private skuService: SkuService) { }
  selectedItemId: number = 0;
  itemSelecionado!: componenteStock;

  selectedItemForEdit(itemId: number) {
    this.selectedItemId = itemId;
  }
  @Input() id: any;

  SkuLista: Sku[] = [];

  Component = new FormGroup({
    ComponentSku: new FormControl(),
    ComponentQuantidade: new FormControl(),
  });


  carregarLista() {
    this.skuService.getAll().subscribe((data: any) => {
      this.SkuLista = data
      console.log(data)

    })

  }

  carregarEstoqueContent(){
    
    this.stockService.showStock(this.id).subscribe((data: componenteStock[]) => {
      this.component = data;
      console.log(this.component);
    }, (error: any) => {
      console.error('Error fetching all accounts:', error);
    });
  }

  ngOnInit(): void {

    this.carregarLista();
    this.carregarEstoqueContent();


  
  }

  AddComponent() {
    const ComponentBody = {
      skuSimples: this.Component.value.ComponentSku,
      quantidade_real: this.Component.value.ComponentQuantidade,
      estoque: this.id

    }

    console.log(ComponentBody);

    this.stockService.createStockContent(ComponentBody).subscribe((data: any) => {
      console.log(data)
      this.carregarLista();
    })


  }



  updateQuantidade() {

    let idSKU = this.itemSelecionado.skuSimples.id;
    this.itemSelecionado.skuSimples = this.itemSelecionado.skuSimples.sku;
    this.itemSelecionado.estoque = this.id;

    console.log(this.itemSelecionado);

    this.stockService.updateQuantidade(this.itemSelecionado.id, this.itemSelecionado).subscribe((data: any) => {
      alert('tudo ok');

      console.log(data);
      this.carregarEstoqueContent();
      //window.location.reload();
    });
  }

  carregarObjeto(item: componenteStock) {
    this.itemSelecionado = Object.assign({}, item);

    /*const updatedComponentBody = {
      skuSimples: this.Component.value.ComponentSku.value,
      estoque: this.id,
      quantidade_real: this.Component.value.ComponentQuantidade
    };
    console.log(updatedComponentBody);*/


  }


}
