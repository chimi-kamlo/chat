import { createStore, combineReducers } from 'redux';
//import { messageReducer } from './reducers/messageReducer';
//import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  messages: messageReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);