import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBackComponent } from './video-back.component';

describe('VideoBackComponent', () => {
  let component: VideoBackComponent;
  let fixture: ComponentFixture<VideoBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
