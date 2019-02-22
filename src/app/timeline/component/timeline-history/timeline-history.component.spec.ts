import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineHistoryComponent } from './timeline-history.component';
import {TimelineModule} from '@timeline/timeline.module';
import {StoreModule} from '@store/store.module';
import {NgReduxTestingModule} from '@angular-redux/store/testing';
import {zip} from 'rxjs';
import {TimelineViewComponent} from '@timeline/component/timeline-view/timeline-view.component';
import {first} from 'rxjs/operators';

describe('TimelineHistoryComponent', () => {
  let component: TimelineHistoryComponent;
  let fixture: ComponentFixture<TimelineHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TimelineModule,
        NgReduxTestingModule,
        StoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty history upon creation', (done: DoneFn) => {
    zip(component.past$, component.future$).subscribe(([pastActions, futureActions]) => {
      expect(pastActions.length).toEqual(0);
      expect(futureActions.length).toEqual(0);
      done();
    });
  });

  it('should have undo history after taking an action', (done: DoneFn) => {
    const timelineViewFixture = TestBed.createComponent(TimelineViewComponent);
    timelineViewFixture.componentInstance.addEntry();

    component.past$.pipe(first(pastActions => !!pastActions.length)).subscribe(pastActions => {
      expect(pastActions.length).toEqual(1);
      done();
    });
  });
});
