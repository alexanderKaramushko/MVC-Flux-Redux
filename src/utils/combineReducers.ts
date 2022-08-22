// @ts-nocheck

export function combineReducers(reducers) {
  return function initReducers(state = {}, action) {
    return Object.entries(reducers).reduce((rootState, [key, reducer]) => ({
      ...rootState,
      [key]: reducer(state[key], action),
    }), state);
  };
}
