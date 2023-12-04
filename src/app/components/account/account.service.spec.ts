import { TestBed, inject } from '@angular/core/testing';
import { AccountService } from './account.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { Account } from './account';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: HttpTestingController;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CookieService],
    });

    service = TestBed.inject(AccountService);
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

  it('should get all accounts', inject(
    [HttpTestingController, AccountService],
    (httpMock: HttpTestingController, accountService: AccountService) => {
      const mockAccounts: Account[] = [
        // Mock your account data here
      ];

      accountService.getAllAccounts().subscribe((accounts: any) => {
        expect(accounts).toEqual(mockAccounts);
      });

      const req = httpMock.expectOne('http://localhost:8082/api/v1/admin/conta/getAll');
      expect(req.request.method).toEqual('GET');
      req.flush(mockAccounts);
    }
  ));


  it('should delete an account', inject(
    [HttpTestingController, AccountService],
    (httpMock: HttpTestingController, accountService: AccountService) => {
      const accountId = 1;

      accountService.deleteAccount(accountId).subscribe();

      const req = httpMock.expectOne(`http://localhost:8082/api/v1/admin/conta/Delete?conta_id=${accountId}`);
      expect(req.request.method).toEqual('DELETE');
    }
  ));

  afterEach(() => {
    httpTestingController.verify();
  });
});
