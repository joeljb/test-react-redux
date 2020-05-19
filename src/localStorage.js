import { fromJS } from 'immutable';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return fromJS(JSON.parse(serializedData));
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.toJS());
    localStorage.setItem('state', serializedState);
  } catch (error) {
    return error;
  }
};
