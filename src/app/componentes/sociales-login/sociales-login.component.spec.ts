import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialesLoginComponent } from './sociales-login.component';

describe('SocialesLoginComponent', () => {
  let component: SocialesLoginComponent;
  let fixture: ComponentFixture<SocialesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialesLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
