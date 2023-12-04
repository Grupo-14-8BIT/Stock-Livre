import { ComponentFixture, TestBed } from '@angular/core/testing';


import { SignUpService } from './sign-up.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let singUpService: SignUpService;
  let cookieService: CookieService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [FormsModule], // Add this line to import FormsModule
      providers: [
        CookieService,
        { provide: SignUpService, useValue: jasmine.createSpyObj('SingUpService', ['deleteAccount', 'getAllAccounts', 'createAccount']) }
      ],
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    singUpService = TestBed.inject(SignUpService) as jasmine.SpyObj<SignUpService>;
    cookieService = TestBed.inject(CookieService);
    fixture.detectChanges();
    cookieService.set('JWT', 'seu-token-jwt-de-teste');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});