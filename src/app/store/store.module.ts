import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToolsExtension, NgReduxModule, NgRedux } from '@angular-redux/store';
import {createEpicMiddleware} from 'redux-observable';
import {AppState} from '@store/interface/app-state';
import {StoreEpics} from '@store/store.epics';
import {rootReducer} from '@store/store.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgReduxModule
  ],
  providers: [
    StoreEpics
  ]
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension,
    rootEpics: StoreEpics,
  ) {

    const epicMiddleware = createEpicMiddleware();

    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [epicMiddleware],
      devTools.isEnabled() ? [devTools.enhancer()] : [],
    );

    epicMiddleware.run(rootEpics.createEpics());
  }
}
