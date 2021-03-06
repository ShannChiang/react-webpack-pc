import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import user from './reducer';
import author from '@/pages/PageOne/redux/reducer'
const store=createStore(
  combineReducers({
    user,
    author
  }),
  applyMiddleware(thunk)
)
export default store;