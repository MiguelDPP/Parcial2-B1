import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantTabPage } from './restaurant-tab.page';

describe('RestaurantTabPage', () => {
  let component: RestaurantTabPage;
  let fixture: ComponentFixture<RestaurantTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
