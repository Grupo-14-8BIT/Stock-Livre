// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SingUpComponent } from './sing-up.component';
// import { SingUpService } from './sing-up.service';
// import { CookieService } from 'ngx-cookie-service';
// import { FormsModule } from '@angular/forms';

// describe('SingUpComponent', () => {
//   let component: SingUpComponent;
//   let fixture: ComponentFixture<SingUpComponent>;
//   let singUpService: SingUpService;
//   let cookieService: CookieService;
  
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [SingUpComponent],
//       imports: [FormsModule], // Add this line to import FormsModule
//       providers: [
//         CookieService,
//         { provide: SingUpService, useValue: jasmine.createSpyObj('SingUpService', ['deleteAccount', 'getAllAccounts', 'createAccount']) }
//       ],
//     });
//     fixture = TestBed.createComponent(SingUpComponent);
//     component = fixture.componentInstance;
//     singUpService = TestBed.inject(SingUpService) as jasmine.SpyObj<SingUpService>;
//     cookieService = TestBed.inject(CookieService);
//     fixture.detectChanges();
//     cookieService.set('JWT', 'seu-token-jwt-de-teste');
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
