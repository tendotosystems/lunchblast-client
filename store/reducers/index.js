import { combineReducers } from 'redux'
import { isLoading } from './loading'

const rootReducer = combineReducers({
  isLoading
})

export default rootReducer