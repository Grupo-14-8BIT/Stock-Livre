import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddskuComponent } from './addsku.component';
import { SkuService } from 'src/app/components/sku/sku.service';
import { Observable, of } from 'rxjs';
import { Sku } from 'src/app/components/sku/sku';

describe('AddskuComponent', () => {
  let component: AddskuComponent;
  let fixture: ComponentFixture<AddskuComponent>;
  let skuService: jasmine.SpyObj<SkuService>;

  beforeEach(() => {
    const skuServiceSpy = jasmine.createSpyObj('SkuService', ['update']);

    TestBed.configureTestingModule({
      declarations: [AddskuComponent],
      imports: [FormsModule],
      providers: [{ provide: SkuService, useValue: skuServiceSpy }]
    });

    fixture = TestBed.createComponent(AddskuComponent);
    component = fixture.componentInstance;
    skuService = TestBed.inject(SkuService) as jasmine.SpyObj<SkuService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call EditSku method on form submission', () => {
    spyOn(component, 'EditSku'); // Spy on the EditSku method

    // Set values for your inputs
    component.sku = {
      id: 1,
      nome: 'MockSku', 
      sku: 'MockSku123', 
      descricao: 'Mock Description',
      foto: 'undefined',
      Authenticaion: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTNAZ21haWwuY29tIiwiaWF0IjoxNzAxNjY2MTU5LCJleHAiOjE3MDE3NTI1NTl9.pTXtmuw5xpAcsEeE5Ocu5G7iM7VPqoKF82VekUU6vxk'
    };

    // Trigger form submission
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Ensure that the EditSku method was called
    expect(component.EditSku).toHaveBeenCalled();
  });

  it('should call update method on EditSku', () => {
    // Arrange
    const mockSku: Sku = {
      id: 1,
      nome: 'MockSku', 
      sku: 'MockSku123', 
      descricao: 'Mock Description',
      foto: 'undefined',
      Authenticaion: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTNAZ21haWwuY29tIiwiaWF0IjoxNzAxNjY2MTU5LCJleHAiOjE3MDE3NTI1NTl9.pTXtmuw5xpAcsEeE5Ocu5G7iM7VPqoKF82VekUU6vxk'
    };
    component.skuAntigo = 'OldSku';

    // Mock the update method
    skuService.update.and.returnValue(of(mockSku));

    // Act
    component.EditSku(mockSku);

    // Assert
    expect(skuService.update).toHaveBeenCalledWith(component.sku, component.skuAntigo);
    // Add more expectations as needed
  });

  it('should emit retorno event on EditSku success', () => {
    // Arrange
    const mockSku: Sku = {
      id: 1, nome: 'MockSku', 
      sku: 'MockSku123', 
      descricao: 'Mock Description',
      foto: 'undefined',
      Authenticaion: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTNAZ21haWwuY29tIiwiaWF0IjoxNzAxNjY2MTU5LCJleHAiOjE3MDE3NTI1NTl9.pTXtmuw5xpAcsEeE5Ocu5G7iM7VPqoKF82VekUU6vxk'
    };
    component.skuAntigo = 'OldSku';

    // Mock the update method
    skuService.update.and.returnValue(of(mockSku));

    // Spy on the emit method
    const emitSpy = spyOn(component.retorno, 'emit');

    // Act
    component.EditSku(mockSku);

    // Assert
    expect(emitSpy).toHaveBeenCalledWith(mockSku);
    // Add more expectations as needed
  });

  // Add more tests as needed
});
