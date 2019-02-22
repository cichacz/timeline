import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemComponent } from './timeline-item.component';
import {TimelineItem} from '@timeline/model/timeline-item';
import {TimelineModule} from '@timeline/timeline.module';
import {StoreModule} from '@store/store.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {MatButton} from '@angular/material';

describe('TimelineItemComponent', () => {
  let component: TimelineItemComponent;
  let fixture: ComponentFixture<TimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TimelineModule,
        StoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemComponent);
    component = fixture.componentInstance;
    component.timelineItem = new TimelineItem();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have item', () => {
    expect(component.item).not.toBeNull();
  });

  it('should be in edit mode', () => {
    expect(component.editMode).toBeTruthy();
  });

  it('should exit edit mode upon saving', () => {
    component.saveItem();
    expect(component.editMode).not.toBeTruthy();
  });

  it('should have save and cancel buttons in edit mode', () => {
    const debugElement = fixture.debugElement;
    const buttons = debugElement.queryAll(By.directive(MatButton));
    expect(buttons.reduce((success, button) => {
      return success && (
        button.nativeElement.textContent === 'Save'
        || button.nativeElement.textContent === 'Cancel'
      );
    }, true)).toBeTruthy();
  });
});
