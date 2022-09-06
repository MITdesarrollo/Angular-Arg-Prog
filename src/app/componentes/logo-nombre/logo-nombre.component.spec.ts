import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNombreComponent } from './logo-nombre.component';

describe('LogoNombreComponent', () => {
  let component: LogoNombreComponent;
  let fixture: ComponentFixture<LogoNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
