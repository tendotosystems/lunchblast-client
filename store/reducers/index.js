import { combineReducers } from 'redux'
import { isLoading } from './loading'
import { user } from './user'
import { auth } from './auth'
import { destination } from './destination'
import { quote } from './quote'

const rootReducer = combineReducers({
  isLoading,
  user,
  auth,
  destination,
  quote
})

export default rootReducer