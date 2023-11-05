import { Component, EventEmitter, Input, Output, inject,OnInit } from '@angular/core';
import { Sku } from 'src/app/components/sku/sku'
import { SkuService } from 'src/app/components/sku/sku.service'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})

export class SkuComponent implements OnInit {
  listaSku: Sku[]=[];

  skuTeste: Sku = new Sku();
  
  objetoSelecionadoParaEdicao: Sku = new Sku();
  indiceSelecionadoParaEdicao!: number;

  visible:boolean = false;
  

  constructor(private skuService : SkuService){
    this.skuTeste.descricao = `Description`;
    this.skuTeste.id = 9;
    this.skuTeste.nome = `iPhone`;
    this.skuTeste.sku = `doasfjlkdfj;adlsfas`;
  }

    ngOnInit() {
      this.fetch();
    }

     fetch(){
      this.skuService.fetch().subscribe({
        next: sku => { // QUANDO DÁ CERTO
          this.listaSku = sku;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
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
