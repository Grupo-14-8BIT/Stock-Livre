import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEditarComponent } from './stock-editar.component';

describe('StockEditarComponent', () => {
  let component: StockEditarComponent;
  let fixture: ComponentFixture<StockEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockEditarComponent]
    });
    fixture = TestBed.createComponent(StockEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
