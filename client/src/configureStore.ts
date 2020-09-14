import { Store, createStore, applyMiddleware, compose } from "redux";

// import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";

import { ApplicationState, createRootReducer } from "./store";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(),
    initialState,
    compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
  );
  return store;
}