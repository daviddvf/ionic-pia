import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaBkPage } from './carta-bk.page';

describe('CartaBkPage', () => {
  let component: CartaBkPage;
  let fixture: ComponentFixture<CartaBkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaBkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
