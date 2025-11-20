import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import sessionReducer from './session';

const rootReducer = combineReducers({
  // Add your reducers here
  session: sessionReducer,
});


const store = configureStore({
  reducer: rootReducer,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers({
    autoBatch: false,
  }),
  preloadedState: {},
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    if (process.env.NODE_ENV !== 'production') {
      const logger = createLogger();
      middlewares.push(logger);
    }
    return middlewares;
  },
});

export default store;
