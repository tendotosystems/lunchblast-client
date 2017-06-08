import { combineReducers } from 'redux'
import { isLoading } from './loading'
import { user } from './user'
import { auth } from './auth'
import { destination } from './destination'
import { quote } from './quote'
import { error } from './error'

const rootReducer = combineReducers({
  isLoading,
  user,
  auth,
  destination,
  quote,
  error
})

export default rootReducer