import * as constants from '../constants'

export const isLoading = (state = false, action) => {
  switch(action.type) {
    case constants.BEGIN_FETCH:
      return true
    case constants.END_FETCH:
      return false
    default:
      return state
  }
}