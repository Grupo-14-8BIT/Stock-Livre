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

  @Input() skuAntigo!: String;

  @Input() sku: Sku = new Sku();
  @Output() retorno = new EventEmitter<Sku>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  constructor(private skuService: SkuService) { }

  EditSku(): void {
    
    this.skuService.update(this.sku).subscribe({
      next: sku => {
        this.retorno.emit(sku);
      },
      error: () => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(Error);
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
