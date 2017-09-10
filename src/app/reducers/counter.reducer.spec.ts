import {
  initialState,
  counterReducer,
  INCREMENT,
  DECREMENT,
  RESET
} from './counter.reducer';

describe('CounterReducer', () => {

  const Actions = {
    increment: {type: INCREMENT},
    decrement: {type: DECREMENT},
    reset: {type: RESET}
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = counterReducer(undefined, action);
      expect(result).toEqual(initialState);
    });
  });
  describe('increment', () => {
    it('should increase the counter by one', () => {
      const action = Actions.increment;

      let result = counterReducer(0, action);
      expect(result).toEqual(1);
      result = counterReducer(result, action);
      expect(result).toEqual(2);
    });
  });
  describe('decrement', () => {
    it('should decrease the counter by one', () => {
      const action = Actions.decrement;

      let result = counterReducer(1, action);
      expect(result).toEqual(0);
      result = counterReducer(result, action);
      expect(result).toEqual(-1);
    });
  });
  describe('reset', () => {
    it('should reset the counter to the initial value', () => {
      const action = Actions.reset;

      const changed = counterReducer(initialState, Actions.increment);
      const result = counterReducer(changed, action);
      expect(result).toEqual(initialState);
    });
  });
});
