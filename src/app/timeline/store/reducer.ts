import undoable, { distinctState, includeAction } from 'redux-undo';

import TimelineState from '@timeline/store/state';
import {TimelineActions, TimelineAction} from '@timeline/store/actions';

const timelineReducer = (state: TimelineState = new TimelineState(), action: TimelineAction): TimelineState => {
  const newState = {...state};

  switch (action.type) {
    case TimelineActions.LOAD_ENTRIES_SUCCESS:
      return {
        ...state,
        listItems: action.payload.listItems
      };
    case TimelineActions.ADD_ENTRY:
      newState.listItems = newState.listItems.slice();
      newState.listItems.push(action.payload.currentItem);
      return newState;
    case TimelineActions.UPDATE_ENTRY:
    case TimelineActions.REMOVE_ENTRY:
      const entryIndex = newState.listItems.findIndex(entry => entry.id === action.meta);
      if (entryIndex > -1) {
        newState.listItems = newState.listItems.slice();
        // payload for remove_entry should be empty;
        if (action.type === TimelineActions.UPDATE_ENTRY) {
          newState.listItems.splice(entryIndex, 1, action.payload.currentItem);
        } else {
          newState.listItems.splice(entryIndex, 1);
        }
      }
      return newState;
    default:
      return state;
  }
};

const undoableTimeline = undoable(timelineReducer, {
  undoType: TimelineActions.UNDO,
  redoType: TimelineActions.REDO,
  filter: distinctState()
});

export default undoableTimeline;
