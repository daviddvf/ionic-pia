import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpuPlayerPage } from './cpu-player.page';

describe('CpuPlayerPage', () => {
  let component: CpuPlayerPage;
  let fixture: ComponentFixture<CpuPlayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
