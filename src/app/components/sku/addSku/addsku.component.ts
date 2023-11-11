import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sku } from 'src/app/components/sku/sku';
import { SkuService } from 'src/app/components/sku/sku.service';
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  private skuService: SkuService;

  constructor(skuService: SkuService) {
    this.skuService = skuService;
  }
  editSku(): void {
    
    this.skuService.update(this.sku).subscribe({
      next: sku => {
        this.retorno.emit(sku);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  closeModal() {
    this.modalRef.close();
  }

  clearInputs() {
    this.sku.descricao = '';
    this.sku.nome = '';
    this.sku.sku = ''; // Clear the first input
    // Add more lines to clear additional inputs as needed
  }

  close() {
    this.retorno.emit(this.sku);
  }
}
