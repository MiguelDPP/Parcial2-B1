import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisionAndVisionPage } from './mision-and-vision.page';

describe('MisionAndVisionPage', () => {
  let component: MisionAndVisionPage;
  let fixture: ComponentFixture<MisionAndVisionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisionAndVisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
