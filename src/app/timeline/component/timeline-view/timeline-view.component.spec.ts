import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineViewComponent } from './timeline-view.component';
import {TimelineModule} from '@timeline/timeline.module';
import {StoreModule} from '@store/store.module';
import {NgReduxTestingModule} from '@angular-redux/store/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {pairwise} from 'rxjs/operators';

describe('TimelineViewComponent', () => {
  let component: TimelineViewComponent;
  let fixture: ComponentFixture<TimelineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TimelineModule,
        NgReduxTestingModule,
        StoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load list from store', (done: DoneFn) => {
    component.timelineItems$.subscribe(items => {
      expect(items.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });

  it('should add empty entry to store', (done: DoneFn) => {
    component.timelineItems$.pipe(pairwise()).subscribe(([oldItems, items]) => {
      expect(items.length).toBeGreaterThan(oldItems.length);
      expect(items[items.length - 1].title).not.toBeDefined();
      expect(items[items.length - 1].id).toEqual(oldItems.length + 1);
      done();
    });

    component.addEntry();
  });

  it('should have add button', () => {
    const document = fixture.debugElement.nativeElement;
    expect(document.querySelector('.add-btn__btn')).not.toBeNull();
  });
});
