import * as constants from '../constants'

export const token = (state = null, action) => {
  switch(action.type) {
    case constants.SET_TOKEN:
      return action.payload
    default:
      return state
  }
}