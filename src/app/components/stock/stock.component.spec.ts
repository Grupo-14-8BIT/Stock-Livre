import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { StockComponent } from './stock.component';
import { StockService } from './stock.service';
import { of, throwError } from 'rxjs';
import { Stock } from './stock';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;
  let stockService: StockService;
  let cookieService: CookieService;
  let modalService: NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule], // Adicione o módulo aqui
      declarations: [StockComponent],
      providers: [
        CookieService,
        { provide: StockService, useValue: jasmine.createSpyObj('StockService', ['deleteStock', 'getAllStock', 'createStock']) }
      ],
    });

    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    stockService = TestBed.inject(StockService) as jasmine.SpyObj<StockService>;
    cookieService = TestBed.inject(CookieService);

    // Simula a presença do token nos cookies
    cookieService.set('JWT', 'seu-token-jwt-de-teste');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});