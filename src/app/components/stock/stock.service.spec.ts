import { TestBed, inject } from '@angular/core/testing';

import { StockService } from './stock.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Stock } from './stock';

describe('StockService', () => {
  let service: StockService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StockService]  // Fornecendo o serviço como provedor
    });
    
    service = TestBed.inject(StockService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all stock', inject(
    [HttpTestingController, StockService],
    (httpMock: HttpTestingController, stockService: StockService) => {
      const mockStock: Stock[] = [
       
      ];

      service.getAllStock().subscribe((sotock: any) => {
        expect(sotock).toEqual(mockStock);
      });

      const req = httpMock.expectOne('http://localhost:8082/api/v1/admin/estoque/getall');
      expect(req.request.method).toEqual('GET');
      req.flush(mockStock);
    }
  ));
  it('should delete an stock', inject(
    [HttpTestingController, StockService],
    (httpMock: HttpTestingController, service: StockService) => {
      const stockId = 1;

      service.deleteStock(stockId).subscribe();

      const req = httpMock.expectOne(`http://localhost:8082/api/v1/admin/estoque/deletecontent?id=${stockId}`);
      expect(req.request.method).toEqual('DELETE');
    }
  ));

  afterEach(() => {
    httpTestingController.verify();
  });
});
