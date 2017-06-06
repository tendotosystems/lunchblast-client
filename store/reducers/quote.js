import * as constants from '../constants'

let init = ''

export const quote = (state = init, action) => {
  switch(action.type) {
    case constants.SET_QUOTE:
      return action.payload
    case constants.LOGOUT:
      return init
    default:
      return state
  }
}