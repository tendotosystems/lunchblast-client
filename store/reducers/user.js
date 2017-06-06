import * as constants from '../constants'

// Nothing to see here, move along
const init = {}

export const user = (state = init, action) => {
  switch(action.type) {
    case constants.SET_USER:
      return Object.assign({}, init, action.payload)
    case constants.LOGOUT:
      return init
    default:
      return state
  }
}