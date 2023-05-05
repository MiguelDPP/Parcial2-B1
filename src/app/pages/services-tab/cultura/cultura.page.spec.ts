import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CulturaPage } from './cultura.page';

describe('CulturaPage', () => {
  let component: CulturaPage;
  let fixture: ComponentFixture<CulturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
