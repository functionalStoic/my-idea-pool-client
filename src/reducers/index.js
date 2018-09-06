import { combineReducers } from 'redux';

import auth from './auth';
import ideas from './ideas';

export default combineReducers({ auth, ideas });
