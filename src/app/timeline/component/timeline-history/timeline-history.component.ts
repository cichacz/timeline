import { Component, OnInit } from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import TimelineState from '@timeline/store/state';
import {map} from 'rxjs/operators';
import {TimelineActions} from '@timeline/store/actions';

@Component({
  selector: 'app-timeline-history',
  templateUrl: './timeline-history.component.html',
  styleUrls: ['./timeline-history.component.scss']
})
export class TimelineHistoryComponent implements OnInit {
  @select(['timeline', 'past']) past$: Observable<TimelineState[]>;
  @select(['timeline', 'future']) future$: Observable<TimelineState[]>;

  constructor(
    private timelineActions: TimelineActions
  ) { }

  ngOnInit() {
  }

  canUndo() {
    return this.past$.pipe(
      map(changes => !!changes && changes.length > 0)
    );
  }

  canRedo() {
    return this.future$.pipe(
      map(changes => !!changes && changes.length > 0)
    );
  }

  undo() {
    this.timelineActions.undo();
  }

  redo() {
    this.timelineActions.redo();
  }
}
