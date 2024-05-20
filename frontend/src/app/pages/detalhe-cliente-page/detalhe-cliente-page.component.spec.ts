import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheClientePageComponent } from './detalhe-cliente-page.component';

describe('DetalheClientePageComponent', () => {
  let component: DetalheClientePageComponent;
  let fixture: ComponentFixture<DetalheClientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheClientePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
