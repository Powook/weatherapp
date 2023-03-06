import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk";
import weatherReducer from '../reducers/index'

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  weatherReducer: weatherReducer
})

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);


export default store;