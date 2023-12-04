// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { StockEditarComponent } from './stock-editar.component';
// import { StockService } from '../stock.service';
// import { AccountService } from '../../account/account.service';
// import { of } from 'rxjs';

// describe('StockEditarComponent', () => {
//   let component: StockEditarComponent;
//   let fixture: ComponentFixture<StockEditarComponent>;
//   let mockStockService: jasmine.SpyObj<StockService>;
//   let mockAccountService: jasmine.SpyObj<AccountService>;

//   beforeEach(waitForAsync(() => {
//     mockStockService = jasmine.createSpyObj('StockService', ['updateStock']);
//     mockAccountService = jasmine.createSpyObj('AccountService', ['getAllAccounts']);

//     TestBed.configureTestingModule({
//       declarations: [StockEditarComponent],
//       imports: [ReactiveFormsModule, FormsModule],
//       providers: [
//         { provide: StockService, useValue: mockStockService },
//         { provide: AccountService, useValue: mockAccountService }
//       ],
//     }).compileComponents();
//     fixture = TestBed.createComponent(StockEditarComponent);
//     component = fixture.componentInstance;
//     component.stock = {
//       id: 1, 
//       nome: 'Test Stock', 
//       contaid: 1, 
//       access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTNAZ21haWwuY29tIiwiaWF0IjoxNzAxNjY2MTU5LCJleHAiOjE3MDE3NTI1NTl9.pTXtmuw5xpAcsEeE5Ocu5G7iM7VPqoKF82VekUU6vxk', 
//       refresh_token: 'refresh', 
//       expires: new Date(), 
//       usuario: {},
//       conta: {
//         "id": 1,
//         nome: 'null',
//         contaid: 1496386128,
//         code: 'TG-656d5e85222e660001cf0b96-1496386128',
//         access_token: 'APP_USR-2358645404637526-120401-fdb908b3fbfa0cf14475e4e0fe6efa9e-1496386128',
//         refresh_token: 'TG-656d5e87987cc60001c2f7c1-1496386128',
//         expires: new Date('2023-12-04'),
//         usuario: undefined
//       }, stockContent: {}, show: true
//     };
//     fixture.detectChanges();
//   }));



//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call updateStock method when submitForm is called', () => {
//     spyOn(component, 'closeModal');

//     // Set up form values
//     component.stockForm.setValue({
//       stockNome: 'Updated Stock',
//       stockConta: 'Updated Account'
//     });

//     // Set up service responses
//     mockStockService.updateStock.and.stub();

//     // Call the method to be tested
//     component.submitForm();

//     // Check if updateStock method was called with the correct arguments
//     expect(mockStockService.updateStock).toHaveBeenCalledWith(1, {
//       nome: 'Updated Stock',
//       conta: 'Updated Account'
//     });

//     // Check if closeModal method was called
//     expect(component.closeModal).toHaveBeenCalled();
//   });

//   it('should reset stockForm and closeModal when submitForm is called without stock ID', () => {
//     spyOn(component, 'closeModal');

//     // Set up form values
//     component.stockForm.setValue({
//       stockNome: 'Updated Stock',
//       stockConta: 'Updated Account'
//     });

//     // Set stock ID to null
//     component.stock.id = 1;

//     // Call the method to be tested
//     component.submitForm();

//     // Check if stockForm was reset
//     expect(component.stockForm.value).toEqual({
//       stockNome: 'stock',
//       stockConta: null
//     });

//     // Check if closeModal method was called
//     expect(component.closeModal).toHaveBeenCalled();
//   });

//   it('should emit close event when closeModal is called', () => {
//     spyOn(component.close, 'emit');

//     // Call the method to be tested
//     component.closeModal();

//     // Check if close event was emitted
//     expect(component.close.emit).toHaveBeenCalled();
//   });

//   // Add more tests for other scenarios...

// });
