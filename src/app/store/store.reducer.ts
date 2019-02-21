import {combineReducers, Reducer} from 'redux';

import {AppState} from '@store/interface/app-state';
import timelineReducer from '@timeline/store/reducer';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  timeline: timelineReducer
});
