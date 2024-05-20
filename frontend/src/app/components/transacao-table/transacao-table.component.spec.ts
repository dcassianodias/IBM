import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacaoTableComponent } from './transacao-table.component';

describe('TransacaoTableComponent', () => {
  let component: TransacaoTableComponent;
  let fixture: ComponentFixture<TransacaoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransacaoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransacaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
