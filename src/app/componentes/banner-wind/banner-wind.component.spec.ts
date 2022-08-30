import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWindComponent } from './banner-wind.component';

describe('BannerWindComponent', () => {
  let component: BannerWindComponent;
  let fixture: ComponentFixture<BannerWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerWindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
