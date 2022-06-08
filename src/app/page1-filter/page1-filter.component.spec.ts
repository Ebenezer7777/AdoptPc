import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1FilterComponent } from './page1-filter.component';

describe('Page1FilterComponent', () => {
  let component: Page1FilterComponent;
  let fixture: ComponentFixture<Page1FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1FilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
