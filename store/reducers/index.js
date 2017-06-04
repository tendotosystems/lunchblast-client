import { combineReducers } from 'redux'
import { isLoading } from './loading'
import { user } from './user'
import { token } from './token'
import { destination } from './destination'

const rootReducer = combineReducers({
  isLoading,
  user,
  token,
  destination
})

export default rootReducer