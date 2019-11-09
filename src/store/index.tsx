import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const composeStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof rootReducer>;
