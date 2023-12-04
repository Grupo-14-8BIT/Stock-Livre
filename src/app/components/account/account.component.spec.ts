// import { ComponentFixture, TestBed, } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { CookieService } from 'ngx-cookie-service';
// import { AccountComponent } from './account.component';
// import { AccountService } from './account.service';
// import { of, throwError } from 'rxjs';
// import { Account } from './account';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// describe('AccountComponent', () => {
//   let component: AccountComponent;
//   let fixture: ComponentFixture<AccountComponent>;
//   let accountService: AccountService;
//   let cookieService: CookieService;
//   let modalService: NgbModal;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule, HttpClientTestingModule], // Adicione o módulo aqui
//       declarations: [AccountComponent],
//       providers: [
//         CookieService,
//         { provide: AccountService, useValue: jasmine.createSpyObj('AccountService', ['deleteAccount', 'getAllAccounts', 'createAccount']) }
//       ],
//     });

//     fixture = TestBed.createComponent(AccountComponent);
//     component = fixture.componentInstance;
//     accountService = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>;
//     cookieService = TestBed.inject(CookieService);

//     // Simula a presença do token nos cookies
//     cookieService.set('JWT', 'seu-token-jwt-de-teste');
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// });

