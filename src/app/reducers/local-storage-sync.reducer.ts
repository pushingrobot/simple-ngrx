import { Action, ActionReducer} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
export function reducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({rehydrate: true, keys: ['counter']})(reducer);
}
