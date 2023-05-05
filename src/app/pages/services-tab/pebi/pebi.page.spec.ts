import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PebiPage } from './pebi.page';

describe('PebiPage', () => {
  let component: PebiPage;
  let fixture: ComponentFixture<PebiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PebiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
