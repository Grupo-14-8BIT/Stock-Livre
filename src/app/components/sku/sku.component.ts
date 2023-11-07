import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { Sku } from 'src/app/components/sku/sku'
import { SkuService } from 'src/app/components/sku/sku.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})

export class SkuComponent implements OnInit {
  listaSku: Sku[] = [];

  skuTeste: Sku = new Sku();

  objetoSelecionadoParaEdicao: Sku = new Sku();
  indiceSelecionadoParaEdicao!: number;

  visible: boolean = false;


  constructor(private skuService: SkuService) { }

  ngOnInit(): void {
    this.fetch();
    // this.getall();
    // Call the fetch function when the page is opened
  }
  fetch() {

    this.skuService.fetch().subscribe();
    this.skuService.getAll().subscribe((data : Sku[])  => {
      this.listaSku = data;
  }, (error: any) => {
      console.error('Error fetching all accounts:', error);
  });

  }

  // getall() {
  //   this.skuService.getAll().subscribe({
  //     next: sku => { // QUANDO DÁ CERTO
  //       console.log("getAll IS EXECUTED");
  //       this.listaSku = sku; // NOTE: ( fetch ) must be for the authentication so i can access the sku in the mercadolivre.
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       console.log("getAll IS NOT EXECUTED");
  //       alert(error.message);
  //     }
  //   });
  // }

  // update(sku: Sku) {

  //   this.visible = !this.visible;

  //   this.objetoSelecionadoParaEdicao = Object.assign({}, sku); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
  // }

  tratarEvent(evento: any) {
    this.visible = !this.visible;

  }
}

