import {Injectable} from '@angular/core';
import {combineEpics} from 'redux-observable';
import TimelineEpics from '@timeline/store/epics';

@Injectable()
export class StoreEpics {

  constructor(
    private timeline: TimelineEpics
  ) {
  }

  createEpics() {
    return combineEpics(
      ...this.timeline.getEpics(),
    );
  }
}
