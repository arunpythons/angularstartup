import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPanelComponent } from './body-panel.component';

describe('BodyPanelComponent', () => {
  let component: BodyPanelComponent;
  let fixture: ComponentFixture<BodyPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyPanelComponent]
    });
    fixture = TestBed.createComponent(BodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
