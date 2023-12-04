import { TestBed, inject } from '@angular/core/testing';

import { SkuService } from './sku.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Sku } from './sku';
import { CookieService } from 'ngx-cookie-service';

describe('SkuService', () => {
  let service: SkuService;
  let httpTestingController: HttpTestingController;
  let cookieService: CookieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CookieService],
    });

    service = TestBed.inject(SkuService);
    httpTestingController = TestBed.inject(HttpTestingController);
    cookieService = TestBed.inject(CookieService);

    // Simula a presença do token nos cookies
    cookieService.set('JWT', 'seu-token-jwt-de-teste');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all sku', inject(
    [HttpTestingController, SkuService],
    (httpMock: HttpTestingController, service: SkuService) => {
      const mockSku: Sku[] = [
        // Mock your account data here
      ];

      service.getAll().subscribe((sku: any) => {
        expect(sku).toEqual(mockSku);
      });

      const req = httpMock.expectOne('http://localhost:8082/api/v1/admin/sku/getAll');
      expect(req.request.method).toEqual('GET');
      req.flush(mockSku);
    }
  ));
});
