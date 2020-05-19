import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import reducers from './libros/reducers';

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;