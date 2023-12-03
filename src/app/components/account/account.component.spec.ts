import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { of, throwError } from 'rxjs';
import { Account } from './account';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let accountService: AccountService;
  let cookieService: CookieService;
  let modalService: NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule], // Adicione o módulo aqui
      declarations: [AccountComponent],
      providers: [
        CookieService,
        { provide: AccountService, useValue: jasmine.createSpyObj('AccountService', ['deleteAccount', 'getAllAccounts', 'createAccount']) }
      ],
    });

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    accountService = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>;
    cookieService = TestBed.inject(CookieService);

    // Simula a presença do token nos cookies
    cookieService.set('JWT', 'seu-token-jwt-de-teste');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch accounts on ngOnInit', () => {
    // Ajuste os tipos e adicione todos os campos necessários
    const mockAccounts: Account[] = [
      { id: 1, nome: 'Conta 1', contaid: 1, code: 'teste', access_token: 'token', refresh_token: 'refresh', expires: new Date(), usuario: {} }
    ];

    spyOn(accountService, 'getAllAccounts').and.returnValue(of(mockAccounts));

    component.ngOnInit();

    expect(accountService.getAllAccounts).toHaveBeenCalled();
    // Use jasmine.objectContaining para verificar se o objeto contém os campos específicos
    expect(component.accounts).toEqual(jasmine.arrayContaining([jasmine.objectContaining(mockAccounts[0])]));
  });

  it('should handle error while fetching accounts on ngOnInit', () => {
    spyOn(accountService, 'getAllAccounts').and.returnValue(throwError('Error fetching accounts'));

    spyOn(console, 'error'); // Mock console.error to avoid actual log in testing

    component.ngOnInit();

    expect(accountService.getAllAccounts).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error fetching all accounts:', 'Error fetching accounts');
  });

  it('should create account on ngOnInit', () => {
    const mockRedirect = '/add-account';

    spyOn(accountService, 'createAccount').and.returnValue(of({ redirect: mockRedirect }));

    component.ngOnInit();

    expect(accountService.createAccount).toHaveBeenCalled();
    expect(component.redirect).toEqual(mockRedirect);
  });

  it('should handle error while creating account on ngOnInit', () => {
    spyOn(accountService, 'createAccount').and.returnValue(throwError('Error creating account'));

    spyOn(console, 'error'); // Mock console.error to avoid actual log in testing

    component.ngOnInit();

    expect(accountService.createAccount).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error creating account:', 'Error creating account');
  });

  // it('should delete account', () => {
  //   const accountId = 1;
  //   const mockDeletedAccounts: Account[] = [];
    
  //   spyOn(accountService, 'deleteAccount').and.returnValue(of(null)); // Use of(null) para simular um Observable<ArrayBuffer>
    
  //   component.deleteAccount(accountId);
    
  //   expect(accountService.deleteAccount).toHaveBeenCalledWith(accountId);
  //   expect(component.accounts).toEqual(mockDeletedAccounts);
  // });
});
