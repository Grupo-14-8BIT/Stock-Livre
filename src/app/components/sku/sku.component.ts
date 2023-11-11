import { Component, EventEmitter, Input, Output, inject,OnInit } from '@angular/core';
import { Sku } from 'src/app/components/sku/sku'
import { SkuService } from 'src/app/components/sku/sku.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Data } from '@angular/router';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})

export class SkuComponent implements OnInit {
  listaSku: Sku[]=[];
  
  objetoSelecionadoParaEdicao: Sku = new Sku();
  indiceSelecionadoParaEdicao!: number;

  visible:boolean = false;
  data: any;
  

  constructor(private skuService : SkuService){}
  ngOnInit(): void {
    this.fetch();
    this.getall();
    // Call the fetch function when the page is opened
  }

     getall(){
      this.skuService.getAll().subscribe({
        next: (sku) => {
          // Assign the received 'sku' to 'this.listaSku'
          this.data = sku;
          console.log("getAll IS EXECUTED");
        },
        error: (error: HttpErrorResponse) => {
          console.log("getAll IS NOT EXECUTED");
          alert(error.message);
        }
      });
    }

    fetch() {
      this.skuService.fetch().subscribe({
        next: () => {
          console.log("FETCH IS EXECUTED");
        },
        error: (error) => {
          console.log("FETCH IS NOT EXECUTED");
          console.error('Fetch error:', error);
        },
      });
    }
  

  update(sku:Sku) {

    this.visible = !this.visible;

    this.objetoSelecionadoParaEdicao = Object.assign({}, sku); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
  }

  tratarEvent(evento: any){
    this.visible = !this.visible;

  }
}
