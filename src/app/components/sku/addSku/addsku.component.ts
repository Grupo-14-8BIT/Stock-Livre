import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sku } from 'src/app/components/sku/sku'
import { SkuService } from 'src/app/components/sku/sku.service'
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-addsku',
  templateUrl: './addsku.component.html',
  styleUrls: ['./addsku.component.scss']
})
@Injectable()
export class AddskuComponent implements OnInit{

  inputValue1: string = ''; // Initialize with empty string
  inputValue2: string = '';
  inputValue3: string = '';

  @Input() skuAntigo!: String;
  @Input() sku: Sku = new Sku();
  @Output() retorno = new EventEmitter<Sku>();



  constructor(private skuService: SkuService) { 

  }
  ngOnInit(): void {
   

  }

  EditSku(sku:Sku) {
    console.log(this.skuAntigo)
    this.skuService.update(this.sku , this.skuAntigo).subscribe({
      next: () => {
        console.log("edit is executed")
        this.retorno.emit(sku);
      },
      error: () => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(Error);
      }
    });
   
  }
  
  clearInputs() {
    this.sku.descricao = '';
    this.sku.nome = '';
    this.sku.sku = ''; // Clear the first input
    // Add more lines to clear additional inputs as needed
  }

  close(){
    this.retorno.emit(this.sku);
  }
}