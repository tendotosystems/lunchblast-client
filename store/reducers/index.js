import { combineReducers } from 'redux'
import { isLoading } from './loading'
import { user } from './user'
import { auth } from './auth'
import { destination } from './destination'
import { quote } from './quote'
import { notification } from './notification'
import { error } from './error'

const rootReducer = combineReducers({
  isLoading,
  user,
  auth,
  destination,
  quote,
  error,
  notification
})

export default rootReducer