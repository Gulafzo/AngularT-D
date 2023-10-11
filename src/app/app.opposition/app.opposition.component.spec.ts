import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOppositionComponent } from './app.opposition.component';

describe('AppOppositionComponent', () => {
  let component: AppOppositionComponent;
  let fixture: ComponentFixture<AppOppositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppOppositionComponent]
    });
    fixture = TestBed.createComponent(AppOppositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
