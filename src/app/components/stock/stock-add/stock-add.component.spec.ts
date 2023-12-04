import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StockAddComponent } from './stock-add.component';
import { StockService } from '../stock.service';
import { AccountService } from '../../account/account.service';
import { of } from 'rxjs';
import { Account } from '../../account/account';
import { Stock } from '../stock';

describe('StockAddComponent', () => {
  let component: StockAddComponent;
  let fixture: ComponentFixture<StockAddComponent>;
  let mockStockService: jasmine.SpyObj<StockService>;
  let mockAccountService: jasmine.SpyObj<AccountService>;

  beforeEach(() => {
    mockStockService = jasmine.createSpyObj('StockService', ['addNewStock']);
    mockAccountService = jasmine.createSpyObj('AccountService', ['getAllAccounts']);

    TestBed.configureTestingModule({
      declarations: [StockAddComponent],
      providers: [
        { provide: StockService, useValue: mockStockService },
        { provide: AccountService, useValue: mockAccountService }
      ],
      imports: [ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(StockAddComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch accounts on ngOnInit', () => {
    // Arrange
    const mockAccounts: Account[] = [
      // Add more mock accounts as needed
    ];
    mockAccountService.getAllAccounts.and.returnValue(of(mockAccounts));

    // Act
    component.ngOnInit();

    // Assert
    expect(component.accounts).toEqual(mockAccounts);
  });

  // it('should call stockService.addNewStock and reset form on submitForm', () => {
  //   // Arrange
  //   const stockFormValue = {
  //     stockNome: 'TestStock',
  //     stockConta: 'TestAccount'
  //   };

  //   component.stockForm.setValue(stockFormValue);

  //   // Act
  //   component.submitForm();

  //   // Assert
  //   const expectedStock: Stock = {
  //     id: 1, // or set as needed
  //     nome: stockFormValue.stockNome,
  //     contaid: 1, // or set as needed
  //     access_token: '',
  //     refresh_token: '',
  //     expires: new Date(),
  //     usuario: 'undefined',  
  //     conta: {
  //       id: 1,
  //       nome: 'TestAccount',
  //       contaid: 1,
  //       code: 'TestCode',
  //       access_token: 'https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=2358645404637526&redirect_uri=https://template.tr1.com.br/redirect&state=1',
  //       refresh_token: 'null',
  //       expires:  new Date(),
  //       usuario: 'undefined'
  //     },
  //     stockContent: undefined,
  //     show: false
  //   };

  //   expect(mockStockService.addNewStock).toHaveBeenCalledWith(expectedStock);

  //   expect(component.stockForm.value).toEqual({ stockNome: '', stockConta: '' });
  // });

  // Add more tests as needed
});
