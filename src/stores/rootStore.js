import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';


export default function rootStore(initialState, history) {
  const middleware = [null, thunk, routerMiddleware(history)].filter(Boolean);

  const store = createStore(
    rootReducer(history), 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)));

  return store;

}
