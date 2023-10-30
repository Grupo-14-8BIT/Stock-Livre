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

  visible:boolean = false;

  constructor(private skuService : SkuService){}

    ngOnInit() {
      this.fetch();
    }

    public fetch(): void{
      this.skuService.fetch().subscribe(
        (response: Sku[])=>{
          this.sku = response;
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      );
    }

  

  onclick(){
    this.visible = !this.visible;
  }



}
