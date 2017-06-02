import { combineReducers } from 'redux'
import { isLoading } from './loading'
import { user } from './user'
import { token } from './token'

const rootReducer = combineReducers({
  isLoading,
  user,
  token
})

export default rootReducer