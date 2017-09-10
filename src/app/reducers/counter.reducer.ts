import { Action, ActionReducerMap } from '@ngrx/store';

export type State = number;

export const initialState = 0;

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function reducer(
  state: number = initialState,
  action: Action
): State {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
