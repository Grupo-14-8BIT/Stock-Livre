// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { SkuComponent } from './sku.component';
// import { SkuService } from 'src/app/components/sku/sku.service';
// import { Sku } from './sku';
// import { FormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { AddskuComponent } from './addSku/addsku.component';

// describe('SkuComponent', () => {
//   let component: SkuComponent;
//   let fixture: ComponentFixture<SkuComponent>;
//   let skuService: jasmine.SpyObj<SkuService>;

//   beforeEach(waitForAsync(() => {
//     const skuServiceSpy = jasmine.createSpyObj('SkuService', ['getAll', 'fetch', 'update']);

//     TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [SkuComponent,AddskuComponent],
//       providers: [{ provide: SkuService, useValue: skuServiceSpy }]
//     }).compileComponents();

//     fixture = TestBed.createComponent(SkuComponent);
//     component = fixture.componentInstance;
//     skuService = TestBed.inject(SkuService) as jasmine.SpyObj<SkuService>;
//     fixture.detectChanges();
//   }));

//   // it('should call update method when Edit Sku button is clicked', () => {
//   //   spyOn(component, 'update'); // Spy on the update method

//   //   // Trigger click on the Edit Sku button
//   //   const editButton = fixture.debugElement.query(By.css('.btn-secondary'));
//   //   editButton.triggerEventHandler('click', null);

//   //   // Ensure that the update method was called
//   //   expect(component.update).toHaveBeenCalled();
//   // });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should call fetch and getall on ngOnInit', () => {
//   //   // Arrange
//   //   const mockSkuList: Sku = {
//   //     id: 1, nome: 'MockSku', 
//   //     sku: 'MockSku123', 
//   //     descricao: 'Mock Description',
//   //     foto: 'undefined',
//   //     Authenticaion: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTNAZ21haWwuY29tIiwiaWF0IjoxNzAxNjY2MTU5LCJleHAiOjE3MDE3NTI1NTl9.pTXtmuw5xpAcsEeE5Ocu5G7iM7VPqoKF82VekUU6vxk'
//   //   };

//   //   // Mock the service methods
//   //   skuService.fetch.and.returnValue(of());
//   //   skuService.getAll.and.returnValue(of(mockSkuList));

//   //   // Act
//   //   component.ngOnInit();

//   //   // Assert
//   //   expect(skuService.fetch).toHaveBeenCalled();
//   //   expect(skuService.getAll).toHaveBeenCalled();
//   //   expect(component.listaSku).toEqual([mockSkuList]);

//   //   // Add more expectations as needed
//   // });

//   // it('should update properties on update method', () => {
//   //   // Arrange
//   //   const mockSku: Sku = {
//   //     id: 1, nome: 'MockSku', 
//   //     sku: 'MockSku123', 
//   //     descricao: 'Mock Description',
//   //     foto: 'undefined',
//   //     Authenticaion: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTNAZ21haWwuY29tIiwiaWF0IjoxNzAxNjY2MTU5LCJleHAiOjE3MDE3NTI1NTl9.pTXtmuw5xpAcsEeE5Ocu5G7iM7VPqoKF82VekUU6vxk'
//   //   };

//   //   // Act
//   //   component.update(mockSku);

//   //   // Assert
//   //   expect(component.visible).toBeTrue();
//   //   expect(component.skuAntigo).toEqual(mockSku.sku);
//   //   expect(component.objetoSelecionadoParaEdicao).toEqual(mockSku);
//   //   // Add more expectations as needed
//   // });

//   // Add more tests as needed
// });
