import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
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

<<<<<<< HEAD
  visible:boolean = false;  
=======
  visible:boolean = false;
  
>>>>>>> 580eeddbf6fa7effecdb575c9c77b1f5c53cd88f

  constructor(private skuService : SkuService){}
  ngOnInit(): void {
    this.fetch();
    this.getall();
    // Call the fetch function when the page is opened
  }

     getall(){
      this.skuService.getAll().subscribe((sku : Sku[] )  => {
        this.listaSku = sku;
    }, (error: any) => {
        console.error('Error fetching all accounts:', error);
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

   update(sku: Sku) {

     this.visible = !this.visible;

     this.objetoSelecionadoParaEdicao = Object.assign({}, sku); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
   }

  tratarEvent(evento: any) {
    this.visible = !this.visible;

  }
}

