import * as constants from '../constants'

export const quote = (state = '', action) => {
  switch(action.type) {
    case constants.SET_QUOTE:
      return action.payload
    default:
      return state
  }
}