import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';

const rootReducer = combineReducers({ info: reducer });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
