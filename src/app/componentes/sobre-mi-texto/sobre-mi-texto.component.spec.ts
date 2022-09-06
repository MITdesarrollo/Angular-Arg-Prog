import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiTextoComponent } from './sobre-mi-texto.component';

describe('SobreMiTextoComponent', () => {
  let component: SobreMiTextoComponent;
  let fixture: ComponentFixture<SobreMiTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
