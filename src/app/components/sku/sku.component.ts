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
  sku: Sku[]=[];
  
  objetoSelecionadoParaEdicao: Sku = new Sku();
  indiceSelecionadoParaEdicao!: number;

  visible:boolean = false;
  

  constructor(private skuService : SkuService){}

    ngOnInit() {
      this.fetch();
    }

     fetch(){
      this.skuService.fetch().subscribe({
        next: sku => { // QUANDO DÁ CERTO
          this.sku = sku;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      });
    }

  onclick(){
    this.visible = !this.visible;
  }

  update(id:number,sku:Sku) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, sku); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = id;
  }

}
