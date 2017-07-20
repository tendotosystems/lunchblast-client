import * as constants from '../constants'

let init = ''

export const notification = (state = init, action) => {
  switch(action.type) {
    case constants.RECEIVED_NOTIFICATION:
      return action.payload
    case constants.CLEAR_NOTIFICATION:
      return init
    default:
      return state
  }
}