import { combineReducers } from 'redux'
import { isLoading } from './loading'
import { user } from './user'
import { token } from './token'
import { destination } from './destination'
import { quote } from './quote'

const rootReducer = combineReducers({
  isLoading,
  user,
  token,
  destination,
  quote
})

export default rootReducer