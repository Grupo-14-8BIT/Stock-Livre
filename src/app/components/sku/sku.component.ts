import { Component, EventEmitter, Input, Output, inject,OnInit } from '@angular/core';
import { Sku } from 'src/app/components/sku/sku'
import { SkuService } from 'src/app/components/sku/sku.service'
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
  ngOnInit(): void {
    this.fetch();
    this.getall();
    // Call the fetch function when the page is opened
  }

     getall(){
      this.skuService.getAll().subscribe({
        next: sku => { // QUANDO DÁ CERTO
          this.listaSku = sku; // NOTE: ( fetch ) must be for the authentication so i can access the sku in the mercadolivre.
        },
        error: (error: HttpErrorResponse) => {
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
          // Handle errors, e.g., display an alert
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
