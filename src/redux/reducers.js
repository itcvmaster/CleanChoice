import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import api from './api/reducer';


const reducers = combineReducers({
  menu,
  settings,
  api
});

export default reducers;