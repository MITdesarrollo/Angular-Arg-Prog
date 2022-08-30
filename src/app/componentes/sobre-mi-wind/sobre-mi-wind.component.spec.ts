import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiWindComponent } from './sobre-mi-wind.component';

describe('SobreMiWindComponent', () => {
  let component: SobreMiWindComponent;
  let fixture: ComponentFixture<SobreMiWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiWindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
