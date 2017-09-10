import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromLocalStorageSync from './local-storage-sync.reducer';

export interface State {
  counter: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer
};

export const metaReducers: MetaReducer<any, any>[] = [
  fromLocalStorageSync.reducer
];
