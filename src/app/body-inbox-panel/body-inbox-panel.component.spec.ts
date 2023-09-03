import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyInboxPanelComponent } from './body-inbox-panel.component';

describe('BodyInboxPanelComponent', () => {
  let component: BodyInboxPanelComponent;
  let fixture: ComponentFixture<BodyInboxPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyInboxPanelComponent]
    });
    fixture = TestBed.createComponent(BodyInboxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
