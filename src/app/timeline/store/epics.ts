import {Injectable} from '@angular/core';
import {TimelineActions, TimelineAction} from '@timeline/store/actions';
import {Epic, ofType} from 'redux-observable';
import {map, switchMapTo} from 'rxjs/operators';
import {TimelineService} from '@timeline/service/timeline.service';

@Injectable()
export class TimelineEpics {

  constructor(
    private timelineService: TimelineService
  ) {
  }

  getEpics() {
    return [
      this.loadItems,
    ];
  }

  private loadItems: Epic<TimelineAction> = (action$) => action$.pipe(
    ofType(TimelineActions.LOAD_ENTRIES),
    switchMapTo(this.timelineService.getEntries()),
    map(list => ({
      type: TimelineActions.LOAD_ENTRIES_SUCCESS,
      payload: {
        listItems: list
      }
    }))
  )
}
