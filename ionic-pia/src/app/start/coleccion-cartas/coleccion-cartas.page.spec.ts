import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColeccionCartasPage } from './coleccion-cartas.page';

describe('ColeccionCartasPage', () => {
  let component: ColeccionCartasPage;
  let fixture: ComponentFixture<ColeccionCartasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionCartasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
