import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class AddskuComponent {

  inputValue1: string = ''; // Initialize with empty string
  inputValue2: string = '';
  inputValue3: string = '';

  @Input() sku: Sku = new Sku();
  @Output() retorno = new EventEmitter<Sku>();



  constructor(private skuService: SkuService) { }

  EditSku(): void {
    this.skuService.update(this.sku.id, this.sku).subscribe({
      next: sku => {
        this.retorno.emit(sku);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
  
  clearInputs() {
    this.inputValue1 = '';
    this.inputValue2 = '';
    this.inputValue3 = ''; // Clear the first input
    // Add more lines to clear additional inputs as needed
  }
}

