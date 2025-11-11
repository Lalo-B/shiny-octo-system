import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { batchedSubscribe } from 'redux-batched-subscribe';
import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({
  // Add your reducers here
});

// due to updated syntax using redux toolkit we dont need this bottom code
// let enhancer;
// if(import.meta.env.MODE === 'production') {
//   // enhancer = applyMiddleware(thunk);
//   // this is auto added with configureStore
//   //enhancer field must be a callback
// } else {
//   const logger = (await import("redux-logger")).default;
//   //can we use require('redux-logger').default here?
//   // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   enhancer = composeEnhancers(applyMiddleware(logger));
// }


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
