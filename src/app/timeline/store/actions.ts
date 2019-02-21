import {Injectable} from '@angular/core';
import {FluxStandardAction} from 'flux-standard-action';
import TimelineState from '@timeline/store/state';
import {dispatch} from '@angular-redux/store';
import {TimelineItem} from '@timeline/model/timeline-item';

export type TimelineAction = FluxStandardAction<Partial<TimelineState>, number>;

@Injectable()
export class TimelineActions {
  static LOAD_ENTRIES = 'TIMELINE_LOAD_ENTRIES';
  static LOAD_ENTRIES_SUCCESS = 'TIMELINE_LOAD_ENTRIES_SUCCESS';

  static ADD_ENTRY = 'TIMELINE_ADD_ENTRY';
  static UPDATE_ENTRY = 'TIMELINE_UPDATE_ENTRY';
  static REMOVE_ENTRY = 'TIMELINE_REMOVE_ENTRY';

  static UNDO = 'TIMELINE_UNDO';
  static REDO = 'TIMELINE_REDO';

  @dispatch()
  loadEntries = (): TimelineAction => ({
    type: TimelineActions.LOAD_ENTRIES
  })

  @dispatch()
  addEntry = (entry: TimelineItem): TimelineAction => ({
    type: TimelineActions.ADD_ENTRY,
    payload: {
      currentItem: entry
    }
  })

  @dispatch()
  updateEntry = (entry: TimelineItem): TimelineAction => ({
    type: TimelineActions.UPDATE_ENTRY,
    meta: entry.id,
    payload: {
      currentItem: entry
    }
  })

  @dispatch()
  removeEntry = (entry: TimelineItem): TimelineAction => ({
    type: TimelineActions.REMOVE_ENTRY,
    meta: entry.id
  })

  @dispatch()
  undo = () => ({
    type: TimelineActions.UNDO
  })

  @dispatch()
  redo = () => ({
    type: TimelineActions.REDO
  })
}
