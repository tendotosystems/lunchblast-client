import * as constants from '../constants'

let init = ''
export const error = (state = init, action) => {
  switch(action.type) {
    case constants.SET_ERROR:
      return action.payload
    case constants.CLEAR_ERROR:
      return init
    default:
      return state
  }
}