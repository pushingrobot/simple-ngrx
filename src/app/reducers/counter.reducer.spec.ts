import {
  initialState,
  reducer,
  INCREMENT,
  DECREMENT,
  RESET
} from './counter.reducer';

describe('reducer', () => {

  const Actions = {
    increment: {type: INCREMENT},
    decrement: {type: DECREMENT},
    reset: {type: RESET}
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(initialState);
    });
  });
  describe('increment', () => {
    it('should increase the counter by one', () => {
      const action = Actions.increment;

      let result = reducer(0, action);
      expect(result).toEqual(1);
      result = reducer(result, action);
      expect(result).toEqual(2);
    });
  });
  describe('decrement', () => {
    it('should decrease the counter by one', () => {
      const action = Actions.decrement;

      let result = reducer(1, action);
      expect(result).toEqual(0);
      result = reducer(result, action);
      expect(result).toEqual(-1);
    });
  });
  describe('reset', () => {
    it('should reset the counter to the initial value', () => {
      const action = Actions.reset;

      const changed = reducer(initialState, Actions.increment);
      const result = reducer(changed, action);
      expect(result).toEqual(initialState);
    });
  });
});
